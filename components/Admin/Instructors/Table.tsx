"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Pagination } from "../Pagination";
import { getInstructors } from "@/api/admin/Instructors/instructor";
import Link from "next/link";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";

export const Table = () => {
  const { data: initialInstructors, isLoading } = getInstructors();
  console.log("🚀 ~ Table ~ initialInstructors:", initialInstructors);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstructors = useMemo(() => {
    let filteredData = [...initialInstructors];

    if (searchTerm) {
      filteredData = filteredData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialInstructors, searchTerm]);

  useEffect(() => {
    setPageCount(Math.ceil(filteredInstructors.length / itemsPerPage));
  }, [currentPage, itemsPerPage, filteredInstructors.length]);

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

  const itemsToDisplay = filteredInstructors.slice(
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

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <Link
          href="/admin/instructors/add"
          className="flex items-center justify-center py-[7px] px-[20px] rounded bg-[#03C0EA] transition-all duration-300 ease-out text-white font-medium"
        >
          Add Instructor
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate
          head={[
            "Name",
            "Category",
            "experience",
            "Rate",
            "Courses",
            "Students",
            "Details",
          ]}
        >
          <TBody instructors={itemsToDisplay} />
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
