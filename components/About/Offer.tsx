"use client";
import { getOffers } from "@/api/About";
import main from "@/app/main.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Offer = () => {
  const [pathDashOffset, setPathDashOffset] = useState(0);
  const { data, isLoading } = getOffers();

  return (
    <section className="pt-[150px] pb-[160px] bg-[#072656] relative z-[1]">
      <div
        className={`w-full h-full absolute z-[-1] top-0 left-0 bg-center bg-cover bg-fixed ${main.cta__bg} opacity-20 mix-blend-luminosity`}
      ></div>
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="xl:w-[66.66666667%] lg:w-[83.33333333%] w-full">
            <div className="text-center">
              <p className="uppercase text-white font-medium tracking-[0.1em] mb-[13px] font-body text-[16px] leading-[1.75]">
                {data?.text}
              </p>
              <h2 className="text-white md:text-[48px] text-[38px] font-heading md:mb-[8px] mb-[12px] font-semibold leading-[1.2]">
                {data?.title}
              </h2>
              <h5 className="text-white md:text-[30px] text-[22px] font-heading mb-[40px] font-light leading-[1.2]">
                Student’s & Mentors
              </h5>
              <div className="flex justify-center">
                <Link
                  href="/courses"
                  className="bg-[#1363DF] text-white px-[24px] pt-[19px] pb-[16px] flex items-center gap-[10px] text-[15px] tracking-[0.5px] leading-[1] uppercase font-semibold rounded-[4px] group transition-all ease-out duration-300 hover:bg-[#082A5E]"
                  onMouseEnter={() => {
                    setPathDashOffset(26);
                    setTimeout(() => {
                      setPathDashOffset(0);
                    }, 400);
                  }}
                >
                  Continue
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
        </div>
      </div>
      <div className="block">
        <Image
          src="/images/cta_shape001.svg"
          width={250}
          height={89}
          alt="shape"
          className="absolute top-0 left-0 !opacity-10 xl:max-w-full max-w-[220px]"
        />
        <Image
          src="/images/cta_shape002.webp"
          width={150}
          height={80}
          alt="shape"
          className="absolute xl:top-[31%] md:top-[20%] top-[7%] xl:left-[10%] left-[5%] md:max-w-[125px] max-w-[80px]"
        />
        <Image
          src="/images/cta_shape003.svg"
          width={200}
          height={168}
          alt="shape"
          className="absolute right-0 bottom-0 xl:max-w-full md:max-w-[180px] max-w-[120px]"
        />
      </div>
    </section>
  );
};
