"use client";
import { useEffect, useMemo, useState } from "react";
import { BoxSearch } from "../BoxSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { File } from "@/types/admin";
import { Pagination } from "../Pagination";
import { TableTemplate } from "../TableTemplate";
import { createQueryString } from "@/lib/createQueryString";
import { getFiles } from "@/api/admin/file/file";
import { UpdateFile } from "./UpdateFile";
import { AddFile } from "./AddFile";

export const Table = () => {
  const { data: initialFiles, mutate } = getFiles();
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
  const [file, setFile] = useState<File>();

  const filteredFiles = useMemo(() => {
    let filteredData = [...initialFiles];

    if (searchTerm) {
      filteredData = filteredData.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData;
  }, [initialFiles, searchTerm]);

  useEffect(
    () => setPageCount(Math.ceil(filteredFiles.length / itemsPerPage)),
    [currentPage, itemsPerPage, filteredFiles.length]
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

  const itemsToDisplay = filteredFiles.slice(
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

  const handleFileView = (id: number) => {
    const item = itemsToDisplay.find(file => file.id == id);
    console.log("🚀 ~ handleFileView ~ item:", item)
    setFile(item);
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-between md:flex-row flex-col flex-wrap md:items-center gap-[8px]">
        <BoxSearch onSearch={handleSearch} />
        <AddFile handleData={handleData} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate head={["Name", "Course Name", "File", "Details"]}>
          <TBody files={itemsToDisplay} handleFileView={handleFileView} />
        </TableTemplate>
        <UpdateFile file={file} handleData={handleData} />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
