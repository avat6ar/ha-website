"use client";
import { Options } from "@/types/admin";
import { useEffect, useMemo, useState } from "react";

export const Select = ({
  options,
  setValue,
  title,
  id,
  placeholder,
  error,
  name,
  defaultValue,
  isLoading,
}: {
  options: Options[];
  setValue: React.Dispatch<React.SetStateAction<any>>;
  title: string;
  id: string;
  placeholder: string;
  error?: string | null;
  name: string;
  defaultValue?: number | string | null;
  isLoading?: boolean;
}) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const opt = useMemo(() => {
    const optionsData = options.filter(option =>
      option.name.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) {
      return (
        <li className="w-full h-20 bg-white flex justify-center items-center">
          <span className="text-neutral-600 text-base">Loading...</span>
        </li>
      );
    }

    return optionsData.length > 0
      ? optionsData.map((option, index) => (
          <li
            key={index}
            className="px-3 py-1 cursor-pointer text-neutral-600 hover:bg-neutral-300"
            onClick={() => {
              setValue(option.id);
              setValueInput(option.name);
              setOpen(false);
            }}
          >
            {option.name.toString()}
          </li>
        ))
      : [
          <li
            className="px-3 py-1 cursor-pointer text-neutral-600"
            key={"not-found"}
            onClick={() => {
              setValue("");
              setOpen(false);
            }}
          >
            No Matches Found
          </li>,
        ];
  }, [options, search, isLoading, defaultValue]);

  useEffect(() => {
    const value = options.find(opt => opt.id == defaultValue);
    if (value) {
      setValue(value.id.toString());
      setValueInput(value.name.toString());
    }
  }, [defaultValue]);

  return (
    <div className="relative">
      <div className="block">
        <label
          htmlFor={id}
          className="text-[18px] text-[#39557E] font-medium font-body mb-[4px] block"
        >
          {title}*
        </label>
        <input
          type="text"
          id={id}
          className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[12px] pr-[50px] py-[15px] bg-white rounded-md border border-[#D0DAE9]"
          name={name}
          value={isLoading ? "loading..." : valueInput ?? ""}
          onChange={e => {
            setValueInput(e.target.value);
            setSearch(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
        />
        <span
          className={`absolute top-[60px] right-[25px] border-[8px] border-l-transparent border-r-transparent border-b-0 border-t-neutral-900 transition-transform cursor-pointer z-[2] ${
            open ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setOpen(prev => !prev)}
        ></span>
      </div>
      {error && <p className="mt-2 text-pink-600 text-base">{error}</p>}
      <ul
        className={`absolute z-[2] top-[105%] w-full rounded-md transition-[height] bg-white duration-500 overflow-y-auto border-[#D0DAE9] ${
          open ? "max-h-20 border" : "max-h-0 border-0"
        }`}
      >
        {opt}
      </ul>
    </div>
  );
};
