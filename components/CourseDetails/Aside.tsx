import type { CourseDetails } from "@/types";
import { DetailsCard } from "./DetailsCard";
import { RelatedCourses } from "./RelatedCourses";

export const Aside = ({ course }: { course: CourseDetails }) => {
  return (
    <aside className="lg:mt-[-280px] mt-[80px] relative z-[1]">
      <DetailsCard
        id={course.id}
        cover={course.cover}
        duration={course.duration}
        seats={course.n_seats}
        joined={course.joined}
        category={course.category}
        name={course.name}
        old_price={course.old_price}
        new_price={course.new_price}
        type_course={course.type_course}
      />
      <RelatedCourses related={course.related_courses} />
    </aside>
  );
};
