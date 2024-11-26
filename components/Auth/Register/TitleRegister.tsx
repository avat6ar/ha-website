"use client";
import { useState } from "react";

export const TitleRegister = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  return (
    <>
      <h3
        className="xl:text-[40px] lg:text-[34px] text-[30px] leading-[1.19] mb-[20px] font-heading text-[#082A5E] font-semibold"
        onMouseEnter={() => {
          setPath1DashOffset(146);
          setPath2DashOffset(106);
          setTimeout(() => {
            setPath1DashOffset(0);
            setPath2DashOffset(0);
          }, 700);
        }}
      >
        Create{" "}
        <span className="text-[#1363DF] relative">
          <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto -bottom-[14px] z-[-1] w-[108px] h-[25px]">
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
          your
        </span>{" "}
        free account
      </h3>
      <p className="font-body xl:text-[20px] lg:text-[16px] text-[14px] leading-[1.75] font-normal text-[#39557E]">
        See how the world’s best user experiences are created
      </p>
    </>
  );
};
