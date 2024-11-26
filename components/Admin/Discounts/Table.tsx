"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TBody } from "./TBody";
import { Discount } from "@/types/admin";
import { Pagination } from "../Pagination";
import { createQueryString } from "@/lib/createQueryString";
import { TableTemplate } from "../TableTemplate";
import { getDiscounts } from "@/api/admin/discounts/discounts";
import { AddDiscount } from "./AddDiscount";
import { UpdateDiscount } from "./UpdateDiscount";

export const Table = () => {
  const { data: initialDiscounts, mutate } = getDiscounts();
  console.log("🚀 ~ Table ~ initialDiscounts:", initialDiscounts)
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [pageCount, setPageCount] = useState(0);
  const [discount, setDiscount] = useState<Discount>();

  const filteredDiscounts = useMemo(() => {
    let filteredData = [...initialDiscounts];

    return filteredData;
  }, [initialDiscounts]);

  useEffect(() => {
    setPageCount(Math.ceil(filteredDiscounts.length / itemsPerPage));
  }, [currentPage, itemsPerPage, filteredDiscounts]);

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

  const itemsToDisplay = filteredDiscounts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const handleDiscountView = (id: number) => {
    const item = itemsToDisplay.find((discount) => discount.id == id);
    setDiscount(item);
  };

  const handleData = () => {
    mutate();
  };

  return (
    <div className="w-full">
      <div className="flex mb-[8px] justify-end flex-wrap items-center">
        <AddDiscount onDiscountAdded={handleData} />
      </div>
      <div className="border rounded-lg overflow-hidden shadow">
        <TableTemplate head={["Course Name", "Value", "Type", "Details"]}>
          <TBody
            discounts={itemsToDisplay}
            handleDiscountView={handleDiscountView}
          />
        </TableTemplate>
        <UpdateDiscount discount={discount} handleData={handleData} />
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
