"use client";
import { getNumberLessons } from "@/api/About";
import Image from "next/image";
import { useState } from "react";

export const Achievements = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const { data: numbers, isLoading } = getNumberLessons();

  return (
    <section className="pt-[120px] pb-[90px] relative z-[1]">
      <Image
        src="/images/fact_bg.webp"
        width={1500}
        height={700}
        quality={50}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
      />
      <div className="container">
        <div className="flex justify-center">
          <div className="lg:w-[41.66666667%] md:w-[75%] w-full">
            <div className="mb-[50px] text-center">
              <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
                Worldwide Our Achievement
              </span>
              <h2
                className="md:text-[36px] text-[29px] leading-[1.32] tracking-[-1] capitalize mb-[20px] font-heading text-[#082A5E] font-semibold"
                onMouseEnter={() => {
                  setPath1DashOffset(146);
                  setPath2DashOffset(106);
                  setTimeout(() => {
                    setPath1DashOffset(0);
                    setPath2DashOffset(0);
                  }, 700);
                }}
              >
                Grow You{" "}
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
                  Skills
                </span>{" "}
                To Advance Your Career path
              </h2>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px]">
          <div className="col-span-1">
            <div className="bg-white shadow-[0px_4px_24px] shadow-[#EBEEF2] rounded-[10px] pt-[59px] pb-[50px] px-[50px] transition-all duration-300 ease-out text-center">
              <div className="text-[#1363DF] text-[80px] leading-[1] mb-[21px] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  x="0"
                  y="0"
                  viewBox="0 0 64 64"
                  xmlSpace="preserve"
                >
                  <g>
                    <g data-name="web-web browser-student-graduate-onlie education">
                      <path
                        d="M6 6h2v2H6zM10 6h2v2h-2zM14 6h2v2h-2zM19.447 23.105l-6-3A1 1 0 0 0 12 21v6a1 1 0 0 0 1.447.895l6-3a1 1 0 0 0 0-1.79zM14 25.382v-2.764L16.764 24z"
                        fill="#1363df"
                        opacity="1"
                      ></path>
                      <path
                        d="M61.22 45.02 53 43.2v-1.89A7 7 0 0 0 57 35v-1h1a1 1 0 0 0 1-1 8.972 8.972 0 0 0-2-5.64v-3.42l2-.6V27h2v-5a1.008 1.008 0 0 0-.71-.96L56 19.76V5a3.009 3.009 0 0 0-3-3H5a3.009 3.009 0 0 0-3 3v42a3.009 3.009 0 0 0 3 3h33v11a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V46a1.007 1.007 0 0 0-.78-.98zm-3.36 1.31-6.3 2.86 1.14-4.01zM55 35a5 5 0 0 1-10 0v-1h.23a10.922 10.922 0 0 0 5.66-1.57l1.95-1.17L55 33.41zm-6.56 14.19-6.3-2.86 5.16-1.15zM51.06 30l-1.2.71A8.884 8.884 0 0 1 45.23 32h-2.16a7.364 7.364 0 0 1 .64-2.06A1 1 0 0 0 44 30zM45 28v-3.46l4.71 1.42a1.071 1.071 0 0 0 .58 0L55 24.54V28zm11.41 4-2-2H56a1 1 0 0 0 .29-.06 7.364 7.364 0 0 1 .64 2.06zm.11-10L50 23.96 43.48 22 50 20.04zM4 5a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v5H4zm34.78 40.02A1.007 1.007 0 0 0 38 46v2H5a1 1 0 0 1-1-1V12h50v7.16l-3.71-1.12a1.14 1.14 0 0 0-.58 0l-10 3a1 1 0 0 0 0 1.92l3.29.98v3.42A8.972 8.972 0 0 0 41 33a1 1 0 0 0 1 1h1v1a7 7 0 0 0 4 6.31v1.89zM45 60h-5V47.55l5 2.28zm4 0h-2v-9.27l2 .91zm0-16.14v-1.94a6.29 6.29 0 0 0 2 0v1.94l-1 3.5zM53 60h-2v-8.36l2-.91zm7 0h-5V49.83l5-2.28z"
                        fill="#1363df"
                        opacity="1"
                      ></path>
                      <path
                        d="M23 16H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1zm-1 14H10V18h12zM47 34h2v2h-2zM51 34h2v2h-2zM35 36H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H10v-4h24zM26 17h2v2h-2zM30 17h6v2h-6zM30 21h6v2h-6zM26 21h2v2h-2zM26 25h2v2h-2zM30 25h6v2h-6zM30 29h6v2h-6zM26 29h2v2h-2z"
                        fill="#1363df"
                        opacity="1"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="block">
                <h3 className="text-[30px] leading-[1] mb-[3px] font-heading text-[#082A5E] font-semibold">
                  {numbers?.tutorials}
                </h3>
                <p className="leading-[1.5] font-body text-[16px] font-normal text-[#39557E]">
                  Tutorials
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-[0px_4px_24px] shadow-[#EBEEF2] rounded-[10px] pt-[59px] pb-[50px] px-[50px] transition-all duration-300 ease-out text-center">
              <div className="text-[#1363DF] text-[80px] leading-[1] mb-[21px] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  x="0"
                  y="0"
                  viewBox="0 0 64 64"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M22.85 26.89h-11.9a1 1 0 0 0 0 2h11.9a1 1 0 0 0 0-2zM22.85 32.84h-11.9a1 1 0 0 0 0 2h11.9a1 1 0 0 0 0-2zM22.85 38.79h-11.9a1 1 0 0 0 0 2h11.9a1 1 0 0 0 0-2zM22.85 44.74h-11.9a1 1 0 0 0 0 2h11.9a1 1 0 0 0 0-2zM34.748 28.884h3.915a1 1 0 0 0 0-2h-3.915a1 1 0 0 0 0 2zM34.748 34.847h2.005a1 1 0 0 0 0-2h-2.005a1 1 0 0 0 0 2zM34.748 40.794h1.697a1 1 0 1 0 0-2h-1.697a1 1 0 0 0 0 2zM46.652 44.74H34.75a1 1 0 1 0 0 2h11.9a1 1 0 0 0 0-2z"
                      fill="#1363df"
                      opacity="1"
                    ></path>
                    <path
                      d="M57.815 7.709a4.14 4.14 0 0 0-6.083 1.406l-4.23 8.3a27.916 27.916 0 0 0-18.712 1.847 27.738 27.738 0 0 0-24.238.212 1 1 0 0 0-.552.894V56.07a1.008 1.008 0 0 0 1.447.895 25.732 25.732 0 0 1 22.906 0 1.005 1.005 0 0 0 .895.007 25.735 25.735 0 0 1 22.911 0 1.008 1.008 0 0 0 1.447-.895V24.793l5.96-11.683a4.027 4.027 0 0 0-1.75-5.401zm-4.3 2.31a2.02 2.02 0 0 1 2.705-.877l.69.35a2.024 2.024 0 0 1 .87 2.716l-.95 1.865-4.271-2.177zm-1.803 14.087c-.038.105-5.541 10.852-5.587 10.953l-1.239-.628 9.79-19.21 1.245.634zm-9.034 14.182-1.5 1.215c.056-1.1.187-3.47.248-4.585l1.664.846 1.651.836zm8.972-24.61 1.243.634-9.79 19.214-1.246-.633zM6 54.505V20.995a25.746 25.746 0 0 1 21.8 0v33.51a27.779 27.779 0 0 0-21.8 0zm23.8.008V20.987a25.871 25.871 0 0 1 16.76-1.726l-6.94 13.617a1.547 1.547 0 0 0-.107.398c-.113 2.086-.346 6.283-.46 8.368a1.007 1.007 0 0 0 1.628.835l3.264-2.643 3.24-2.65a.19.19 0 0 1 .067-.06 1.382 1.382 0 0 0 .2-.27l4.154-8.135v25.79a27.781 27.781 0 0 0-21.805 0z"
                      fill="#1363df"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="block">
                <h3 className="text-[30px] leading-[1] mb-[3px] font-heading text-[#082A5E] font-semibold">
                  {numbers?.lessons}
                </h3>
                <p className="leading-[1.5] font-body text-[16px] font-normal text-[#39557E]">
                  Lessons
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-[0px_4px_24px] shadow-[#EBEEF2] rounded-[10px] pt-[59px] pb-[50px] px-[50px] transition-all duration-300 ease-out text-center">
              <div className="text-[#1363DF] text-[80px] leading-[1] mb-[21px] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  x="0"
                  y="0"
                  viewBox="0 0 496.592 496.592"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M400.296 328v-51.696l-21.816 8.488-.064-.144-.52-.944c-8.36-13.016-21.88-22.072-37.104-24.832l-52.496-9.552v-4.144c19.632-11.4 34.008-30.848 38.488-53.84 14.544-3.008 25.512-15.912 25.512-31.336V80.984a50.169 50.169 0 0 0-35.84-48.136l-4-4C293.848 10.24 269.112 0 242.8 0c-54.312 0-98.504 44.184-98.504 98.504V160c0 15.424 10.968 28.328 25.512 31.336 4.488 22.992 18.856 42.448 38.488 53.84v4.144l-52.488 9.544c-15.208 2.76-28.72 11.8-37.088 24.808l-.48 1.168-21.944-8.536V328c-13.232 0-24 10.768-24 24v32c0 13.232 10.768 24 24 24v29.472l152 59.12 152-59.12V408c13.232 0 24-10.768 24-24v-32c0-13.232-10.768-24-24-24zm-97.008-59.688 34.64 6.296c10.2 1.856 19.232 7.744 25.256 16.128l-77.4 30.096 17.504-52.52zm-78.312-15.8c7.384 2.256 15.208 3.488 23.32 3.488s15.936-1.232 23.32-3.488L248.296 270l-23.32-17.488zm11.144 28.352-16.328 16.32-10.592-31.768 5.096-.92 21.824 16.368zm46.176-16.36 5.096.92-10.592 31.768-16.328-16.32 21.824-16.368zm46-90.728v-27.552c4.76 2.776 8 7.88 8 13.776s-3.24 11-8 13.776zm-160 0c-4.76-2.776-8-7.88-8-13.776s3.24-11 8-13.776v27.552zm0-53.776v9.136a31.73 31.73 0 0 0-8 3.312V98.504C160.296 53.016 197.304 16 242.8 16c22.032 0 42.76 8.584 58.344 24.168l7.056 7.064 2.152.528a34.19 34.19 0 0 1 25.944 33.224v51.464a31.44 31.44 0 0 0-8-3.312V120h-25.368c-21.68 0-42.4-10.352-55.4-27.688l-6.36-8.496-15.896 15.904C212.184 112.8 194.792 120 176.296 120h-8zm16 56v-40.368c19.752-1.832 38.08-10.4 52.288-24.6l3.112-3.112c16.04 17.704 39.144 28.08 63.232 28.08h9.368v40c0 35.288-28.712 64-64 64s-64-28.712-64-64zm-25.632 98.608 34.64-6.296 17.504 52.52-77.416-30.104c6.024-8.392 15.072-14.264 25.272-16.12zM88.296 384v-32c0-4.416 3.592-8 8-8 13.232 0 24 10.768 24 24s-10.768 24-24 24c-4.408 0-8-3.584-8-8zm152 92.304-128-49.768v-21.928c14.104-6.192 24-20.248 24-36.608 0-16.36-9.896-30.416-24-36.608v-31.696l128 49.776v126.832zm-23.752-153.232 31.752-31.76 31.752 31.752-31.752 12.352-31.752-12.344zm167.752 103.456-128 49.768V349.472l128-49.776v31.696c-14.104 6.192-24 20.248-24 36.608 0 16.36 9.896 30.416 24 36.608v21.92zm24-42.528c0 4.416-3.592 8-8 8-13.232 0-24-10.768-24-24s10.768-24 24-24c4.408 0 8 3.584 8 8v32z"
                      fill="#1363DF"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="block">
                <h3 className="text-[30px] leading-[1] mb-[3px] font-heading text-[#082A5E] font-semibold">
                  {numbers?.students}
                </h3>
                <p className="leading-[1.5] font-body text-[16px] font-normal text-[#39557E]">
                  Students
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-[0px_4px_24px] shadow-[#EBEEF2] rounded-[10px] pt-[59px] pb-[50px] px-[50px] mb-[30px] transition-all duration-300 ease-out text-center">
              <div className="text-[#1363DF] text-[80px] leading-[1] mb-[21px] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="80"
                  height="80"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M497 0H15C6.715 0 0 6.715 0 15v397.445c0 8.285 6.715 15 15 15h482c8.285 0 15-6.715 15-15V15c0-8.285-6.715-15-15-15zM161.562 371.328v26.117H111.23v-26.117zm30 0h50.333v26.117h-50.333zm80.333 0h50.335v26.117h-50.335zm80.335 0h50.333v26.117H352.23zm-322.23-30V86.118h452v255.21zm322.23-285.21V30h50.333v26.117zm-30 0h-50.335V30h50.335zm-80.335 0h-50.332V30h50.332zm-80.332 0H111.23V30h50.333zm320.437 0h-49.438V30H482zM81.23 30v26.117H30V30zM30 371.328h51.23v26.117H30zm402.563 26.117v-26.117H482v26.117zm0 0"
                      fill="#1363df"
                      opacity="1"
                    ></path>
                    <path
                      d="M311.473 198.27a14.443 14.443 0 0 0-1.27-.829l-85.828-50.101c-6.219-4.067-14.39-4.528-21.11-1.106-6.617 3.364-10.726 9.93-10.726 17.133v100.715c0 7.203 4.11 13.766 10.727 17.133a21.155 21.155 0 0 0 9.593 2.285c4.051 0 8.082-1.145 11.516-3.395l85.828-50.097c.438-.254.863-.531 1.27-.828 5.074-3.7 7.988-9.328 7.988-15.453s-2.914-11.762-7.988-15.457zm-88.93 48.167v-65.43l56.047 32.716zm0 0"
                      fill="#1363df"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="block">
                <h3 className="text-[30px] leading-[1] mb-[3px] font-heading text-[#082A5E] font-semibold">
                  {numbers?.videos}
                </h3>
                <p className="leading-[1.5] font-body text-[16px] font-normal text-[#39557E]">
                  videos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
