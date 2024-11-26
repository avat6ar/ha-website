import { HeroSection } from "@/components/HeroSection";
import { OurInstructors } from "@/components/Instructors/OurInstructors";

const Instructors = () => {
  return (
    <>
      <HeroSection
        array={[{ name: "Home", url: "?" }, "Instructors"]}
        title="Top Class Instructors"
      />
      <OurInstructors />
    </>
  );
};

export default Instructors;
