"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getCategories } from "@/api/admin/categories/categories";
import { TBody } from "./TBody";
import { AddCategory } from "./AddCategory";
import { Pagination } from "../Pagination";
import { createQueryString } from "@/lib/createQueryString";
import { TableTemplate } from "../TableTemplate";

export const Table = () => {
  const { data: initialCategories, mutate } = getCategories();

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

  const filteredCategories = useMemo(() => {
    let filteredData = [...initialCategories];

    if (searchTerm) {
      filteredData = filteredData.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialCategories, searchTerm]);

  useEffect(() => {
    setPageCount(Math.ceil(filteredCategories.length / itemsPerPage));
  }, [currentPage, itemsPerPage, filteredCategories.length]);

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

  const itemsToDisplay = filteredCategories.slice(
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

  const handleCategoryAdded = () => {
    mutate();
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <AddCategory onCategoryAdded={handleCategoryAdded} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate head={["Name", "Courses", "Details"]}>
          <TBody categories={itemsToDisplay} />
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
