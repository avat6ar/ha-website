"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Lesson } from "@/types/admin";
import { AddLesson } from "./AddLesson";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getLessons } from "@/api/admin/lessons/lessons";
import { UpdateLesson } from "./UpdateLesson";

export const Table = () => {
  const { data: initialLessons, mutate } = getLessons();
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
  const [lesson, setLesson] = useState<Lesson>();

  const filteredLessons = useMemo(() => {
    let filteredData = [...initialLessons];

    if (searchTerm) {
      filteredData = filteredData.filter((lesson) =>
        lesson.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialLessons, searchTerm]);

  useEffect(
    () => setPageCount(Math.ceil(filteredLessons.length / itemsPerPage)),
    [currentPage, itemsPerPage, filteredLessons.length]
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

  const itemsToDisplay = filteredLessons.slice(
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
  const handleData = () => {
    mutate();
  };

  const handleLessonView = (id: number) => {
    const item = itemsToDisplay.find((lesson) => lesson.id == id);
    setLesson(item);
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <AddLesson onLessonAdded={handleData} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate
          head={["Name", "Courses Name", "Chapter Name", "Details"]}
        >
          <TBody lessons={itemsToDisplay} handleLessonView={handleLessonView} />
        </TableTemplate>
        <UpdateLesson lesson={lesson} handleData={handleData} />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
