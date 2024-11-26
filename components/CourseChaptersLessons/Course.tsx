"use client";
import { getVideos } from "@/api/Courses";
import { Loading } from "../Loading";
import { LessonCard } from "./LessonCard";
import { useParams } from "next/navigation";
import { HeroSection } from "../HeroSection";
import Link from "next/link";

export const Course = () => {
  const params = useParams();
  const link = params.link;

  const { data, isLoading } = getVideos(link);

  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Profile",
            url: "/profile",
          },
          {
            name: "Course",
            url: `/courses/${link}`,
          },
          "Chapters Lessons",
        ]}
        title="Chapters Lessons"
      />
      {isLoading && <Loading />}
      {data && (
        <section className="py-[120px] relative block">
          <div className="container">
            <div className="flex gap-[12px] flex-col">
              {data.chapters.map((chapter, index) => (
                <div key={index} className="block relative">
                  <h3 className="text-[22px] mb-[15px] font-heading text-[#082A5E] font-semibold leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
                    Chapter {++index} : {chapter.chapter_name}
                  </h3>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {chapter.lessons.map((lesson, index) => (
                      <LessonCard
                        lesson={lesson}
                        cover={data.cover}
                        key={index}
                      />
                    ))}
                  </div>
                  <h6 className="text-[16px] mb-[15px] font-heading text-[#082A5E] font-semibold leading-[1.2] mt-5">
                    Quizz Chapter:
                  </h6>
                  <div className="grid md:grid-cols-4 grid-cols-1 gap-[30px]">
                    {chapter.quizz.map(quiz => (
                      <>
                        {quiz.has_tested ? (
                          <span
                            className="w-full text-blue-600 font-semibold"
                            key={quiz.id}
                          >
                            {quiz.title}: {quiz.result + "/" + quiz.final_grade}
                          </span>
                        ) : (
                          <Link
                            href={`/quizzes/${quiz.id}`}
                            className="w-full text-blue-600 underline font-semibold"
                            key={quiz.id}
                          >
                            {quiz.title}
                          </Link>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              ))}
              <h6 className="text-[16px] mb-[15px] font-heading text-[#082A5E] font-semibold leading-[1.2] mt-5">
                Quizz Course:
              </h6>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-[30px]">
                {data.end_quizz.map(quiz => (
                  <>
                    {quiz.has_tested ? (
                      <span
                        className="w-full text-blue-600 font-semibold"
                        key={quiz.id}
                      >
                        {quiz.title}: {quiz.result + "/" + quiz.final_grade}
                      </span>
                    ) : (
                      <Link
                        href={`/quizzes/${quiz.id}`}
                        className="w-full text-blue-600 underline font-semibold"
                        key={quiz.id}
                      >
                        {quiz.title}
                      </Link>
                    )}
                  </>
                ))}
              </div>
              <h6 className="text-[16px] mb-[15px] font-heading text-[#082A5E] font-semibold leading-[1.2] mt-5">
                Course Files:
              </h6>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-[30px]">
                {data.Course_Files.map(file => (
                  <a
                    href={file.link}
                    target="_blank"
                    className="w-full text-blue-600 font-semibold"
                    key={file.id}
                  >
                    {file.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
