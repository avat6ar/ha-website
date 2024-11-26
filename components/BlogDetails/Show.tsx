import { getBlogDetails } from "@/api/Blogs";
import React from "react";
import { Post } from "./Post";
import { Aside } from "./Aside";

export const Show = ({ link }: { link: string }) => {
  const { data: blog } = getBlogDetails(link);

  if (!blog) {
    return <p className="text-base">Blog could not be found</p>;
  }
  
  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8">
            <Post
              details={blog.blog_details}
              prevBlog={blog.prev_blog}
              nextBlog={blog.next_blog}
              written={blog.writer}
            />
          </div>
          <div className="lg:col-span-4">
            <Aside related={blog.realted_blogs} />
          </div>
        </div>
      </div>
    </section>
  );
};
