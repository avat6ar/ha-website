import { WhoWeAre } from "@/components/About/WhoWeAre";
import { HeroSection } from "@/components/HeroSection";
import { Achievements } from "@/components/About/Achievements";
import { Mentors } from "@/components/About/Mentors";
import { Offer } from "@/components/About/Offer";
import type { Metadata } from "next";
import { FeaturedCourses } from "@/components/FeaturedCourses";

export const metadata: Metadata = {
  title: "About title",
  description: "Ha description",
};

const About = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "About",
        ]}
        title="About"
      />
      <WhoWeAre />
      <Achievements />
      <Mentors />
      <Offer />
      <FeaturedCourses />
    </>
  );
};

export default About;
