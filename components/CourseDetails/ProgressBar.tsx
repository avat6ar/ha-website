import { FaStar } from "react-icons/fa";

export const ProgressBar = ({ stars, count, totalCount }: any) => {
  const percentage = (count / totalCount) * 100 + "%";

  return (
    <div className="flex items-center leading-[1] gap-[10px] mb-[17px]">
      <div className="text-[20px] flex items-center gap-[5px]">
        {stars}
        <FaStar className="text-[#F8BC24] text-[17px]" />
      </div>
      <div className="relative grow">
        <div className="bg-[#E0E3EB] rounded-[50px] h-[7px] w-full"></div>
        <div
          className="absolute top-0 left-0 h-[7px] rounded-[50px] bg-[#F8BC24]"
          style={{ width: percentage }}
        ></div>
      </div>
      <span className="text-[20px]">{count}</span>
    </div>
  );
};
