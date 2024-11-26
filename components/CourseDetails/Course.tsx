"use client";
import { getCourseDetails } from "@/api/Courses";
import { notFound } from "next/navigation";
import { Loading } from "../Loading";
import { HeroSection } from "./HeroSection";
import { Details } from "./Details";
import { Aside } from "./Aside";
import { useParams } from "next/navigation";

export const Course = () => {
  const params = useParams();
  const link = params.link;

  const { data: course, isLoading, isError } = getCourseDetails(link);

  if (isLoading) {
    return <Loading />;
  }

  if (!course) {
    return notFound();
  }

  const { totalPoints, totalCount } = Object.entries(
    course.rating_counts
  ).reduce(
    (acc, [stars, count]) => {
      acc.totalPoints += parseInt(stars) * count;
      acc.totalCount += count;
      return acc;
    },
    { totalPoints: 0, totalCount: 0 }
  );

  const stars: number = Number((totalPoints / totalCount || 0).toFixed(1));

  return (
    <>
      <HeroSection
        name={course.name}
        text={course.text}
        category={course.category}
        instructorName={course.instructor.name}
        instructorProfile={course.instructor.profile}
        duration={course.duration}
        joined={course.joined}
        stars={stars}
        seats={course.n_seats}
      />
      <section className="pb-[120px] relative block">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="xl:w-[75%] lg:w-[66.66666667%] w-full">
              <Details course={course} />
            </div>
            <div className="xl:w-[25%] lg:w-[33.33333333%] w-full">
              <Aside course={course} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
