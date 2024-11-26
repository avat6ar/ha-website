import { CourseCard } from "./CourseCard";
import { Course } from "@/types/admin";

export const Courses = ({
  courses,
  user_id,
}: {
  courses: Course[];
  user_id: number;
}) => {
  console.log("🚀 ~ courses:", courses);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[10px]">
      {courses &&
        courses.map((course, index) => (
          <CourseCard key={index} course={course} user_id={user_id} />
        ))}
    </div>
  );
};
