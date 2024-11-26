import { BlogsDetails_Category } from "@/types/admin";
import { BlogCard } from "./BlogCard";

export const Blogs = ({ blogs }: { blogs: BlogsDetails_Category[] }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
      {blogs &&
        blogs.map((blog, index) => <BlogCard blog={blog} key={index} />)}
    </div>
  );
};
