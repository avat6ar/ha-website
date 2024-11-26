"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { BlogCategory } from "@/types/admin";
import { AddCategory } from "./AddCategory";
import { Pagination } from "../Pagination";
import { getBlogCategories } from "@/api/admin/blog-categories/blog-categories";
import { createQueryString } from "@/lib/createQueryString";
import { TableTemplate } from "../TableTemplate";

export const Table = () => {
  const { data: initialCategories, mutate } = getBlogCategories();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [pageCount, setPageCount] = useState(0);
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
  }, [currentPage, itemsPerPage, filteredCategories]);

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
        <TableTemplate head={["Name", "Blogs", "Details"]}>
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
