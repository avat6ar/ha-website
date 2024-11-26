import { AllBlog } from "@/components/Blog/AllBlog";
import { HeroSection } from "@/components/HeroSection";

const Blog = () => {
  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          "Blog",
        ]}
        title="Blog"
      />
      <AllBlog />
    </>
  );
};

export default Blog;
