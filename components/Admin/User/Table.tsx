"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getUsers } from "@/api/admin/users/users";
import { TBody } from "./TBody";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";

export const Table = () => {
  const { data: initialUsers, isLoading, isError } = getUsers();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const searchFilter = searchParams.get("filter");
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  const [filter, setFilter] = useState(searchFilter ?? "all");
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = useMemo(() => {
    let filteredData = [...initialUsers];

    if (filter === "owner") {
      filteredData = filteredData.filter(
        user => user.role.includes("owner")
      );
    } else if (filter === "activate") {
      filteredData = filteredData.filter((user) => user.status === 1);
    } else if (filter === "deactivate") {
      filteredData = filteredData.filter((user) => user.status === 0);
    }

    if (searchTerm) {
      filteredData = filteredData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialUsers, filter, searchTerm]);

  useEffect(() => {
    setPageCount(Math.ceil(filteredUsers.length / itemsPerPage));
  }, [currentPage, itemsPerPage, filteredUsers.length]);

  useEffect(() => {
    if (searchPage !== currentPage.toString()) {
      router.push(
        pathname +
          "?" +
          createQueryString("page", currentPage.toString(), searchParams),
        { scroll: false }
      );
    }
  }, [currentPage, router, searchPage]);

  useEffect(() => {
    router.push(
      pathname +
        "?" +
        createQueryString("filter", filter.toString(), searchParams),
      { scroll: false }
    );
  }, [filter]);

  const itemsToDisplay = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const buttonClass = (type: string) =>
    `flex items-center justify-center py-[7px] px-[20px] rounded bg-[#03C0EA] transition-all duration-300 ease-out hover:text-white hover:bg-opacity-100 font-medium ${
      filter === type
        ? "bg-opacity-100 text-white"
        : "text-[#03C0EA] bg-opacity-20"
    }`;

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <ul className="flex flex-wrap gap-[5px]">
          {["all", "owner", "activate", "deactivate"].map(type => (
            <li key={type}>
              <button
                className={buttonClass(type)}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-lg shadow">
        <TableTemplate head={["Name", "Email", "Orders", "Role", "Details"]}>
          <TBody users={itemsToDisplay} />
        </TableTemplate>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
