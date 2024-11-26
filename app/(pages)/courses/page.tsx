import { AllCourses } from "@/components/Courses/AllCourses";
import { HeroSection } from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses title",
  description: "Ha description",
};

const Courses = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "Courses",
        ]}
        title="Courses"
      />
      <AllCourses />
    </>
  );
};

export default Courses;
