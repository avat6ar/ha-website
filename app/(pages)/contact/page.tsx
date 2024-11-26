import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactMap } from "@/components/Contact/ContactMap";
import { HeroSection } from "@/components/HeroSection";

const Contact = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "Contact",
        ]}
        title="Contact"
      />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default Contact;
