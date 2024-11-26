import ReactPaginate from "react-paginate";

export const Pagination = ({
  pageCount,
  currentPage,
  handlePageClick,
}: any) => {
  return (
    <ReactPaginate
      className="flex justify-center items-center gap-[10px] flex-wrap relative my-[15px]"
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
  );
};
