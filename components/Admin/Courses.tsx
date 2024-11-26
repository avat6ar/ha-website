import { CourseCard } from "./CourseCard";
import { Course } from "@/types/admin";

export const Courses = ({ courses }: { courses: Course[] }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[10px]">
      {courses &&
        courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
    </div>
  );
};
