"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import {
  deleteAllConsulting,
  getConsultings,
} from "@/api/admin/consulting/consulting";

export const Table = () => {
  const { data: consultings, mutate, isError } = getConsultings();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(
    () => setPageCount(Math.ceil(consultings.length / itemsPerPage)),
    [currentPage, itemsPerPage, consultings.length]
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

  const itemsToDisplay = consultings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const onDeleteAll = async () => {
    setLoading(true);

    try {
      await deleteAllConsulting();
      mutate();
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="md:flex mb-[8px] justify-end">
        <button
          type="button"
          onClick={onDeleteAll}
          className="flex items-center justify-center py-[7px] px-[20px] rounded bg-[#FF2020] text-[#FF2020] bg-opacity-30 transition-all duration-300 ease-out font-medium"
        >
          {loading ? "loading..." : "Delete All Seen"}
        </button>
        {message && (
          <p
            className={`mt-2 text-base ${
              message.type == "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.message}
          </p>
        )}
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate head={["Name", "Email", "Number", "Seen", "Details"]}>
          <TBody consultings={itemsToDisplay} />
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
