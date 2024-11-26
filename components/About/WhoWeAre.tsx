"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const WhoWeAre = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const [path3DashOffset, setPath3DashOffset] = useState(0);

  return (
    <section className="py-[140px]">
      <div className="container">
        <div className="grid xl:grid-cols-12 justify-center gap-[30px]">
          <div className="xl:col-span-8">
            <div className="mb-[15px]">
              <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
                Who we are{" "}
              </span>
              <h2
                className="md:text-[36px] text-[29px] leading-[1.19] mb-[20px] font-heading text-[#082A5E] font-semibold"
                onMouseEnter={() => {
                  setPath1DashOffset(146);
                  setPath2DashOffset(106);
                  setTimeout(() => {
                    setPath1DashOffset(0);
                    setPath2DashOffset(0);
                  }, 700);
                }}
              >
                HA Training &{" "}
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
                  Consulting
                </span>{" "}
                L.T.D
              </h2>
            </div>
            <p className="font-medium text-[18px] leading-[1.45] mb-[13px] font-body text-[#082A5E]">
              Dr. HA Training & Consulting L.T.D has 18 years of experience in
              Auditing and Financial consulting. She graduated in 2005 with
              Bachelor Degree in Commerce from Cairo University. Since
              graduation from college Dr. Hala has gained significant experience
              as External and Internal auditor of many companies operating in
              many
            </p>
            <p className="font-body text-[16px] mb-[15px] leading-[1.75] font-normal text-[#39557E]">
              And she has 16 years of experience as Trainer for many and
              different individual people and companies in Egyptian and
              International accounting Standards, Egyptian Auditing Standards
              and special training programs.
            </p>
            <div className="mt-[35px] flex">
              <Link
                href="/"
                className="bg-[#1363DF] text-white px-[24px] pt-[19px] pb-[16px] flex items-center gap-[10px] text-[15px] tracking-[0.5px] leading-[1] uppercase font-semibold rounded-[4px] group transition-all ease-out duration-300 hover:bg-[#082A5E]"
                onMouseEnter={() => {
                  setPath3DashOffset(26);
                  setTimeout(() => {
                    setPath3DashOffset(0);
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
                        strokeDashoffset: path3DashOffset,
                        transition: "stroke-dashoffset 0.4s ease-in-out",
                      }}
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="xl:col-span-4 xl:block hidden">
            <div className="w-full">
              <Image
                src="/images/about_img03.webp"
                width={287}
                height={347}
                quality={70}
                alt="img"
                className="rounded-[8px] max-w-full ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
