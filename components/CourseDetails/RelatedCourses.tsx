import { RelatedCoursesCard } from "./RelatedCoursesCard";
import type { Related } from "@/types";

export const RelatedCourses = ({
  related: courses,
}: {
  related: Related[];
}) => {
  return (
    <div className="border border-[#ececec] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded-[8px] py-[28px] lg:px-[25px] px-[30px] bg-white">
      <h4 className="text-[19px] font-medium mb-[20px] font-heading text-[#082A5E] leading-[1.2] after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
        Related Courses
      </h4>
      <ul className="w-full block">
        {courses &&
          courses.map((course, index) => (
            <RelatedCoursesCard
              cover={course.cover}
              name={course.name}
              new_price={course.new_price}
              old_price={course.old_price}
              link={course.link}
              key={index}
            />
          ))}
      </ul>
    </div>
  );
};
