"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { FormOnline } from "../CourseDetails/FormOnline";

export const HeroSection = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const [path3DashOffset, setPath3DashOffset] = useState(0);

  return (
    <section
      className={`w-full relative xl:min-h-[692px] min-h-[609px] flex items-end lg:pt-[163px] pt-[170px] z-[1]`}
    >
      <Image
        src="/images/banner_bg.webp"
        width={1500}
        height={700}
        alt="banner_bg"
        quality={10}
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[28px]">
          <div className="col-span-1">
            <div className="lg:pt-[60px] lg:pb-[70px] relative text-center xl:text-left">
              <Image
                src="/images/bshape_01.webp"
                alt="shape"
                quality={50}
                width={58}
                priority={true}
                height={58}
                className="md:max-w-[58px] max-w-[35px] absolute top-[4%] lg:-left-[15%] left-[-2%] animate-alltuchtopdown"
              />
              <Image
                src="/images/bshape_02.webp"
                quality={50}
                width={44}
                height={44}
                alt="shape"
                className="max-w-[44px] absolute lg:-top-[15px] -top-[35%] right-[41%]"
              />
              <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
                100% Satisfaction Guarantee
              </span>
              <h3
                className="xl:text-[55px] md:text-[41px] text-[33px] leading-[1.19] mb-[20px] font-heading text-[#082A5E] font-semibold"
                onMouseEnter={() => {
                  setPath1DashOffset(146);
                  setPath2DashOffset(106);
                  setTimeout(() => {
                    setPath1DashOffset(0);
                    setPath2DashOffset(0);
                  }, 700);
                }}
              >
                Learn{" "}
                <span className="text-[#1363DF] relative">
                  <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto md:-bottom-[11px] -bottom-[15px] w-[145px] h-[25px]">
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
                  Skills
                </span>{" "}
                From Our Top Instructors
              </h3>
              {/* Explore Courses Button */}
              <div className="flex mt-[34px] xl:justify-start justify-center">
                <Link
                  href="/courses"
                  onMouseEnter={() => {
                    setPath3DashOffset(26);
                    setTimeout(() => {
                      setPath3DashOffset(0);
                    }, 300);
                  }}
                  className="pt-[19px] pb-[16px] px-[24px] text-[15px] text-white font-semibold border border-[#D0DAE9] bg-[#1363DF] uppercase tracking-[0.5px] leading-[1] flex items-center gap-[10px] text-center rounded-[4px] font-body hover:text-white hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
                >
                  Explore Courses
                  <span className="w-[14px] block mt-[-3px]">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6249 6.81239H1.00011M12.6249 6.81239L7.78123 1.96873M12.6249 6.81239L7.78123 11.656"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          strokeDasharray: "26, 28",
                          strokeDashoffset: path3DashOffset,
                          transition: "stroke-dashoffset 0.3s ease-in-out",
                        }}
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sapn-1">
            {/* Image Section with Shapes and Statistics */}
            <div className="relative z-[1] lg:mx-0 mx-auto lg:max-w-full lg:text-left text-center md:max-w-[80%] max-w-full">
              <Image
                src="/images/banner_img.webp"
                alt="banner"
                className="max-w-full"
                width={542}
                height={530}
                quality={70}
              />
              <Image
                src="/images/bshape_04.webp"
                alt="shape"
                quality={50}
                width={87}
                height={24}
                className="absolute z-[-1] max-w-[87px] bottom-[18%] left-[-87px]"
              />
              <Image
                src="/images/bshape_05.webp"
                alt="shape"
                quality={50}
                width={52}
                height={24}
                className="absolute z-[-1] max-w-[52px] top-[22%] right-0"
              />
              <div className="block">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-[20px] min-w-[140px] p-[20px]">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#12BB6A] text-white text-[33px] rounded-full shadow-[0px_15px_15px_rgba(33,_150,_83,_0.2)] mx-auto mb-[12px]">
                    <HiOutlineUserGroup />
                  </div>
                  <div className="text-center">
                    <span className="block leading-[1] mb-[5px]">
                      Total Students
                    </span>
                    <h4 className="font-heading text-[#082A5E] leading-[1] text-[30px] tracking-[-1.5px] font-bold">
                      15K
                    </h4>
                  </div>
                </div>
                <div className="absolute bottom-[108px] top-auto left-auto min-w-[171px] rounded-[10px] right-[-20px] p-[20px] bg-white pt-0 md:block hidden">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#8121FB] text-white text-[33px] rounded-full shadow-[0px_15px_15px_rgba(129,_33,_251,_0.24)] mx-auto mb-[12px] mt-[-25px]">
                    <FaGraduationCap className="rotate-[-20deg]" />
                  </div>
                  <div className="text-center">
                    <span className="block leading-[1] mb-[5px]">
                      Total Courses
                    </span>
                    <h4 className="font-heading text-[#082A5E] leading-[1] text-[30px] tracking-[-1.5px] font-bold">
                      15k
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
