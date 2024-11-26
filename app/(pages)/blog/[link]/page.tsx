import type { Metadata } from "next";
import { Blog } from "@/components/BlogDetails/Blog";

export const metadata: Metadata = {
  title: "Blog Details title",
  description: "Ha description",
};

const BlogDetails = () => {
  return (
    <>
      <Blog />
    </>
  );
};

export default BlogDetails;
