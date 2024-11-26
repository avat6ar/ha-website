import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { styles } from "./bg_styles";
import type { AllInstructor } from "@/types";

export const InstructorCard = ({
  instructor,
}: {
  instructor: AllInstructor;
}) => {
  const index: number = Math.floor(Math.random() * styles.length - 1);

  return (
    <div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
      <div className="block w-full relative text-center mb-[20px] z-[1]">
        <div
          className="absolute left-0 bottom-0 z-[-1] w-full h-[calc(100%-95px)]"
          style={styles[index]}
          data-style={index}
        ></div>
        <Link href={`/instructors/${instructor.link}`}>
          <Image
            src={instructor.cover}
            alt="img"
            className="w-full"
            width={270}
            height={330}
            quality={100}
          />
        </Link>
      </div>
      <div className="flex">
        <div className="grow">
          <span className="block text-[15px] text-[#5A7093] leading-[1] font-heading mb-[8px]">
            {instructor.category}
          </span>
          <h4 className="text-[22px] font-medium font-heading text-[#082A5E] leading-[1.2]">
            <Link
              href={`/instructors/${instructor.link}`}
              className="transition-all duration-300 ease-out text-inherit hover:text-[#1363DF]"
            >
              {instructor.name}
            </Link>
          </h4>
        </div>
        <div className="flex-[0_0_auto] relative z-[1] group">
          <span className="bg-[#E7EFFC] w-[40px] h-[40px] text-[19px] flex justify-center items-center rounded-full text-[#1363DF] cursor-pointer transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]">
            <IoShareSocialOutline />
          </span>
          <ul className="flex flex-col absolute left-0 bottom-[calc(100%+25px)] gap-[10px] z-[2] invisible">
            <li className="opacity-0 invisible translate-y-[10px] transition-all duration-300 ease-out delay-[250ms] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
              <a
                href={instructor.facebook ?? "https://www.facebook.com"}
                target="_blank"
                className="bg-[#1363DF] w-[40px] h-[40px] text-[14px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#1363DF]"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="opacity-0 invisible translate-y-[10px] transition-all duration-300 ease-out delay-[200ms] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
              <a
                href={instructor.instagram ?? "https://instagram.com"}
                target="_blank"
                className="bg-[#1363DF] w-[40px] h-[40px] text-[14px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#1363DF]"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="opacity-0 invisible translate-y-[10px] transition-all duration-300 ease-out delay-[150ms] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
              <a
                href={instructor.linkeding ?? "https://linkedin.com/"}
                target="_blank"
                className="bg-[#1363DF] w-[40px] h-[40px] text-[14px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#1363DF]"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="opacity-0 invisible transition-all duration-300 ease-out delay-[100ms] group-hover:opacity-100 group-hover:visible">
              <a
                href={instructor.youtube ?? "https://www.youtube.com"}
                className="bg-[#1363DF] w-[40px] h-[40px] text-[14px] flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-[#1363DF]"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
