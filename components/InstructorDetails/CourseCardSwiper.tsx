import { InstructorCourses } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsClock } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiFileTextThin, PiUsers } from "react-icons/pi";

export const CourseCardSwiper = ({ course }: { course: InstructorCourses }) => {
  return (
    <div className="border border-[#E8E8E8] rounded-[6px] p-[15px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.05)] group">
      <div className="relative block">
        <Link
          href={`/courses/${course.link}`}
          className="block relative rounded-[4px] overflow-hidden z-[1] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:[background:_linear-gradient(to_right,_rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)] before:-skew-x-[25deg] group-hover:before:animate-hoverShine"
        >
          <img
            src={course.cover}
            width={238}
            height={181}
            alt="img"
            className="w-full"
          />
        </Link>
      </div>
      <div className="pt-[16px] pb-[5px] px-[7px]">
        <a
          href="#"
          className="text-[15px] font-medium leading-[1] py-[6px] px-[16px] rounded-[50px] bg-[#E8F9EF] text-[#04BC53]"
        >
          {course.category}
        </a>
        <h5 className="text-[17px] font-normal leading-[1.3] my-[16px] font-heading text-[#082A5E]">
          <Link
            href={`/courses/${course.link}`}
            className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
          >
            {course.name}
          </Link>
        </h5>
        <ul className="flex gap-[8px_22px] items-center flex-wrap">
          <li className="flex items-center">
            <PiFileTextThin className="text-[20px] mr-[7px]" />
            {course.n_lessons.toString().padStart(2, "0")}
          </li>
          <li className="flex items-center">
            <BsClock className="text-[18px] mr-[7px]" />
            {course.duration}
          </li>
          <li className="flex items-center">
            <PiUsers className="text-[20px] mr-[7px]" />
            {course.join}
          </li>
        </ul>
        <div className="flex items-center justify-between flex-wrap pt-[15px] mt-[20px] border-t border-[#D7DCE3]">
          <h3 className="text-[20px] leading-[1] text-[#1363DF] font-medium font-heading">
            {course.old_price == course.new_price ? (
              <>${course.old_price}</>
            ) : (
              <>
                <del className="text-[16px] text-[#8D9DB5] mr-[4px]">
                  ${course.old_price.toLocaleString()}
                </del>
                ${course.new_price.toLocaleString()}
              </>
            )}
          </h3>
          <div className="text-[#F8BC24] tracking-[-1] leading-[1] flex items-center gap-[7px]">
            <FaStar className="text-[20px]" />
            <span className="text-[#39557E] tracking-[0]">
              ({parseFloat(course.rate.toFixed(2))})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
