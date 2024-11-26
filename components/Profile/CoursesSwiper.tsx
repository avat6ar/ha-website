"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { CourseCardSwiper } from "./CourseCardSwiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getCourses } from "@/api/auth/profile";

export const CoursesSwiper = () => {
  const swiper = useRef<any>();
  const { data: courses, isLoading } = getCourses();

  return (
    <section className="pb-[70px]">
      <div className="container">
        <div className="block">
          <h4 className="text-[24px] mb-[25px] pb-[17px] font-medium relative font-heading leading-[1.2] text-[#082A5E] before:absolute before:left-0 before:bottom-0 before:w-[28px] before:h-[4px] before:bg-[#1363DF] before:rounded-[2px]">
            My Courses
          </h4>
        </div>
        {isLoading && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 col-span-1 gap-[30px]">
            {[...Array(3).keys()].map((i, index) => (
              <div
                className="col-span-1 animate-pulse p-[15px]"
                key={index}
                style={{
                  animationDelay: `${index * 1}s`,
                  animationDirection: "1s",
                }}
              >
                <div className="w-[238px] h-[181px] bg-slate-200 rounded"></div>
                <div className="pt-[16px] pb-[5px] px-[7px]">
                  <div className="w-1/3 rounded-lg bg-slate-200 h-4"></div>
                  <div className="w-full rounded bg-slate-200 h-4"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {courses && (
          <div className="relative block group/parent">
            <button
              type="button"
              onClick={() =>
                swiper.current && swiper.current.swiper.slidePrev()
              }
              className="lg:flex hidden absolute top-[50%] -translate-y-1/2 left-[-20px] -translate-x-[30px] w-[50px] h-[50px] bg-[#E7EFFC] text-[#1363DF] border border-white shadow-[0px_10px_20px] shadow-[#DFDFDF] rounded-full items-center justify-center opacity-0 invisible z-[2] transition-all duration-300 ease-out group-hover/parent:translate-x-0 group-hover/parent:opacity-100 group-hover/parent:visible hover:text-white hover:bg-[#1363DF]"
            >
              <FaArrowLeft />
            </button>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation]}
              ref={swiper}
            >
              {courses &&
                courses.map((course, index) => (
                  <SwiperSlide key={index}>
                    <CourseCardSwiper course={course} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <button
              type="button"
              onClick={() =>
                swiper.current && swiper.current.swiper.slideNext()
              }
              className="lg:flex hidden absolute top-[50%] -translate-y-1/2 right-[-20px] translate-x-[30px] w-[50px] h-[50px] bg-[#E7EFFC] text-[#1363DF] border border-white shadow-[0px_10px_20px] shadow-[#DFDFDF] rounded-full items-center justify-center opacity-0 invisible z-[2] transition-all duration-300 ease-out group-hover/parent:translate-x-0 group-hover/parent:opacity-100 group-hover/parent:visible hover:text-white hover:bg-[#1363DF]"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
