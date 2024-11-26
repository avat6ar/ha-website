"use client";
import { useState } from "react";
import { FeaturedCourseCard } from "./FeaturedCourseCard";
import { getCourses } from "@/api/Home";
import { Course } from "@/types";

export const FeaturedCourses = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const { data: courses, isLoading, isError } = getCourses();

  return (
    <section className="relative bg-[#F4F7FB] z-[1] pb-[90px] pt-[120px]">
      <div className="container">
        <div className="mb-[50px]">
          <div className="text-center">
            <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
              10,000+ Unique Online Courses
            </span>
            <h3
              className="md:text-[36px] text-[29px] leading-[1.32] mb-[20px] font-heading text-[#082A5E] font-semibold tracking-[-1px] capitalize"
              onMouseEnter={() => {
                setPath1DashOffset(146);
                setPath2DashOffset(106);
                setTimeout(() => {
                  setPath1DashOffset(0);
                  setPath2DashOffset(0);
                }, 700);
              }}
            >
              Our{" "}
              <span className="text-[#1363DF] relative">
                <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto -bottom-[15px] w-[145px] h-[25px]">
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
                Featured
              </span>{" "}
              Courses
            </h3>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {isLoading &&
            [...Array(3).keys()].map((i) => (
              <div className="col-span-1 group" key={i}>
                <div className="bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.03)] rounded-[10px] overflow-hidden flex flex-col gap-[8px]">
                  <div
                    className="w-full h-[200px] bg-slate-200 animate-pulse"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      animationDirection: "1s",
                    }}
                  ></div>
                  <div className="block pt-[25px] pb-[40px] px-[35px]">
                    <div
                      className="h-2 bg-slate-200 rounded w-8 inline-block mb-2 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        animationDirection: "1s",
                      }}
                    ></div>
                    <div
                      className="h-2 bg-slate-200 rounded w-3/4 mb-2 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        animationDirection: "1s",
                      }}
                    ></div>
                    <div
                      className="h-2 bg-slate-200 rounded w-1/2 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        animationDirection: "1s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          {courses &&
            courses.map((course, index) => (
              <FeaturedCourseCard course={course} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
