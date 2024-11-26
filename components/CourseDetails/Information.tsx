import { Description } from "./Description";
import { Instructors } from "./Instructors";
import { Accordion } from "./Accordion";
import type { CourseDetails } from "@/types";

export const Information = ({ course }: { course: CourseDetails }) => {
  return (
    <div className="block w-full">
      <Description
        goals={course.goals}
        requirements={course.requirements}
        text={course.text}
      />
      <div className="mt-[40px]">
        <h4 className="text-[22px] mb-[20px] font-heading text-[#082A5E] font-semibold leading-[1.2]">
          Curriculum
        </h4>
        <Accordion chapters={course.Curriculum} />
      </div>
      <div className="mt-[45px]">
        <h4 className="text-[22px] mb-[25px] font-heading text-[#082A5E] font-semibold leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
          Your Instructors
        </h4>
        <div className="block">
          <Instructors instructor={course.instructor} />
        </div>
      </div>
    </div>
  );
};
