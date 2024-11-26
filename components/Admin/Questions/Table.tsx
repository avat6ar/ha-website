"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Question } from "@/types/admin";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getQuestions } from "@/api/admin/questions/questions";
import { UpdateQuestion } from "./UpdateQuestion";
import { AddQuestion } from "./AddQuestion";
import axios from "@/lib/axios";
import { AddAnswer } from "./AddAnswer";

export const Table = () => {
  const { data: initialQuestions, mutate } = getQuestions();
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
  const [question, setQuestion] = useState<Question>();
  const [visible, setVisible] = useState(false);
  const [questionId, setQuestionId] = useState<number>();

  const filteredQuestions = useMemo(() => {
    let filteredData = [...initialQuestions];

    if (searchTerm) {
      filteredData = filteredData.filter(question =>
        question.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialQuestions, searchTerm]);

  useEffect(
    () => setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage)),
    [currentPage, itemsPerPage, filteredQuestions.length]
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

  const itemsToDisplay = filteredQuestions.slice(
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

  const handleQuestionView = (id: number) => {
    const item = itemsToDisplay.find(question => question.id == id);
    setQuestion(item);
  };

  const handleAddAnswer = (id: number) => {
    const question = initialQuestions.find(question => question.id == id);

    if (question && question.answer.length >= 4) {
      return;
    }

    if (question) {
      // const {data} = axios.post('/admin/answer')
      setQuestionId(question.id);
      setVisible(true);
    }
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <AddQuestion handleData={handleData} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate
          head={[
            "Title",
            "Quizz Title",
            "Answer 1",
            "Answer 2",
            "Answer 3",
            "Answer 4",
            "Details",
            "Action",
          ]}
        >
          <TBody
            questions={itemsToDisplay}
            handleQuestionView={handleQuestionView}
            handleAddAnswer={handleAddAnswer}
          />
        </TableTemplate>
        <UpdateQuestion question={question} handleData={handleData} />
        <AddAnswer
          questionId={questionId}
          handleData={handleData}
          visible={visible}
          setVisible={setVisible}
        />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
