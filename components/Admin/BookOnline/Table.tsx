"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getBook } from "@/api/admin/book-online/book_online";

export const Table = () => {
  const { data: books, mutate } = getBook();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );

  useEffect(
    () => setPageCount(Math.ceil(books.length / itemsPerPage)),
    [currentPage, itemsPerPage, books.length]
  );

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

  const itemsToDisplay = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
  };
  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate
          head={["Full Name", "Email", "Whatsapp", "Country", "Details"]}
        >
          <TBody books={itemsToDisplay} />
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
