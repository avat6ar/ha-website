"use client";
import { useState } from "react";
import { PostCard } from "./PostCard";
import { getBlogs } from "@/api/Home";
import { Post } from "@/types";

export const Blog = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);

  const { data: blogs, isLoading } = getBlogs();

  return (
    <section className="bg-[#F5F7FB] relative pt-[205px] pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-[30px]">
          <div className="xl:w-1/2 lg:w-[58.33333333%] md:w-[66.66666667%] w-full">
            <div className="text-center mb-[40px]">
              <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[13px] py-[7px] px-[15px]">
                Always Smart To Hear News
              </span>
              <h3
                className="text-[36px] leading-[1.32] font-heading text-[#082A5E] capitalize tracking-[-1px] font-semibold"
                onMouseEnter={() => {
                  setPath1DashOffset(146);
                  setPath2DashOffset(106);
                  setTimeout(() => {
                    setPath1DashOffset(0);
                    setPath2DashOffset(0);
                  }, 700);
                }}
              >
                Latest{" "}
                <span className="text-[#1363DF] relative">
                  <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto -bottom-[14px] w-[145px] h-[25px]">
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
                  News
                </span>{" "}
                & Blog
              </h3>
              <p className="mt-[20px] font-body text-[16px] leading-[1.75] font-normal text-[#39557E]">
                In this section, we offer you some articles that will help you
                grow your business and be Professional
              </p>
            </div>
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
          {blogs &&
            blogs.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};
