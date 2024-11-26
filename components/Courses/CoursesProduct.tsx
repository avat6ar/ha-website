"use client";
import { useCallback, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSpring, animated } from "@react-spring/web";
import ReactPaginate from "react-paginate";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { CourseGridCard, CourseListCard } from "./CourseCard";
import type { Course } from "@/types";
export const CoursesProduct = ({
  courses,
  loading,
  handleSearchChange,
}: {
  courses: Course[] | [];
  loading: boolean;
  handleSearchChange: (value: string) => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get("page");
  const searchTab = searchParams.get("tab");
  const search = searchParams.get("search");
  const [tab, setTab] = useState(searchTab ? searchTab : "grid");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(
    searchPage ? parseInt(searchPage, 10) : 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    setPageCount(Math.ceil(courses.length / itemsPerPage));
  }, [currentPage, itemsPerPage, courses.length]);

  useEffect(() => {
    if (searchPage !== currentPage.toString()) {
      router.push(
        pathname + "?" + createQueryString("page", currentPage.toString()),
        { scroll: false }
      );
    }
  }, [currentPage, router, searchPage]);

  useEffect(() => {
    if (tab == "grid") {
      setItemsPerPage(12);
    } else {
      setItemsPerPage(7);
    }
    router.push(pathname + "?" + createQueryString("tab", tab.toString()), {
      scroll: false,
    });
  }, [tab]);

  const handlePageClick = (selectedItem: any) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchInput = e.currentTarget.search.value;

    handleSearchChange(searchInput);
  };

  const itemsToDisplay = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const gridSpring = useSpring({
    opacity: tab === "grid" ? 1 : 0,
    delay: tab === "grid" ? 0 : 300,
  });

  const listSpring = useSpring({
    opacity: tab === "list" ? 1 : 0,
    delay: tab === "list" ? 0 : 300,
  });

  return (
    <>
      <div className="mb-[30px]">
        <div className="flex md:flex-nowrap flex-wrap items-center gap-[30px]">
          <div className="md:w-1/2 w-full md:text-left text-center">
            <p className="text-[18px] font-body leading-[1.75] text-[#39557E]">
              We found {courses.length} courses for you
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex justify-end items-center gap-[15px]">
              <div className="block relative grow">
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search For Course . . ."
                    className="pt-[12px] pr-[50px] pb-[10px] pl-[20px] h-[45px] text-[15px] font-heading border border-[#D0DAE9] bg-white block w-full rounded-[50px]"
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-[15px] text-[24px] text-[#8D9DB5]"
                  >
                    <IoIosSearch />
                  </button>
                </form>
              </div>
              <ul className="flex gap-[10px] relative">
                <li className="block">
                  <button
                    type="button"
                    className={`flex items-center justify-center w-[40px] h-[40px] border rounded-[4px] ${
                      tab == "grid"
                        ? "border-[#1363DF] bg-[#1363DF] text-white"
                        : "border-[#6196EA] bg-white text-[#1363DF]"
                    }`}
                    onClick={() => setTab("grid")}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 1H2C1.44772 1 1 1.44772 1 2V6C1 6.55228 1.44772 7 2 7H6C6.55228 7 7 6.55228 7 6V2C7 1.44772 6.55228 1 6 1Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16 1H12C11.4477 1 11 1.44772 11 2V6C11 6.55228 11.4477 7 12 7H16C16.5523 7 17 6.55228 17 6V2C17 1.44772 16.5523 1 16 1Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M6 11H2C1.44772 11 1 11.4477 1 12V16C1 16.5523 1.44772 17 2 17H6C6.55228 17 7 16.5523 7 16V12C7 11.4477 6.55228 11 6 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16 11H12C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li className="block">
                  <button
                    type="button"
                    className={`flex items-center justify-center w-[40px] h-[40px] border rounded-[4px] ${
                      tab == "list"
                        ? "border-[#1363DF] bg-[#1363DF] text-white"
                        : "border-[#6196EA] bg-white text-[#1363DF]"
                    }`}
                    onClick={() => setTab("list")}
                  >
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 6C0.67 6 0 6.67 0 7.5C0 8.33 0.67 9 1.5 9C2.33 9 3 8.33 3 7.5C3 6.67 2.33 6 1.5 6ZM1.5 0C0.67 0 0 0.67 0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0ZM1.5 12C0.67 12 0 12.68 0 13.5C0 14.32 0.68 15 1.5 15C2.32 15 3 14.32 3 13.5C3 12.68 2.33 12 1.5 12ZM5.5 14.5H17.5C18.05 14.5 18.5 14.05 18.5 13.5C18.5 12.95 18.05 12.5 17.5 12.5H5.5C4.95 12.5 4.5 12.95 4.5 13.5C4.5 14.05 4.95 14.5 5.5 14.5ZM5.5 8.5H17.5C18.05 8.5 18.5 8.05 18.5 7.5C18.5 6.95 18.05 6.5 17.5 6.5H5.5C4.95 6.5 4.5 6.95 4.5 7.5C4.5 8.05 4.95 8.5 5.5 8.5ZM4.5 1.5C4.5 2.05 4.95 2.5 5.5 2.5H17.5C18.05 2.5 18.5 2.05 18.5 1.5C18.5 0.95 18.05 0.5 17.5 0.5H5.5C4.95 0.5 4.5 0.95 4.5 1.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <animated.div
        style={{
          ...gridSpring,
          display: tab === "grid" ? "grid" : "none",
        }}
        className="xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] transition-[opacity] duration-300 ease-linear"
      >
        {loading &&
          [...Array(3).keys()].map((i, index) => (
            <div
              className="col-span-1 animate-pulse"
              key={index}
              style={{
                animationDelay: `${index * 1}s`,
                animationDirection: "1s",
              }}
            >
              <div className="border border-[#E8E8E8] rounded-[6px] p-[15px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.05)]">
                <div className="w-full h-[181px] bg-slate-200 relative rounded mb-[15px]">
                  <div className="absolute right-[15px] bottom-[-25px] w-[50px] h-[50px] bg-slate-200 rounded-full border-[3px] border-white"></div>
                </div>
                <div className="pt-[16px] pb-[5px] px-[7px]">
                  <div className="bg-slate-200 w-[130px] h-[27px] inline-block rounded mb-[13px]"></div>
                  <div className="bg-slate-200 w-full h-[46px] rounded mb-[16px]"></div>
                  <ul className="flex justify-between">
                    <li className="bg-slate-200 w-[43px] h-[20px] rounded"></li>
                    <li className="bg-slate-200 w-[81px] h-[20px] rounded"></li>
                    <li className="bg-slate-200 w-[42px] h-[20px] rounded"></li>
                  </ul>
                  <div className="flex items-center justify-between flex-wrap pt-[15px] mt-[20px] border-t border-[#D7DCE3]">
                    <div className="w-[84px] h-[20px] bg-slate-200 rounded"></div>
                    <div className="w-[54px] h-[20px] bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {itemsToDisplay &&
          itemsToDisplay.map((item) => (
            <CourseGridCard key={item.id} course={item} />
          ))}
      </animated.div>

      <animated.div
        style={{
          ...listSpring,
          display: tab === "list" ? "grid" : "none",
        }}
        className="grid-cols-1 gap-[30px] transition-all duration-300 ease-linear"
      >
        {loading &&
          [...Array(3).keys()].map((i, index) => (
            <div
              className="col-span-1 animate-pulse"
              key={index}
              style={{
                animationDelay: `${index * 1}s`,
                animationDirection: "1s",
              }}
            >
              <div className="border border-[#E8E8E8] rounded-[6px] p-[15px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.05)] flex md:flex-row flex-col gap-[25px]">
                <div className="w-[270px] h-[223px] bg-slate-200 relative rounded"></div>
                <div className="pr-[15px]">
                  <div className="bg-slate-200 w-[30px] h-[26] inline-block rounded mb-[8px]"></div>
                  <div className="bg-slate-200 w-full h-[27] rounded mb-[10px]"></div>
                  <ul className="flex justify-between mb-[15px]">
                    <li className="bg-slate-200 w-[43px] h-[20px] rounded"></li>
                    <li className="bg-slate-200 w-[81px] h-[20px] rounded"></li>
                    <li className="bg-slate-200 w-[42px] h-[20px] rounded"></li>
                    <li className="bg-slate-200 w-[42px] h-[20px] rounded"></li>
                  </ul>
                  <div className="bg-slate-200 w-full h-[52px] rounded"></div>
                  <div className="flex items-center justify-between flex-wrap pt-[15px] mt-[20px] border-t border-[#D7DCE3]">
                    <div className="flex gap-[12px] items-center">
                      <div className="w-[35px] h-[35px] bg-slate-200 rounded-full"></div>
                      <div className="w-[81px] h-[28px] bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="w-[96px] h-[22px] bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {itemsToDisplay &&
          itemsToDisplay.map((item) => (
            <CourseListCard key={item.id} course={item} />
          ))}
      </animated.div>

      <ReactPaginate
        className="flex justify-center items-center gap-[10px] flex-wrap relative mt-3"
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        nextLabel={null}
        previousLabel={null}
        previousClassName="absolute z-[-1]"
        nextClassName="absolute z-[-1]"
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        forcePage={currentPage - 1}
        activeClassName={"group active"}
        breakLinkClassName={
          "bg-[#E7EFFC] text-[#1363DF] rounded-[4px] text-[18px] font-heading font-medium flex items-center justify-center w-[45px] h-[45px] cursor-default"
        }
        pageLinkClassName={
          "bg-[#E7EFFC] text-[#1363DF] rounded-[4px] text-[18px] font-heading font-medium hover:text-white hover:bg-[#1363DF] transition-all duration-300 ease-out flex items-center justify-center w-[45px] h-[45px] group-[.active]:text-white group-[.active]:bg-[#1363DF]"
        }
        disabledClassName={"disabled"}
      />
    </>
  );
};
