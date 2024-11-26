import { HeroSection } from "@/components/Home/HeroSection";
import { About } from "@/components/Home/About";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Categories } from "@/components/Home/Categories";
import { StudentReviews } from "@/components/Home/StudentReviews";
import { Blog } from "@/components/Home/Blog";
import type { Metadata } from "next";
import { Subscribe } from "@/components/Home/Subscribe";

export const metadata: Metadata = {
  title: "Home title",
  description: "Ha description",
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <Subscribe />
      <About />
      <FeaturedCourses />
      <Categories />
      <StudentReviews />
      <Blog />
    </>
  );
};

export default Home;
