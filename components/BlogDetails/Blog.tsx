"use client";
import { getBlogDetails } from "@/api/Blogs";
import { notFound, useParams } from "next/navigation";
import React from "react";
import { HeroSection } from "../HeroSection";
import { Post } from "./Post";
import { Aside } from "./Aside";
import { Loading } from "../Loading";

export const Blog = () => {
  const params = useParams();
  const link = params.link;
  
  const { data: blog, isLoading, isError } = getBlogDetails(link);
  console.log("🚀 ~ Blog ~ isError:", isError)

  if (isLoading) {
    return <Loading />;
  }

  if (!blog) {
    return notFound();
  }

  return (
    <>
      <HeroSection
        array={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Blog",
            url: "/blog",
          },
          "Blog Details",
        ]}
        title={blog.blog_details.title}
      />
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
    </>
  );
};
