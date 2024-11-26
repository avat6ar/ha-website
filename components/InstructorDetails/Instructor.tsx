"use client";

import { getInstructorDetails } from "@/api/Instructor";
import { notFound, useParams } from "next/navigation";
import { Loading } from "../Loading";
import { HeroSection } from "../HeroSection";
import { DetailsCard } from "./DetailsCard";
import { CoursesSwiper } from "./CoursesSwiper";

export const Instructor = () => {
  const params = useParams();
  const link = params.link;

  const { data, isLoading, isError } = getInstructorDetails(link);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return notFound();
  }
  const { courses, instructor_details } = data;

  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Instructors",
            url: "/instructors",
          },
          "Instructors Details",
        ]}
        title={instructor_details.name}
      />
      <DetailsCard instructorDetails={instructor_details} />
      <CoursesSwiper courses={courses} />
    </>
  );
};
