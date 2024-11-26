"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export const BoxSearch = ({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="relative md:w-[45%] w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search here"
          className="block w-full pl-[25px] pr-[50px] py-[7px] border border-[#ECECEC] rounded-[5px] text-[#39557E] shadow-[0px_0px_10px_rgba(0,0,0,0.05)]"
        />
        <button
          type="submit"
          className="block absolute right-[18px] top-1/2 -translate-y-1/2 text-[22px] text-[#1363DF]"
        >
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};
