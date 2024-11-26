"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Chapters } from "@/types/admin";
import { AddChapter } from "./AddChapter";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getChapters } from "@/api/admin/chapters/chapters";

export const Table = () => {
  const { data: initialChapters, mutate, isError } = getChapters();

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

  const filteredChapters = useMemo(() => {
    let filteredData = [...initialChapters];

    if (searchTerm) {
      filteredData = filteredData.filter((chapter) =>
        chapter.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filteredData;
  }, [initialChapters, searchTerm]);

  useEffect(
    () => setPageCount(Math.ceil(filteredChapters.length / itemsPerPage)),
    [currentPage, itemsPerPage, filteredChapters.length]
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

  const itemsToDisplay = filteredChapters.slice(
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

  const handleChapterAdded = () => {
    mutate();
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <AddChapter onChapterAdded={handleChapterAdded} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate head={["Name", "Courses Name", "Lessons", "Details"]}>
          <TBody chapters={itemsToDisplay} />
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
