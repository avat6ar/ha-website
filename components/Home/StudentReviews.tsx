"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getReviews } from "@/api/Home";

export const StudentReviews = () => {
  const [path1DashOffset, setPath1DashOffset] = useState(0);
  const [path2DashOffset, setPath2DashOffset] = useState(0);
  const swiper = useRef<any>();
  const { data: reviews, isLoading, isError } = getReviews();

  return (
    <section className="py-[120px] relative z-[1]">
      <Image
        src="/images/testimonial_bg.webp"
        width={1500}
        height={500}
        alt="bg"
        quality={100}
        className="bg-center bg-cover absolute top-0 left-0 w-full h-full z-[-1]"
      />
      <div className="container">
        <div className="grid grid-cols-12 items-center lg:gap-x-[30px]">
          <div className="lg:col-span-5 md:col-span-7 sm:col-span-9 md:block hidden">
            <div className="relative xl:ml-[72px] z-[1] lg:mb-0 mb-[50px]">
              <div className="text-right">
                <Image
                  src="/images/testimonial01.webp"
                  quality={100}
                  width={398}
                  height={488}
                  alt="review"
                  className="inline-block rounded-[199px] h-full"
                />
              </div>
              <div className="block">
                <Image
                  src="/images/testi_shape02.svg"
                  quality={100}
                  width={70}
                  height={57}
                  alt="shape"
                  className="absolute right-0 top-0 z-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="xl:mr-[85px] xl:ml-[70px] lg:ml-[50px]">
              <div className="mb-[40px]">
                <h3
                  className="text-[36px] leading-[1.32] font-heading text-white capitalize tracking-[-1px] font-semibold"
                  onMouseEnter={() => {
                    setPath1DashOffset(146);
                    setPath2DashOffset(106);
                    setTimeout(() => {
                      setPath1DashOffset(0);
                      setPath2DashOffset(0);
                    }, 700);
                  }}
                >
                  What Our{" "}
                  <span className="text-white relative">
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
                    Students
                  </span>
                  <br />
                  Say About Us
                </h3>
              </div>
              {isLoading && (
                <div className="block">
                  <div
                    className="h-20 bg-slate-200 rounded w-20 mb-8 animate-pulse"
                    style={{
                      animationDirection: "1s",
                    }}
                  ></div>
                  <div
                    className="h-8 bg-slate-200 rounded w-32 inline-block mb-2 animate-pulse"
                    style={{
                      animationDirection: "1s",
                    }}
                  ></div>
                  <div
                    className="h-8 bg-slate-200 rounded mb-4 animate-pulse"
                    style={{
                      animationDirection: "1s",
                    }}
                  ></div>
                  <div
                    className="h-20 bg-slate-200 rounded mb-2 animate-pulse"
                    style={{
                      animationDirection: "1s",
                    }}
                  ></div>
                </div>
              )}
              {reviews && (
                <Swiper
                  spaceBetween={40}
                  loop
                  slidesPerView={1}
                  modules={[Navigation]}
                  ref={swiper}
                >
                  {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <div className="mb-[19px]">
                        <Image
                          src="/images/quote.webp"
                          width={49}
                          height={37}
                          quality={40}
                          alt="quote"
                          className="block max-w-[49px]"
                        />
                      </div>
                      <p className="text-[#E7EFFC] text-[18px] font-medium font-body leading-[1.75] mb-[15px]">
                        {review.review}
                      </p>
                      <div className="relative pt-[30px] mt-[12px] border-t border-[#2F466A] before:absolute before:left-0 before:top-[-2.5px] before:w-[40px] before:h-[5px] before:rounded-[50px] before:bg-[#FAB123]">
                        <h5 className="text-white font-medium mb-[3px] text-[20px] font-heading leading-[1.2]">
                          {review.user_name}
                        </h5>
                        <span className="block text-[#B2BDCD] font-heading">
                          {review.category_name}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="flex items-center gap-[10px] mt-[35px]">
                    <button
                      type="button"
                      onClick={() =>
                        swiper.current && swiper.current.swiper.slidePrev()
                      }
                      className="w-[48px] h-[48px] bg-[#24406B] flex items-center justify-center text-white text-[18px] rounded-[6px] hover:bg-[#1363DF] transition-all duration-300 ease-out"
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        swiper.current && swiper.current.swiper.slideNext()
                      }
                      className="w-[48px] h-[48px] bg-[#24406B] flex items-center justify-center text-white text-[18px] rounded-[6px] hover:bg-[#1363DF] transition-all duration-300 ease-out"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
