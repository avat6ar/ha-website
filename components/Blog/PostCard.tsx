"use client";
import { HiOutlineUser } from "react-icons/hi2";
import { RxCalendar } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Blog } from "@/types";
import { IoEyeOutline } from "react-icons/io5";

export const PostCard = ({ blog }: { blog: Blog }) => {
  const [pathDashOffset, setPathDashOffset] = useState(0);

  return (
    <div className="mb-[40px] relative">
      <div className="block">
        <Link href={`/blog/${blog.link}`}>
          <Image
            src={blog.cover}
            width={770}
            height={374}
            quality={100}
            alt="img"
            className="rounded-tr-[8px] rounded-tl-[8px] w-full"
          />
        </Link>
      </div>
      <div className="border border-[#ECECEC] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] pt-[30px] md:px-[35px] px-[20px] pb-[35px] rounded-br-[8px] rounded-bl-[8px]">
        <a
          href="#"
          className="inline-block bg-[#E7EFFC] text-[14px] font-medium text-[#1363DF] leading-[1] pt-[9px] px-[18px] pb-[7px] rounded-[30px] mb-[12px] uppercase hover:bg-[#1363DF] hover:text-white transition-all duration-300 ease-out"
        >
          {blog.category}
        </a>
        <h3 className="md:text-[30px] text-[22px] font-heading text-[#082A5E] hover:text-[#1363DF] font-semibold leading-[1.35] transition-all duration-300 ease-out">
          <Link href={`/blog/${blog.link}`}>{blog.title}</Link>
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
              Admin
            </a>
          </li>
          <li className="flex items-center gap-[4px]">
            <span className="text-[#1363DF] text-[18px] mr-[4px]">
              <RxCalendar />
            </span>
            {blog.created_at}
          </li>
          <li className="flex items-center gap-[4px]">
            <span className="text-[#1363DF] text-[18px] mr-[4px]">
              <IoEyeOutline />
            </span>
            {blog.seen} Seen
          </li>
        </ul>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          {blog.text}
        </p>
        <div className="mt-[25px] flex">
          <Link
            href={`/blog/${blog.link}`}
            className="bg-[#1363DF] text-white px-[21px] pt-[15px] pb-[12px] flex items-center gap-[10px] text-[15px] tracking-[0.5px] leading-[1] uppercase font-semibold rounded-[4px] group transition-all ease-out duration-300 hover:bg-[#082A5E]"
            onMouseEnter={() => {
              setPathDashOffset(26);
              setTimeout(() => {
                setPathDashOffset(0);
              }, 400);
            }}
          >
            Continue Reading
            <span className="w-[14px] block mt-[-3px] text-white">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 14 13"
                fill="#1363DF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6249 6.81239H1.00011M12.6249 6.81239L7.78123 1.96873M12.6249 6.81239L7.78123 11.656"
                  className="stroke-white group-hover:stroke-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: "26, 28",
                    strokeDashoffset: pathDashOffset,
                    transition: "stroke-dashoffset 0.4s ease-in-out",
                  }}
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
