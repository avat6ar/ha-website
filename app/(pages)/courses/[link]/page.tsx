import type { Metadata } from "next";
import type { CourseDetails } from "@/types";
import { Course } from "@/components/CourseDetails/Course";

export const metadata: Metadata = {
  title: "Course Details title",
  description: "Ha description",
};

const CourseDetails = () => {
  return (
    <>
      <Course />
    </>
  );
};

export default CourseDetails;
