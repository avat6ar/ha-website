import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { PiFileTextThin } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import Image from "next/image";
import type { HomeCourse } from "@/types";

export const FeaturedCourseCard: React.FC<{ course: HomeCourse }> = ({
  course,
}) => {
  return (
    <div className="col-sapn-1 group">
      <div className="bg-white rounded-md shadow-[0px_10px_20px_rgba(0,_0,_0,_0.05)] overflow-hidden">
        <div className="relative">
          <button
            type="button"
            className="absolute left-[22px] top-[22px] text-[15px] font-medium text-white block leading-[1] py-[6px] px-[16px] rounded-full z-[2] bg-[#BC18E4]"
          >
            {course.category}
          </button>
          <Link
            href={`/courses/${course.link}`}
            className="block relative overflow-hidden z-[1] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:[background:_linear-gradient(to_right,_rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)] before:-skew-x-[25deg] group-hover:before:animate-hoverShine"
          >
            <Image
              src={course.cover}
              alt={course.name}
              quality={100}
              width={270}
              height={230}
              className="w-full"
            />
          </Link>
        </div>
        <div className="pt-[25px] pb-[20px] lg:px-[30px] px-[25px] block">
          <ul className="flex flex-wrap items-center gap-x-[15px] mb-[10px]">
            <li className="flex items-center">
              <PiFileTextThin className="text-[20px] mr-[7px]" />
              {course.n_lessons.toString().padStart(2, "0")} Lessons
            </li>
            <li className="flex items-center">
              <BsClock className="text-[18px] mr-[7px]" />
              {course.duration}
            </li>
            <li className="flex items-center">
              <PiUsers className="text-[20px] mr-[7px]" />
              {course.joined.toString().padStart(2, "0")}
            </li>
          </ul>
          <h5 className="text-[20px] font-normal leading-[1.3] mb-[15px] font-heading text-[#082A5E]">
            <Link
              href={`/courses/${course.link}`}
              className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
            >
              {course.name}
            </Link>
          </h5>
          <div className="flex text-[#F8BC24] tracking-[-1px] leading-[1]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-[#39557E] leading-[1] font-body text-[16px] font-normal tracking-[0] ml-[5px]">
              ({parseFloat(course.rate.toFixed(2))})
            </span>
          </div>
          <div className="border-t border-[#D7DCE3] flex justify-between items-center pt-[15px] mt-[20px]">
            <span className="flex items-center gap-[12px]">
              <Image
                width={40}
                height={40}
                src={course.instructor.profile}
                alt={course.instructor.name}
                quality={100}
                className="w-[40px] h-[40px] rounded-full"
              />
              <span className="text-[#39557E] transition-all duration-300 ease-out hover:text-[#1363DF]">
                {course.instructor.name}
              </span>
            </span>
            <h5 className="text-[22px] text-[#1363DF] font-medium font-heading">
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
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
