import { AboutInstructor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";

export const InstructorCard = ({
  instructor,
}: {
  instructor: AboutInstructor;
}) => {
  return (
    <div className="col-span-1">
      <div className="bg-white border border-[#D7DCE3] shadow-[0px_0px_20px] shadow-[rgba(0,0,0,0.06)] rounded-[10px] max-w-[270px] mx-auto mb-[30px]">
        <div className="text-center mx-[50px] mt-[38px] relative">
          <a href="#" className="block">
            <Image
              src={instructor.cover}
              width={168}
              height={168}
              alt="img"
              className="rounded-full shadow-[0px_0px_20px] shadow-[rgba(0,0,0,0.06)]"
            />
          </a>
          <div className="absolute top-1/2 right-[-15px] z-[2] -translate-y-1/2 group">
            <span className="bg-[#1363DF] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out">
              <IoShareSocialOutline />
            </span>
            <ul className="absolute flex right-[calc(100%+5px)] top-0 gap-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              <li className="opacity-0 invisible translate-x-[10px] transition-all duration-300 ease-out delay-[250ms] group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible">
                <a
                  href={instructor.facebook ? instructor.facebook : "#"}
                  target="_blank"
                  className="bg-[#1363DF] w-[40px] h-[40px] text-[14px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#1363DF]"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="opacity-0 invisible transition-all duration-300 ease-out delay-[150ms] group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible">
                <a
                  href={instructor.linkedin ? instructor.linkedin : "#"}
                  className="bg-[#1363DF] w-[40px] h-[40px] text-[14px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#1363DF]"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="block">
          <div className="px-[20px] pt-[15px] pb-[20px] text-center">
            <h4 className="text-[22px] font-medium mb-[8px] font-heading text-[#082A5E] leading-[1.2]">
              <Link
                href={`/instructor/${instructor.link}`}
                className="text-inherit hover:text-[#1363DF] transition-all duration-300 ease-out"
              >
                {instructor.name}
              </Link>
            </h4>
            <span className="block text-[15px] leading-[1]">
              {instructor.title}
            </span>
          </div>
          <div className="py-[21px] px-[28px] border-t border-[#D7DCE3]">
            <ul className="flex justify-between items-center">
              <li className="flex items-center leading-[1] gap-[5px]">
                <FaStar className="text-[#F8BC24]" />
                {instructor.rate.toString().padStart(2, "0")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
