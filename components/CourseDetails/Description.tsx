import { FaCircleCheck } from "react-icons/fa6";

export const Description = ({
  goals,
  requirements,
  text,
}: {
  goals: string[];
  requirements: string[];
  text: string;
}) => {
  return (
    <div className="block">
      <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
        {text}
      </p>
      <div className="mt-[46px] block relative">
        <h3 className="text-[22px] mb-[15px] font-heading text-[#082A5E] font-semibold leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
          What Will You Learn?
        </h3>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          This tutorial will help you learn quickly and thoroughly. Lorem ipsum,
          or lipsum as it is sometimes known, iaws dumm text used in laying out
          print, graphic or web designsm dolor sit amet.
        </p>
        <ul className="flex items-center flex-wrap">
          {goals &&
            goals.map((gol, index) => (
              <li
                className="md:w-1/2 w-full flex text-[18px] mb-[5px]"
                key={index}
              >
                <FaCircleCheck className="text-[20px] mr-[10px] mt-[5px] text-[#1363DF]" />
                {gol}
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-[46px] block relative">
        <h3 className="text-[22px] mb-[15px] font-heading text-[#082A5E] font-semibold leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
          Requirements
        </h3>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          This tutorial will help you learn quickly and thoroughly. Lorem ipsum,
          or lipsum as it is sometimes
        </p>
        <ul className="flex items-center flex-wrap">
          {requirements &&
            requirements.map((requirement, index) => (
              <li
                className="md:w-1/2 w-full flex text-[18px] mb-[5px]"
                key={index}
              >
                <FaCircleCheck className="text-[20px] mr-[10px] mt-[5px] text-[#1363DF]" />
                {requirement}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
