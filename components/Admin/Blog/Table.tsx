"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import Link from "next/link";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getBlogs } from "@/api/admin/blog/blog";

export const Table = () => {
  const { data: initialBlogs } = getBlogs();

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

  const filteredBlogs = useMemo(() => {
    let filteredData = [...initialBlogs];

    if (searchTerm) {
      filteredData = filteredData.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialBlogs, searchTerm]);

  useEffect(() => {
    setPageCount(Math.ceil(filteredBlogs.length / itemsPerPage));
  }, [currentPage, itemsPerPage, filteredBlogs.length]);

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

  const itemsToDisplay = filteredBlogs.slice(
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
          href="/admin/blog/add"
          className="flex items-center justify-center py-[7px] px-[20px] rounded bg-[#03C0EA] transition-all duration-300 ease-out text-white font-medium"
        >
          Add Blog
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate
          head={["Title", "Category", "Writer", "Seen", "Details"]}
        >
          <TBody blog={itemsToDisplay} />
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
