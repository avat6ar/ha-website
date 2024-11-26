"use client";
import { getCategories } from "@/api/Home";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Categories = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const [path3DashOffset, setPath3DashOffset] = useState(0);

  const { data: categories } = getCategories();
  const [first, second, ...rest] = categories;

  return (
    <section className="py-[130px] relative z-[1]">
      <div className="container">
        <div className="grid md:grid-cols-12 items-center justify-center">
          <div className="xl:col-span-5 lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10 col-span-12">
            <div className="xl:text-left text-center xl:ml-[40px] ml-0 mb-[70px]">
              <div className="mb-[23px]">
                <span className="inline-block leading-[1] bg-[#E7EFFC] rounded-[4px] font-medium text-[#1363DF] mb-[16px] py-[7px] px-[15px]">
                  Unique online courses
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
                  Browse By{" "}
                  <span className="text-[#1363DF] relative z-[1]">
                    <span className="absolute left-1/2 -translate-x-1/2 text-center mx-auto -bottom-[15px] w-[145px] h-[25px] z-[-1]">
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
                    Categories
                  </span>
                </h3>
              </div>
              <p className="font-body text-[16px] leading-[1.75] font-normal text-[#39557E] mb-[40px]">
                In this section, we present to you some categories that will
                help you grow your business and become professional
              </p>
              <div className="flex xl:justify-start justify-center">
                <Link
                  href="/courses"
                  className="bg-white border border-[#1363DF] text-[#1363DF] px-[23px] pt-[19px] pb-[16px] flex items-center gap-[10px] text-[15px] tracking-[0.5px] leading-[1] uppercase font-semibold rounded-[4px] group transition-all ease-out duration-300 hover:bg-[#1363DF] hover:text-white"
                  onMouseEnter={() => {
                    setPath3DashOffset(26);
                    setTimeout(() => {
                      setPath3DashOffset(0);
                    }, 400);
                  }}
                >
                  All Categories
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
          <div className="xl:col-span-7 lg:col-start-2 lg:col-span-10 col-span-12">
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-[10px] md:mb-[20px] mb-[10px]">
                {first && (
                  <div className="md:w-1/3 w-full">
                    <div className="text-center">
                      <Link
                        href="/courses"
                        className="flex flex-col bg-[#F4F7FB] rounded-[10px] px-[30px] pt-[32px] pb-[27px] group"
                      >
                        <span className="w-[83px] h-[83px] flex justify-center items-center bg-white rounded-full text-[44px] text-[#1363DF] mx-auto mb-[12px] shadow-[0px_10px_20px_rgba(222,231,243,0.5)] transition-all duration-300 ease-out group-hover:bg-[#1363DF] group-hover:shadow-[0px_10px_20px_rgba(19,99,223,0.29)] group-hover:text-white fill-[#1363DF] group-hover:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="44"
                            height="44"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            className="fill-inherit"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                d="M494.722 199.029c-40.26-8.135-80.519-4.058-120.779 12.232a4.997 4.997 0 0 0-2.849 6.271l56.867 164.212c.71 2.05 2.555 3.363 4.725 3.363h62.036zM146.967 12.181c21.765 0 39.409 17.427 39.409 38.925s-17.644 38.925-39.409 38.925-39.409-17.427-39.409-38.925 17.644-38.925 39.409-38.925zM256 40.906c21.765 0 39.409 17.427 39.409 38.925S277.765 118.756 256 118.756s-39.409-17.427-39.409-38.925S234.235 40.906 256 40.906zm109.034-28.725c21.765 0 39.409 17.427 39.409 38.925s-17.644 38.925-39.409 38.925-39.409-17.427-39.409-38.925 17.644-38.925 39.409-38.925zM188.848 295.369c0-7.725 2.696-14.007 8.328-19.302l41.135-38.678c23.95-22.518 46.075-18.029 73.997-9.19 16.274 5.151 32.105 10.161 50.533 11.338l44.945 129.786c-5.423 2.699-10.996 5.377-17.058 7.851-10.194 4.16-20.978 2.001-28.769-5.784l-89.667-89.612a7.478 7.478 0 0 0-10.245-.284c-.003-.003-2.997 2.486-3.265 2.702-9.184 7.413-24.577 19.837-24.577 40.39 0 11.762-5.706 21.507-14.389 28.535-8.358 6.766-19.421 11.079-30.968 12.395zm-41.415-50.843c7.254 1.845 14.305 3.117 21.342 3.859 12.082 1.274 24.001.972 36.723-.683l-18.576 17.467c-8.531 8.021-13.074 18.487-13.074 30.2v78.077a7.5 7.5 0 0 0 7.5 7.5c17.439 0 35.053-5.82 47.902-16.221 12.041-9.747 19.955-23.434 19.955-40.137 0-12.453 10.199-21.594 17.33-27.416l84.876 84.824c4.07 4.068 8.747 7.154 13.776 9.207 3.422 3.577 6.835 7.161 10.249 10.745 6.058 6.334 6.426 16.4.117 22.709-6.161 6.161-16.401 6.161-22.562 0-16.457-16.456-32.63-33.299-48.903-49.974a7.48 7.48 0 1 0-10.723 10.429l44.644 45.773c6.197 6.197 6.194 16.365-.002 22.561-6.194 6.195-16.365 6.196-22.56.001-17.159-17.16-34.014-34.667-50.979-52.05a7.479 7.479 0 1 0-10.722 10.43L298.39 457.6c6.162 6.162 6.164 16.398.001 22.56-5.955 5.955-17.176 5.386-22.562.001-18.632-18.632-36.934-37.55-55.352-56.423a7.48 7.48 0 1 0-10.722 10.429l44.643 45.773c4.547 4.548 4.502 12.059-.078 16.556-4.45 4.343-11.772 4.497-16.213.056-.178.178-73.462-75.245-80.142-82.09-16.938-17.352-32.026-32.755-54.152-43.979zm43.128-44.525h130.877v-31.359c0-20.96-11.74-39.309-28.967-48.803-9.679 8.663-22.495 13.916-36.472 13.916s-26.793-5.254-36.472-13.916c-17.227 9.494-28.967 27.843-28.967 48.803v31.359zm145.877-28.725v-2.634c0-23.365-11.466-44.155-29.051-57.037a56.322 56.322 0 0 1 21.175-20.49 54.555 54.555 0 0 0 36.471 13.916 54.558 54.558 0 0 0 36.472-13.916c17.227 9.493 28.967 27.843 28.967 48.802v31.359zm-254.91 0v-31.359c0-20.96 11.739-39.309 28.967-48.802 9.679 8.663 22.495 13.916 36.472 13.916s26.792-5.253 36.471-13.916a56.329 56.329 0 0 1 21.175 20.49c-17.585 12.882-29.051 33.672-29.051 57.037v2.634zm-64.25 27.753v186.079h62.037c2.169 0 4.015-1.314 4.724-3.363l56.868-164.212a4.996 4.996 0 0 0-2.849-6.271c-40.26-16.29-80.52-20.368-120.78-12.233z"
                                clipRule="evenodd"
                                opacity="1"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <span className="block font-heading font-medium text-[18px] text-[#082A5E] mb-[4px]">
                          {first.category_name}
                        </span>
                        <span className="block leading-[1] text-[15px] font-medium text-[#5A7093]">
                          {first.n_courses} Courses
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {second && (
                  <div className="md:w-1/3 w-full">
                    <div className="text-center">
                      <Link
                        href="/courses"
                        className="flex flex-col bg-[#F4F7FB] rounded-[10px] px-[30px] pt-[32px] pb-[27px] group"
                      >
                        <span className="w-[83px] h-[83px] flex justify-center items-center bg-white rounded-full text-[44px] text-[#1363DF] mx-auto mb-[12px] shadow-[0px_10px_20px_rgba(222,231,243,0.5)] transition-all duration-300 ease-out group-hover:bg-[#1363DF] group-hover:shadow-[0px_10px_20px_rgba(19,99,223,0.29)] group-hover:text-white fill-[#1363DF] group-hover:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="44"
                            height="44"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            className="fill-inherit"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                d="M494.722 199.029c-40.26-8.135-80.519-4.058-120.779 12.232a4.997 4.997 0 0 0-2.849 6.271l56.867 164.212c.71 2.05 2.555 3.363 4.725 3.363h62.036zM146.967 12.181c21.765 0 39.409 17.427 39.409 38.925s-17.644 38.925-39.409 38.925-39.409-17.427-39.409-38.925 17.644-38.925 39.409-38.925zM256 40.906c21.765 0 39.409 17.427 39.409 38.925S277.765 118.756 256 118.756s-39.409-17.427-39.409-38.925S234.235 40.906 256 40.906zm109.034-28.725c21.765 0 39.409 17.427 39.409 38.925s-17.644 38.925-39.409 38.925-39.409-17.427-39.409-38.925 17.644-38.925 39.409-38.925zM188.848 295.369c0-7.725 2.696-14.007 8.328-19.302l41.135-38.678c23.95-22.518 46.075-18.029 73.997-9.19 16.274 5.151 32.105 10.161 50.533 11.338l44.945 129.786c-5.423 2.699-10.996 5.377-17.058 7.851-10.194 4.16-20.978 2.001-28.769-5.784l-89.667-89.612a7.478 7.478 0 0 0-10.245-.284c-.003-.003-2.997 2.486-3.265 2.702-9.184 7.413-24.577 19.837-24.577 40.39 0 11.762-5.706 21.507-14.389 28.535-8.358 6.766-19.421 11.079-30.968 12.395zm-41.415-50.843c7.254 1.845 14.305 3.117 21.342 3.859 12.082 1.274 24.001.972 36.723-.683l-18.576 17.467c-8.531 8.021-13.074 18.487-13.074 30.2v78.077a7.5 7.5 0 0 0 7.5 7.5c17.439 0 35.053-5.82 47.902-16.221 12.041-9.747 19.955-23.434 19.955-40.137 0-12.453 10.199-21.594 17.33-27.416l84.876 84.824c4.07 4.068 8.747 7.154 13.776 9.207 3.422 3.577 6.835 7.161 10.249 10.745 6.058 6.334 6.426 16.4.117 22.709-6.161 6.161-16.401 6.161-22.562 0-16.457-16.456-32.63-33.299-48.903-49.974a7.48 7.48 0 1 0-10.723 10.429l44.644 45.773c6.197 6.197 6.194 16.365-.002 22.561-6.194 6.195-16.365 6.196-22.56.001-17.159-17.16-34.014-34.667-50.979-52.05a7.479 7.479 0 1 0-10.722 10.43L298.39 457.6c6.162 6.162 6.164 16.398.001 22.56-5.955 5.955-17.176 5.386-22.562.001-18.632-18.632-36.934-37.55-55.352-56.423a7.48 7.48 0 1 0-10.722 10.429l44.643 45.773c4.547 4.548 4.502 12.059-.078 16.556-4.45 4.343-11.772 4.497-16.213.056-.178.178-73.462-75.245-80.142-82.09-16.938-17.352-32.026-32.755-54.152-43.979zm43.128-44.525h130.877v-31.359c0-20.96-11.74-39.309-28.967-48.803-9.679 8.663-22.495 13.916-36.472 13.916s-26.793-5.254-36.472-13.916c-17.227 9.494-28.967 27.843-28.967 48.803v31.359zm145.877-28.725v-2.634c0-23.365-11.466-44.155-29.051-57.037a56.322 56.322 0 0 1 21.175-20.49 54.555 54.555 0 0 0 36.471 13.916 54.558 54.558 0 0 0 36.472-13.916c17.227 9.493 28.967 27.843 28.967 48.802v31.359zm-254.91 0v-31.359c0-20.96 11.739-39.309 28.967-48.802 9.679 8.663 22.495 13.916 36.472 13.916s26.792-5.253 36.471-13.916a56.329 56.329 0 0 1 21.175 20.49c-17.585 12.882-29.051 33.672-29.051 57.037v2.634zm-64.25 27.753v186.079h62.037c2.169 0 4.015-1.314 4.724-3.363l56.868-164.212a4.996 4.996 0 0 0-2.849-6.271c-40.26-16.29-80.52-20.368-120.78-12.233z"
                                clipRule="evenodd"
                                opacity="1"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <span className="block font-heading font-medium text-[18px] text-[#082A5E] mb-[4px]">
                          {second.category_name}
                        </span>
                        <span className="block leading-[1] text-[15px] font-medium text-[#5A7093]">
                          {second.n_courses} Courses
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {rest && (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-[10px]">
                  {rest.map((item) => (
                    <div className="col-span-1">
                      <div className="text-center">
                        <Link
                          href="/courses"
                          className="flex flex-col bg-[#F4F7FB] rounded-[10px] px-[30px] pt-[32px] pb-[27px] group"
                        >
                          <span className="w-[83px] h-[83px] flex justify-center items-center bg-white rounded-full text-[44px] text-[#1363DF] mx-auto mb-[12px] shadow-[0px_10px_20px_rgba(222,231,243,0.5)] transition-all duration-300 ease-out group-hover:bg-[#1363DF] group-hover:shadow-[0px_10px_20px_rgba(19,99,223,0.29)] group-hover:text-white fill-[#1363DF] group-hover:fill-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="44"
                              height="44"
                              x="0"
                              y="0"
                              viewBox="0 0 512 512"
                              xmlSpace="preserve"
                              className="fill-inherit"
                            >
                              <g>
                                <path
                                  fillRule="evenodd"
                                  d="M494.722 199.029c-40.26-8.135-80.519-4.058-120.779 12.232a4.997 4.997 0 0 0-2.849 6.271l56.867 164.212c.71 2.05 2.555 3.363 4.725 3.363h62.036zM146.967 12.181c21.765 0 39.409 17.427 39.409 38.925s-17.644 38.925-39.409 38.925-39.409-17.427-39.409-38.925 17.644-38.925 39.409-38.925zM256 40.906c21.765 0 39.409 17.427 39.409 38.925S277.765 118.756 256 118.756s-39.409-17.427-39.409-38.925S234.235 40.906 256 40.906zm109.034-28.725c21.765 0 39.409 17.427 39.409 38.925s-17.644 38.925-39.409 38.925-39.409-17.427-39.409-38.925 17.644-38.925 39.409-38.925zM188.848 295.369c0-7.725 2.696-14.007 8.328-19.302l41.135-38.678c23.95-22.518 46.075-18.029 73.997-9.19 16.274 5.151 32.105 10.161 50.533 11.338l44.945 129.786c-5.423 2.699-10.996 5.377-17.058 7.851-10.194 4.16-20.978 2.001-28.769-5.784l-89.667-89.612a7.478 7.478 0 0 0-10.245-.284c-.003-.003-2.997 2.486-3.265 2.702-9.184 7.413-24.577 19.837-24.577 40.39 0 11.762-5.706 21.507-14.389 28.535-8.358 6.766-19.421 11.079-30.968 12.395zm-41.415-50.843c7.254 1.845 14.305 3.117 21.342 3.859 12.082 1.274 24.001.972 36.723-.683l-18.576 17.467c-8.531 8.021-13.074 18.487-13.074 30.2v78.077a7.5 7.5 0 0 0 7.5 7.5c17.439 0 35.053-5.82 47.902-16.221 12.041-9.747 19.955-23.434 19.955-40.137 0-12.453 10.199-21.594 17.33-27.416l84.876 84.824c4.07 4.068 8.747 7.154 13.776 9.207 3.422 3.577 6.835 7.161 10.249 10.745 6.058 6.334 6.426 16.4.117 22.709-6.161 6.161-16.401 6.161-22.562 0-16.457-16.456-32.63-33.299-48.903-49.974a7.48 7.48 0 1 0-10.723 10.429l44.644 45.773c6.197 6.197 6.194 16.365-.002 22.561-6.194 6.195-16.365 6.196-22.56.001-17.159-17.16-34.014-34.667-50.979-52.05a7.479 7.479 0 1 0-10.722 10.43L298.39 457.6c6.162 6.162 6.164 16.398.001 22.56-5.955 5.955-17.176 5.386-22.562.001-18.632-18.632-36.934-37.55-55.352-56.423a7.48 7.48 0 1 0-10.722 10.429l44.643 45.773c4.547 4.548 4.502 12.059-.078 16.556-4.45 4.343-11.772 4.497-16.213.056-.178.178-73.462-75.245-80.142-82.09-16.938-17.352-32.026-32.755-54.152-43.979zm43.128-44.525h130.877v-31.359c0-20.96-11.74-39.309-28.967-48.803-9.679 8.663-22.495 13.916-36.472 13.916s-26.793-5.254-36.472-13.916c-17.227 9.494-28.967 27.843-28.967 48.803v31.359zm145.877-28.725v-2.634c0-23.365-11.466-44.155-29.051-57.037a56.322 56.322 0 0 1 21.175-20.49 54.555 54.555 0 0 0 36.471 13.916 54.558 54.558 0 0 0 36.472-13.916c17.227 9.493 28.967 27.843 28.967 48.802v31.359zm-254.91 0v-31.359c0-20.96 11.739-39.309 28.967-48.802 9.679 8.663 22.495 13.916 36.472 13.916s26.792-5.253 36.471-13.916a56.329 56.329 0 0 1 21.175 20.49c-17.585 12.882-29.051 33.672-29.051 57.037v2.634zm-64.25 27.753v186.079h62.037c2.169 0 4.015-1.314 4.724-3.363l56.868-164.212a4.996 4.996 0 0 0-2.849-6.271c-40.26-16.29-80.52-20.368-120.78-12.233z"
                                  clipRule="evenodd"
                                  opacity="1"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <span className="block font-heading font-medium text-[18px] text-[#082A5E] mb-[4px]">
                            {item.category_name}
                          </span>
                          <span className="block leading-[1] text-[15px] font-medium text-[#5A7093]">
                            {item.n_courses} Courses
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="absolute left-[4%] top-[15%] animate-rotateme md:block hidden">
          <Image
            src="/images/categories_shape01.webp"
            quality={50}
            width={77}
            height={60}
            alt="shape"
            className="max-w-[77px]"
          />
        </div>
        <div
          className="absolute left-[3.5%] bottom-[8%] z-[-1] md:block hidden"
          data-aos="fade-up"
        >
          <Image
            src="/images/categories_shape02.webp"
            quality={50}
            width={108}
            height={88}
            alt="shape"
            className="xl:max-w-[108px] max-w-[89px]"
          />
        </div>
      </div>
    </section>
  );
};
