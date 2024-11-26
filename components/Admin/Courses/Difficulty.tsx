import { useEffect, useMemo, useState } from "react";

export const Difficulty = ({
  setValue,
  error,
  value,
}: {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  error?: string | null;
  value: string | undefined;
}) => {
  const options = ["easy", "medium", "hard"];
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const opt = useMemo(() => {
    const optionsData = options.filter((option) =>
      option.toLowerCase().includes(search.toLowerCase())
    );

    return optionsData.length > 0
      ? optionsData.map((option, index) => (
          <li
            key={index}
            className="px-3 py-1 cursor-pointer text-neutral-600 hover:bg-neutral-300"
            onClick={() => {
              setValue(option);
              setOpen(false);
            }}
          >
            {option.toString()}
          </li>
        ))
      : [
          <li
            className="px-3 py-1 cursor-pointer text-neutral-600 hover:bg-neutral-300"
            key={"not-found"}
            onClick={() => {
              setValue("");
              setOpen(false);
            }}
          >
            No Matches Found
          </li>,
        ];
  }, [options, search]);

  return (
    <div className="relative">
      <label
        htmlFor="select_difficulty"
        className="text-[18px] text-[#39557E] font-medium font-body mb-[4px] block"
      >
        Choose the difficulty of the course
      </label>
      <input
        type="text"
        id="select_difficulty"
        className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[12px] pr-[50px] py-[15px] bg-white rounded-md border border-[#D0DAE9]"
        name="select_difficulty"
        defaultValue={value}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setOpen(true)}
        placeholder="Select Difficulty Course"
      />
      <span
        className={`absolute top-[60px] right-[25px] border-[8px] border-l-transparent border-r-transparent border-b-0 border-t-neutral-900 transition-transform cursor-pointer z-[2] ${
          open ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      ></span>
      {error && <p className="mt-2 text-pink-600 text-base">{error}</p>}
      <ul
        className={`absolute z-[2] top-[105%] w-full rounded-md transition-[height] bg-white duration-500 overflow-hidden border-[#D0DAE9] ${
          open ? "max-h-40 border" : "max-h-0 border-0"
        }`}
      >
        {opt}
      </ul>
    </div>
  );
};
