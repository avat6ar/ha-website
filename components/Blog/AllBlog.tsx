"use client";
import { PostCard } from "./PostCard";
import { Aside } from "./Aside";
import { useBlogData } from "./blogUtils";

export const AllBlog = () => {
  const {
    filteredCourses: blogs,
    handleCategoryChange,
    categories,
    selectedCategories,
    handleSearchChange,
  } = useBlogData();
  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8">
            {blogs &&
              blogs.map((blog, index) => <PostCard blog={blog} key={index} />)}
          </div>
          <div className="lg:col-span-4">
            <Aside
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              selectedCategories={selectedCategories}
              handleSearchChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
