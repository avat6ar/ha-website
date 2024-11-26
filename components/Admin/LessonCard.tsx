import { ChapterLessons } from "@/types/admin";
import Link from "next/link";

export const LessonCard = ({ lesson }: { lesson: ChapterLessons }) => {
  return (
    <div className="col-sapn-1 group">
      <div className="bg-white shadow-[0px_4px_15px] shadow-[rgba(0,0,0,0.03)] border rounded overflow-hidden">
        <div className="flex p-[15px] justify-between gap-[15px] flex-nowrap">
            <h4 className="text-[18px] font-medium leading-[1.25] font-heading text-[#082A5E]">
              <Link
                href={`/admin/lessons/${lesson.id}`}
                className="inline bg-[linear-gradient(#082A5E,#082A5E),linear-gradient(#082A5E,#082A5E)] bg-[0%_1.8px,0_1.8px] [background-position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-[0.4s] ease-linear hover:bg-[0_1.8px,100%_1.8px] hover:text-inherit"
              >
                {lesson.name}
              </Link>
            </h4>
            <Link
              href={lesson.link}
              className="text-base hover:text-[#1363DF] transition-all duration-300 text-[#082A5E] font-medium"
            >
              Video
            </Link>
        </div>
      </div>
    </div>
  );
};
