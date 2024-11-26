"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Pagination } from "../Pagination";
import { createQueryString } from "@/lib/createQueryString";
import { TableTemplate } from "../TableTemplate";
import { getReviews } from "@/api/admin/reviews-course/reviews";

export const Table = () => {
  const { data: reviews, mutate ,isError} = getReviews();
  console.log("🚀 ~ Table ~ isError:", isError)

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(reviews.length / itemsPerPage));
  }, [currentPage, itemsPerPage, reviews]);

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

  const itemsToDisplay = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const handleData = () => {
    mutate();
  };

  return (
    <div className="w-full">
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate head={["Review", "Course Name", "Rate", "Delete"]}>
          <TBody reviews={itemsToDisplay} handleData={handleData} />
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
