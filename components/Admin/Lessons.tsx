import { ChapterLessons } from "@/types/admin";
import { LessonCard } from "./LessonCard";

export const Lessons = ({ lessons }: { lessons: ChapterLessons[] }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
      {lessons &&
        lessons.map((lesson, index) => (
          <LessonCard lesson={lesson} key={index} />
        ))}
    </div>
  );
};
