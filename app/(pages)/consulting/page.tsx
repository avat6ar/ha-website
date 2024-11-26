import { FormConsulting } from "@/components/Consulting/FormConsulting";
import { Services } from "@/components/Consulting/Services";
import { HeroSection } from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About title",
  description: "Ha description",
};

const Consulting = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "Consulting",
        ]}
        title="Consulting"
      />
      <Services />
      <FormConsulting />
    </>
  );
};

export default Consulting;
