import { HeroSection } from "@/components/HeroSection";
import { Question } from "@/components/Quizzes/Question";

const Quizz = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "Quizz",
        ]}
        title="Quizz"
      />
      <Question />
    </>
  );
};

export default Quizz;
