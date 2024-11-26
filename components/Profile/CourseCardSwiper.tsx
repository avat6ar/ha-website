import { CourseCardSwiperProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsClock } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiUsers } from "react-icons/pi";

export const CourseCardSwiper = ({
  course,
}: {
  course: CourseCardSwiperProps;
}) => {
  return (
    <div className="border border-[#E8E8E8] rounded-[6px] p-[15px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.05)] group">
      <div className="relative block">
        <Link
          href={`/profile/course-chapters-lessons/${course.link}`}
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
        <div className="absolute right-[15px] bottom-[-25px] z-[2]">
          <Link href={`/instructors/${course.instructor.link}`}>
            <Image
              src={course.instructor.cover}
              width={50}
              height={50}
              alt="img"
              className="w-[50px] h-[50px] border-[3px] border-white rounded-full object-cover"
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
        <ul className="flex gap-[8px_22px] items-center flex-wrap mt-[16px]">
          <li className="flex items-center">
            <BsClock className="text-[18px] mr-[7px]" />
            {course.duration}
          </li>
          <li className="flex items-center">
            <PiUsers className="text-[20px] mr-[7px]" />
            {course.joined.toString().padStart(2, "0")}
          </li>
          <li className="flex items-center">
            <FaStar className="text-[18px] text-[#F8BC24] mr-[7px]" />(
            {course.rate.toString().padStart(2, "0")})
          </li>
        </ul>
        <h5 className="text-[17px] font-normal leading-[1.3] mt-[16px] font-heading text-[#082A5E]">
          <Link
            href={`/profile/course-chapters-lessons/${course.link}`}
            className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
          >
            {course.name}
          </Link>
        </h5>
      </div>
    </div>
  );
};
