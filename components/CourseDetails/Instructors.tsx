"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PiFileTextThin, PiUsers } from "react-icons/pi";
import type { InstructorDetails } from "@/types";

export const Instructors = ({
  instructor,
}: {
  instructor: InstructorDetails;
}) => {
  const [pathDashOffset, setPathDashOffset] = useState(0);
  const stars = Number(instructor.instructor_rate);

  const fullStars = Math.floor(stars);
  const decimalPart = stars % 1;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar className="text-[18px]" key={i} />);
  }

  if (decimalPart >= 0.25 && decimalPart <= 0.5) {
    starElements.push(<FaStarHalf className="text-[18px]" key="half" />);
  } else if (decimalPart > 0.5) {
    starElements.push(<FaStar className="text-[18px]" key="nextFull" />);
  }

  return (
    <>
      <div className="relative max-w-[230px] flex-auto">
        <Image
          src={instructor.profile}
          width={230}
          height={230}
          alt="img"
          className="object-cover h-full rounded-[10px]"
        />
      </div>
      <div className="relative flex-1">
        <h5 className="text-[20px] mb-[5px] font-heading text-[#082A5E] font-semibold leading-[1.2]">
          {instructor.name}
        </h5>
        <span className="block text-[14px] font-heading leading-[1] text-[#5A7093]">
          {instructor.instructor_category}
        </span>
        <ul className="flex w-full gap-[10px_17px] leading-[1] mt-[23px] mb-[10px] pb-[15px] border-b border-[#DBE1E8]">
          <li className="flex items-center gap-[8px]">
            <PiUsers className="text-[18px]" />
            {instructor.instructor_n_students.toString().padStart(2, "0")}{" "}
            Students
          </li>
          <li className="text-[#F8BC24] tracking-[-1] leading-[1] flex items-center gap-[7px]">
            {starElements}
            <span className="text-[#5A7093] tracking-[0]">
              ({instructor.instructor_rate})
            </span>
          </li>
        </ul>
        <p className="text-[16px] font-normal mb-[15px] font-body leading-[1.75] text-[#39557E]">
          {instructor.instructor_desc}
        </p>
        <div className="flex">
          <Link
            href={`/instructors/${instructor.instructor_link}`}
            className="bg-white border border-[#1363DF] text-[#1363DF] px-[21px] pt-[15px] pb-[12px] flex items-center gap-[10px] text-[15px] tracking-[0.5px] leading-[1] uppercase font-semibold rounded-[4px] group transition-all ease-out duration-300 hover:bg-[#1363DF] hover:text-white"
            onMouseEnter={() => {
              setPathDashOffset(26);
              setTimeout(() => {
                setPathDashOffset(0);
              }, 400);
            }}
          >
            See More
            <span className="w-[14px] block mt-[-3px] text-[#1363DF]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 14 13"
                fill="#1363DF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6249 6.81239H1.00011M12.6249 6.81239L7.78123 1.96873M12.6249 6.81239L7.78123 11.656"
                  className="stroke-[#1363DF] group-hover:stroke-white"
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
    </>
  );
};
