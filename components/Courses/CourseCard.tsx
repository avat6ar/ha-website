import Link from "next/link";
import { PiFileTextThin, PiUsers } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import type { Course } from "@/types";

export const CourseListCard = ({ course }: { course: Course }) => {
  return (
    <>
      <div className="col-span-1 group">
        <div className="border border-[#E8E8E8] rounded-[6px] p-[15px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.05)] flex md:flex-row flex-col gap-[25px]">
          <div className="relative block md:w-1/3">
            <Link
              href={`/courses/${course.link}`}
              className="block relative h-full overflow-hidden z-[1] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:[background:_linear-gradient(to_right,_rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)] before:-skew-x-[25deg] group-hover:before:animate-hoverShine"
            >
              <Image
                src={course.cover}
                width={270}
                height={223}
                quality={100}
                alt="img"
                className="md:w-[270px] w-full object-cover h-full"
              />
            </Link>
          </div>
          <div className="pr-[15px] md:w-2/3">
            <a
              href="#"
              className="text-[14px] font-medium leading-[1] py-[6px] px-[16px] rounded-[50px] bg-[#E8F9EF] text-[#04BC53] inline-block mb-[8px]"
            >
              {course.category}
            </a>
            <h5 className="text-[20px] font-medium leading-[1.38] mb-[10px] font-heading text-[#082A5E]">
              <Link
                href={`/courses/${course.link}`}
                className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
              >
                {course.name}
              </Link>
            </h5>
            <ul className="flex gap-[8px_22px] items-center flex-wrap">
              <li className="flex items-center">
                <BsClock className="text-[18px] mr-[7px]" />
                {course.duration}
              </li>
              <li className="flex items-center">
                <PiUsers className="text-[20px] mr-[7px]" />
                {course.joined.toString().padStart(2, "0")}
              </li>
              <li className="text-[#F8BC24] tracking-[-1] leading-[1] flex items-center gap-[7px]">
                <FaStar className="text-[18px]" />
                <span className="text-[#39557E] tracking-[0]">
                  ({course.rate.toString().padStart(2, "0")})
                </span>
              </li>
            </ul>
            <p className="text-[16px] font-body text-[#39557E] font-normal leading-[1.65]">
              {course.text}
            </p>
            <div className="flex items-center justify-between flex-wrap pt-[15px] mt-[20px] border-t border-[#D7DCE3]">
              <div className="flex items-center gap-[12px]">
                <Link href={`/instructors/${course.instructor.link}`}>
                  <Image
                    src={course.instructor.cover}
                    width={50}
                    height={50}
                    quality={100}
                    alt="img"
                    className="max-w-[35px] max-h-[35px] rounded-full object-cover"
                  />
                </Link>
                <Link
                  href={`/instructors/${course.instructor.link}`}
                  className="text-[#39557E] transition-all duration-300 ease-out hover:text-[#1363DF]"
                >
                  {course.instructor.name}
                </Link>
              </div>
              <span className="text-[22px] leading-[1] text-[#1363DF] font-medium font-heading">
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CourseGridCard = ({ course }: { course: Course }) => {
  return (
    <div className="col-span-1 group">
      <div className="border border-[#E8E8E8] rounded-[6px] p-[15px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.05)]">
        <div className="relative block">
          <Link
            href={`/courses/${course.link}`}
            className="block relative rounded-[4px] overflow-hidden z-[1] before:absolute before:top-0 before:-left-full before:w-1/2 before:h-full before:[background:_linear-gradient(to_right,_rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_100%)] before:-skew-x-[25deg] group-hover:before:animate-hoverShine"
          >
            <Image
              src={course.cover}
              width={237}
              quality={100}
              height={181}
              alt="img"
              className="w-full"
            />
          </Link>
          <div className="absolute right-[15px] bottom-[-25px] z-[2]">
            <Link href={`/instructors/${course.instructor.link}`}>
              <Image
                src={course.instructor.cover}
                width={30}
                height={30}
                quality={100}
                alt="img"
                className="max-w-[50px] max-h-[50px] md:w-auto md:h-auto border-[3px] border-white rounded-full object-cover"
              />
            </Link>
          </div>
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
              <BsClock className="text-[18px] mr-[7px]" />
              {course.duration}
            </li>
            <li className="flex items-center">
              <PiUsers className="text-[20px] mr-[7px]" />
              {course.joined.toString().padStart(2, "0")}
            </li>
          </ul>
          <div className="flex items-center justify-between flex-wrap pt-[15px] mt-[20px] border-t border-[#D7DCE3]">
            <span className="text-[20px] leading-[1] text-[#1363DF] font-medium font-heading">
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
            </span>
            <div className="text-[#F8BC24] tracking-[-1] leading-[1] flex items-center gap-[7px]">
              <FaStar className="text-[20px]" />
              <span className="text-[#39557E] tracking-[0]">
                ({course.rate.toString().padStart(2, "0")})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
