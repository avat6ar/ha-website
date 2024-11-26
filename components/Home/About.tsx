"use client";
import Image from "next/image";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Link from "next/link";
import { getNumberLessons } from "@/api/Home";

export const About = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const [path3DashOffset, setPath3DashOffset] = useState(0);

  const { data: numbers, isLoading } = getNumberLessons();

  return (
    <section className="py-[120px] relative w-full">
      <div className="container">
        <div className="grid items-center justify-center lg:grid-cols-12 xl:gap-0 gap-[40px]">
          <div className="xl:col-span-6 lg:col-start-3 lg:col-span-8">
            <div className="flex items-end relative">
              <Image
                src="/images/about_img01.webp"
                quality={100}
                width={369}
                height={484}
                alt="img"
                className="[filter:_drop-shadow(0px_8px_50px_rgba(0,_0,_0,_0.2))] mx-auto"
              />
              <div className="absolute md:top-[58px] md:left-[50px] w-[126px] h-[108px] flex items-center justify-center flex-col p-[17px] z-[2] text-center top-auto left-auto md:bottom-auto md:right-auto bottom-0 right-0">
                <svg
                  width="126"
                  height="108"
                  viewBox="0 0 126 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute block w-full h-full z-[-1]"
                >
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H110.996C116.321 0 120.713 4.17312 120.983 9.4914L125.429 96.7793C125.733 102.754 120.758 107.657 114.789 107.267L9.34719 100.369C4.08901 100.025 0 95.6593 0 90.3899V10Z"
                    fill="#1363DF"
                  ></path>
                </svg>
                <h4 className="text-white text-[30px] mb-[7px] leading-[1] font-heading font-semibold">
                  12 +
                </h4>
                <p className="text-white font-medium font-heading text-[14px] leading-[1.25]">
                  Years of Experiences
                </p>
              </div>
              <Image
                src="/images/about_dots.svg"
                alt="dots"
                quality={100}
                width={112}
                height={97}
                className="absolute left-[167px] top-[-29px] z-[-1]"
              />
              <svg
                className="absolute top-[26px] left-[66px] text-[#FAB123] z-[-1]"
                width="344"
                height="344"
                viewBox="0 0 344 344"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20"
                  y="20"
                  width="304"
                  height="304"
                  rx="152"
                  stroke="currentcolor"
                  strokeWidth="40"
                ></rect>
              </svg>
            </div>
          </div>
          <div className="xl:col-span-6 lg:col-start-3 lg:col-span-7">
            <div className="xl:ml-[70px] m-0">
              <div className="mb-[15px] block">
                <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
                  Get To Know About Us{" "}
                </span>
                <h3
                  className="md:text-[36px] text-[29px] leading-[1.32] font-heading text-[#082A5E] capitalize tracking-[-1px] font-semibold"
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
                    <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto md:-bottom-[14px] -bottom-[14px] w-[145px] h-[25px]">
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
                </h3>
              </div>
              <p className="font-body text-[16px] leading-[1.75] font-normal text-[#39557E] mb-[15px]">
                Dr. HA Training & Consulting L.T.D has 18 years of experience in
                Auditing and Financial consulting. She graduated in 2005 with
                Bachelor Degree in Commerce from Cairo University. Since
                graduation from college Dr. Hala has gained significant
                experience as External and Internal auditor of many companies
                operating in many
              </p>
              <ul className="grid grid-cols-2 md:gap-[40px_60px] gap-[35px_15px] mt-[29px] md:mr-[60px]">
                <li className="flex group">
                  <div
                    className={`w-[65px] flex justify-center relative text-[#2494E4] mr-[7px] after:absolute after:left-0 after:top-[-5px]t`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="43px"
                      height="43px"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M366 396c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"
                          fill="#2494e4"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                        <path
                          d="m390.622 363.663-47.53-15.84-17.063-34.127c15.372-15.646 26.045-36.348 29.644-57.941L357.801 243H376c16.542 0 30-13.458 30-30v-63C406 67.29 338.71 0 256 0c-82.922 0-150 67.097-150 150v63c0 13.036 8.361 24.152 20 28.28V253c0 16.542 13.458 30 30 30h8.782a108.487 108.487 0 0 0 16.774 25.974 103.947 103.947 0 0 0 4.406 4.741l-17.054 34.108-47.531 15.841C66.112 382.092 26 440.271 26 502c0 5.523 4.477 10 10 10h440c5.522 0 10-4.477 10-10 0-61.729-40.111-119.908-95.378-138.337zM386 213c0 5.514-4.486 10-10 10h-15.262c2.542-19.69 4.236-40.643 4.917-61.28.02-.582.036-1.148.054-1.72H386v53zm-250 10c-5.514 0-10-4.486-10-10v-53h20.298c.033 1.043.068 2.091.107 3.146l.004.107v.009c.7 20.072 2.372 40.481 4.856 59.737H136V223zm20 40c-5.514 0-10-4.486-10-10v-10h8.198l2.128 12.759a105.57 105.57 0 0 0 1.482 7.241H156zm-9.983-123H126.38C131.445 72.979 187.377 20 256 20c68.318 0 124.496 52.972 129.619 120h-19.635c-.72-55.227-45.693-100-101.033-100h-17.9c-55.339 0-100.315 44.773-101.034 100zM247.05 60h17.9c44.809 0 81.076 36.651 81.05 81.41 0 3.147-.025 5.887-.078 8.38l-.001.098-12.508-1.787c-33.98-4.852-66.064-20.894-90.342-45.172A10.003 10.003 0 0 0 236 100c-26.856 0-52.564 12.236-69.558 32.908C170.63 92.189 205.053 60 247.05 60zm-68.51 203c-5.006-16.653-10.734-65.653-12-97.053l13.459-17.946c12.361-16.476 31.592-26.713 52.049-27.888 26.917 25.616 61.739 42.532 98.537 47.786l14.722 2.104c-.984 20.885-2.995 41.843-5.876 61.118l-.003.02c-.916 6.197-1.638 10.185-3.482 21.324-5.296 31.765-28.998 60.49-60.287 68.313a81.338 81.338 0 0 1-39.313 0c-19.537-4.884-37.451-18.402-49.012-37.778h20.386c4.128 11.639 15.243 20 28.28 20h20c16.575 0 30-13.424 30-30 0-16.542-13.458-30-30-30h-20c-13.327 0-24.278 8.608-28.297 20H178.54zm56.619 78.016A101.171 101.171 0 0 0 256 343.2c5.471 0 10.943-.458 16.353-1.346l-17.67 18.687-19.524-19.525zm5.776 34.063-31.718 33.542a381.013 381.013 0 0 1-22.389-51.917l11.911-23.822 42.196 42.197zm70.631-45.585 13.604 27.209a380.908 380.908 0 0 1-22.392 51.933l-33.948-33.948 42.736-45.194zM226 273c0-5.521 4.478-10 10-10h20c5.514 0 10 4.486 10 10 0 5.522-4.479 10-10 10h-20c-5.514 0-10-4.486-10-10zM46.4 492c3.963-49.539 36.932-94.567 81.302-109.363l42.094-14.028a400.869 400.869 0 0 0 28.463 61.74l.056.101.001.002a400.974 400.974 0 0 0 27.372 41.799L237.99 492H46.4zm209.6-8.914-13.562-21.773a10.133 10.133 0 0 0-.486-.711 381.284 381.284 0 0 1-22.532-33.662l35.663-37.714 37.578 37.578A380.863 380.863 0 0 1 270.05 460.6c-.49.653.205-.376-14.05 22.486zM274.01 492l12.301-19.748a400.826 400.826 0 0 0 27.564-42.132c.05-.088.097-.178.147-.266l.018-.032a400.543 400.543 0 0 0 28.164-61.213l42.093 14.028c44.371 14.796 77.34 59.824 81.303 109.363H274.01z"
                          fill="#2494e4"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M435.546 451.531c-6.683-13.377-16.472-25.261-28.309-34.367-4.378-3.369-10.656-2.55-14.023 1.828-3.368 4.378-2.549 10.656 1.828 14.024 9.454 7.273 17.272 16.766 22.611 27.453 2.473 4.949 8.483 6.941 13.415 4.477 4.94-2.468 6.945-8.474 4.478-13.415z"
                          fill="#2494e4"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="md:text-[18px] text-[15px] font-semibold leading-[20px] text-[#082A5E] font-body">
                    {numbers?.tutorials}+ <br />
                    Tutorials
                  </p>
                </li>
                <li className="flex group">
                  <div
                    className={`w-[65px] flex justify-center relative text-[#219653] mr-[7px] after:absolute after:left-0 after:top-[-5px]t`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40px"
                      height="40px"
                      x="0"
                      y="0"
                      viewBox="0 0 367.6 367.6"
                      xmlSpace="preserve"
                    >
                      <g transform="matrix(1,0,0,1,2.842170943040401e-14,2.842170943040401e-14)">
                        <path
                          d="M328.6 81.6c-.4 0-.4-.4-.8-.8s-.4-.8-.8-1.2L258.2 2.4c-.4-.4-1.2-.8-1.6-1.2-.4 0-.4-.4-.8-.4-.8-.4-2-.8-3.2-.8H83.8C59 0 38.6 20.4 38.6 45.2v277.2c0 24.8 20.4 45.2 45.2 45.2h200c24.8 0 45.2-20.4 45.2-45.2v-238c0-.8-.4-2-.4-2.8zm-68.4-54.4 44.4 50h-44.4v-50zM313.8 322c0 16.8-13.2 30.4-30 30.4h-200c-16.8 0-30-13.6-30-30V44.8c0-16.8 13.6-30 30-30H245v69.6c0 4 3.2 7.6 7.6 7.6h61.2v230z"
                          fill="#219653"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M92.6 92h66.8c4 0 7.6-3.2 7.6-7.6s-3.2-7.6-7.6-7.6H92.6c-4 0-7.6 3.2-7.6 7.6s3.6 7.6 7.6 7.6zM159.4 275.6H92.6c-4 0-7.6 3.2-7.6 7.6 0 4 3.2 7.6 7.6 7.6h66.8c4 0 7.6-3.2 7.6-7.6 0-4-3.6-7.6-7.6-7.6zM85 134.8c0 4 3.2 7.6 7.6 7.6H271c4 0 7.6-3.2 7.6-7.6 0-4-3.2-7.6-7.6-7.6H92.6c-4 0-7.6 3.2-7.6 7.6zM271 164.8H92.6c-4 0-7.6 3.2-7.6 7.6 0 4 3.2 7.6 7.6 7.6H271c4 0 7.6-3.2 7.6-7.6 0-4.4-3.2-7.6-7.6-7.6zM271 202H92.6c-4 0-7.6 3.2-7.6 7.6 0 4 3.2 7.6 7.6 7.6H271c4 0 7.6-3.2 7.6-7.6 0-4.4-3.2-7.6-7.6-7.6zM271 239.2H92.6c-4 0-7.6 3.2-7.6 7.6 0 4 3.2 7.6 7.6 7.6H271c4 0 7.6-3.2 7.6-7.6 0-4-3.2-7.6-7.6-7.6z"
                          fill="#219653"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="md:text-[18px] text-[15px] font-semibold leading-[20px] text-[#082A5E] font-body">
                    {numbers?.lessons}+ <br />
                    Top Lessons
                  </p>
                </li>
                <li className="flex group">
                  <div
                    className={`w-[65px] flex justify-center relative text-[#9B51E0] mr-[7px] after:absolute after:left-0 after:top-[-5px]t`}
                  >
                    <FaGraduationCap className="rotate-[-20deg] text-[45px]" />
                  </div>
                  <p className="md:text-[18px] text-[15px] font-semibold leading-[20px] text-[#082A5E] font-body">
                    {numbers?.students}+ <br />
                    Over Students
                  </p>
                </li>
                <li className="flex group">
                  <div
                    className={`w-[65px] flex justify-center relative text-[#FF2E2E] mr-[7px] after:absolute after:left-0 after:top-[-5px]t`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40px"
                      height="40px"
                      x="0"
                      y="0"
                      viewBox="0 0 480 480"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M400 40H0v400h480V40h-80zM64 424H16v-48h48v48zm0-64H16v-48h48v48zm0-64H16v-48h48v48zm0-64H16v-48h48v48zm0-64H16v-48h48v48zm0-64H16V56h48v48zm336 320H80V56h320v368zm64 0h-48v-48h48v48zm0-64h-48v-48h48v48zm0-64h-48v-48h48v48zm0-64h-48v-48h48v48zm0-64h-48v-48h48v48zm0-64h-48V56h48v48z"
                          fill="#ff2e2e"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M302.971 236.003a7.999 7.999 0 0 0-2.971-2.971l-112-64A8 8 0 0 0 176 176v128a8 8 0 0 0 12 6.92l112-64a8 8 0 0 0 2.971-10.917zM192 290.208V189.792L279.872 240 192 290.208z"
                          fill="#ff2e2e"
                          opacity="1"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="md:text-[18px] text-[15px] font-semibold leading-[20px] text-[#082A5E] font-body">
                    {numbers?.videos}+ <br />
                    Pro Videos
                  </p>
                </li>
              </ul>

              {/* Button for Discover More */}
              <div className="flex mt-[40px]">
                <Link
                  href="/about"
                  onMouseEnter={() => {
                    setPath3DashOffset(26);
                    setTimeout(() => {
                      setPath3DashOffset(0);
                    }, 300);
                  }}
                  className="pt-[19px] pb-[16px] px-[24px] text-[15px] text-white font-semibold border border-[#D0DAE9] bg-[#1363DF] uppercase tracking-[0.5px] leading-[1] flex items-center gap-[10px] text-center rounded-[4px] font-body hover:text-white hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
                >
                  Discover More
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
        </div>
      </div>
    </section>
  );
};
