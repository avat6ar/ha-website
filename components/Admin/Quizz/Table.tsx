"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Quizz } from "@/types/admin";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getQuizzs } from "@/api/admin/quizz/quizz";
import { UpdateQuizz } from "./UpdateQuizz";
import { AddQuizz } from "./AddQuizz";

export const Table = () => {
  const { data: initialQuizzs, mutate } = getQuizzs();
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
  const [quizz, setQuizz] = useState<Quizz>();

  const filteredQuizzs = useMemo(() => {
    let filteredData = [...initialQuizzs];

    if (searchTerm) {
      filteredData = filteredData.filter(quizz =>
        quizz.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialQuizzs, searchTerm]);

  useEffect(
    () => setPageCount(Math.ceil(filteredQuizzs.length / itemsPerPage)),
    [currentPage, itemsPerPage, filteredQuizzs.length]
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

  const itemsToDisplay = filteredQuizzs.slice(
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

  const handleQuizzView = (id: number) => {
    const item = itemsToDisplay.find(quizz => quizz.id == id);
    setQuizz(item);
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <AddQuizz handleData={handleData} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate
          head={[
            "Title",
            "Courses Name",
            "Type",
            "Final grade",
            "Success rate",
            "Details",
          ]}
        >
          <TBody quizzs={itemsToDisplay} handleQuizzView={handleQuizzView} />
        </TableTemplate>
        <UpdateQuizz quizz={quizz} handleData={handleData} />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
