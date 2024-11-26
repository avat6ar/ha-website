import { HiOutlineUser } from "react-icons/hi2";
import { RxCalendar } from "react-icons/rx";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaQuoteRight,
} from "react-icons/fa";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import type { BlogDetails } from "@/types";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";

export const Details = ({ details }: { details: BlogDetails }) => {
  return (
    <div className="mb-[50px]">
      <div className="mb-[30px">
        <Image
          src={details.cover}
          width={770}
          height={372}
          alt="img"
          className="rounded-[8px]"
        />
      </div>
      <div className="block w-full">
        <h3 className="md:text-[30px] text-[22px] font-heading text-[#082A5E] font-semibold leading-[1.35]">
          {details.title}
        </h3>
        <ul className="flex gap-[10px_30px] my-[23px] items-center flex-wrap leading-[1]">
          <li className="flex items-center gap-[4px]">
            <span className="text-[#1363DF] text-[18px] mr-[4px]">
              <HiOutlineUser />
            </span>{" "}
            by{" "}
            <a
              href="#"
              className="text-[#39557E] transition-all duration-300 ease-out hover:text-[#1363DF]"
            >
              {details.created_by}
            </a>
          </li>
          <li className="flex items-center gap-[4px]">
            <span className="text-[#1363DF] text-[18px] mr-[4px]">
              <RxCalendar />
            </span>
            {details.created_date}
          </li>
          <li className="flex items-center gap-[4px]">
            <span className="text-[#1363DF] text-[18px] mr-[4px]">
              <IoEyeOutline />
            </span>
            {details.seen} Seen
          </li>
        </ul>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          {details.text}
        </p>
        <h3 className="text-[24px] font-heading text-[#082A5E] font-semibold leading-[1.2] mb-[16px]">
          During this program
        </h3>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
          consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum
          that dolocons rsus mal suada and fadolorit.
        </p>
        <ul className="flex items-center flex-wrap">
          {details.goals.map((goal, index) => (
            <li
              className="md:w-1/2 w-full flex text-[18px] mb-[5px]"
              key={index}
            >
              <FaCircleCheck className="text-[20px] mr-[10px] mt-[5px] text-[#1363DF]" />
              {goal}
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <h5 className="text-[16px] font-heading text-[#082A5E] font-semibold leading-[1.2] mr-[20px] my-[7px]">
            Social Share :
          </h5>
          <ul className="flex flex-wrap items-center gap-[16px]">
            <li className="block">
              <a
                href="#"
                className="text-[16px] block leaing-[1] text-[#1363DF]"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="block">
              <a
                href="#"
                className="text-[16px] block leaing-[1] text-[#1363DF]"
              >
                <FaXTwitter />
              </a>
            </li>
            <li className="block">
              <a
                href="#"
                className="text-[16px] block leaing-[1] text-[#1363DF]"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="block">
              <a
                href="#"
                className="text-[16px] block leaing-[1] text-[#1363DF]"
              >
                <FaPinterestP />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
