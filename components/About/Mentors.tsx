"use client";
import Link from "next/link";
import { useState } from "react";
import { InstructorCard } from "./InstructorCard";
import { getInstructors } from "@/api/About";

export const Mentors = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const [path3DashOffset, setPath3DashOffset] = useState(0);
  const { data: instructors, isLoading } = getInstructors();

  return (
    <section className="pt-[120px] pb-[90px] relative">
      <div className="container">
        <div className="mb-[55px]">
          <div className="flex md:justify-between justify-center flex-wrap gap-[30px]">
            <div className="md:text-left text-center">
              <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
                Our Qualified People Matter
              </span>
              <h2
                className="md:text-[36px] text-[29px] leading-[1.32] font-heading text-[#082A5E] font-semibold"
                onMouseEnter={() => {
                  setPath1DashOffset(146);
                  setPath2DashOffset(106);
                  setTimeout(() => {
                    setPath1DashOffset(0);
                    setPath2DashOffset(0);
                  }, 700);
                }}
              >
                Top{" "}
                <span className="text-[#1363DF] relative inline-block">
                  <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto -bottom-[14px] z-[-1] w-[145px] h-[25px]">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 145 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
                        stroke="#FAB123"
                        strokeWidth="4"
                        style={{
                          strokeDasharray: "146, 148",
                          strokeDashoffset: path1DashOffset,
                          transition: "stroke-dashoffset 0.7s ease-in-out",
                        }}
                      ></path>
                      <path
                        d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
                        stroke="#FAB123"
                        strokeWidth="2"
                        style={{
                          strokeDasharray: "106, 108",
                          strokeDashoffset: path2DashOffset,
                          transition: "stroke-dashoffset 0.7s ease-in-out",
                        }}
                      ></path>
                    </svg>
                  </span>
                  Class
                </span>{" "}
                Mentors
              </h2>
            </div>
            <div className="flex md:justify-end justify-center items-center">
              <Link
                href="/"
                className="bg-white border border-[#1363DF] text-[#1363DF] px-[23px] pt-[19px] pb-[16px] flex items-center gap-[10px] text-[15px] tracking-[0.5px] leading-[1] uppercase font-semibold rounded-[4px] group transition-all ease-out duration-300 hover:bg-[#1363DF] hover:text-white"
                onMouseEnter={() => {
                  setPath3DashOffset(26);
                  setTimeout(() => {
                    setPath3DashOffset(0);
                  }, 400);
                }}
              >
                All Instructors
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
                        strokeDashoffset: path3DashOffset,
                        transition: "stroke-dashoffset 0.4s ease-in-out",
                      }}
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {instructors &&
            instructors.map((instructor, index) => (
              <InstructorCard key={index} instructor={instructor} />
            ))}
        </div>
      </div>
    </section>
  );
};
