import { IoIosSearch } from "react-icons/io";

export const BoxSearch = ({
  handleSearchChange,
}: {
  handleSearchChange: (categoryName: string) => void;
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchInput = e.currentTarget.search.value;

    handleSearchChange(searchInput);
  };

  return (
    <div className="mb-[30px] relative">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search here"
          className="block w-full pl-[25px] pr-[50px] py-[12px] border border-[#ECECEC] rounded-[5px] text-[#39557E] shadow-[0px_0px_10px_rgba(0,0,0,0.05)]"
        />
        <button
          type="button"
          className="block absolute right-[18px] top-1/2 -translate-y-1/2 text-[22px] text-[#1363DF]"
        >
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};
