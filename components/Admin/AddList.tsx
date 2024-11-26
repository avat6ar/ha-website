import { useMemo, useState } from "react";
import { FormGroup } from "../FormGroup";
import { FaCircleCheck } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export const AddList = ({
  setValue,
  title,
  placeholder,
  value,
  error,
}: {
  setValue: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  title: string;
  placeholder: string;
  value: string[] | undefined;
  error?: string | null;
}) => {
  const [name, setName] = useState<string>("");

  const onClick = () => {
    setValue((prev) => (prev ? [...prev, name] : [name]));
    setName("");
  };

  const onRemove = (name: string) => {
    setValue((prev) => prev?.filter((v) => v !== name));
  };

  return (
    <div className="w-full relative">
      <label className="text-[18px] text-[#39557E] font-medium font-body mb-[4px] block">
        {title}
      </label>
      <div className="flex mt-[4px]">
        <input
          type="text"
          id="new_value"
          name="new_value"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
          className="block grow text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[12px] py-[15px] bg-white rounded-tl-md rounded-bl-md border border-[#D0DAE9]"
        />
        <button
          type="button"
          onClick={onClick}
          className="bg-[#1363DF] text-white px-[20px] py-[15px] rounded-tr-md rounded-br-md text-[16px] leading-[1.5] font-medium hover:bg-[#082A5E] transition-all duration-300 ease-out disabled:bg-[#082A5E]"
        >
          Add
        </button>
      </div>
      {error && <p className="mt-2 text-pink-600 text-base">{error}</p>}
      <ul className="flex flex-col gap-[8px] mt-[4px]">
        {value?.map((val, index) => (
          <li className="flex justify-between text-[18px]" key={index}>
            <span className="flex">
              <FaCircleCheck className="text-[20px] mr-[10px] mt-[5px] text-[#1363DF]" />
              {val}
            </span>
            <button
              type="button"
              className="text-xl"
              onClick={() => onRemove(val)}
            >
              <AiOutlineDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
