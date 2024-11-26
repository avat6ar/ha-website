"use client";
import { getBlogs } from "@/api/Blogs";
import { Blog, Filter } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useBlogData = () => {
  const { data: blogs, isLoading, isError } = getBlogs();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredCourses = useMemo(() => {
    if (blogs) {
      return blogs.filter(
        (blog) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(blog.category)) &&
          (searchInput === "" ||
            blog.title.toLowerCase().includes(searchInput.toLowerCase()))
      );
    }
    return [];
  }, [blogs, selectedCategories, searchInput]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  const categories = useMemo(() => {
    if (blogs) {
      const categoryCounts = blogs.reduce(
        (acc: Record<string, number>, blog: Blog) => {
          const { category } = blog;
          acc[category] = acc[category] ? acc[category] + 1 : 1;
          return acc;
        },
        {}
      );

      return Object.entries(categoryCounts).map(
        ([name, count]): Filter => ({
          name,
          count,
        })
      );
    }
    return [];
  }, [blogs]);

  const handleCategoryChange = useCallback(
    (categoryName: string) => {
      setSelectedCategories((prev) =>
        prev.includes(categoryName)
          ? prev.filter((category) => category !== categoryName)
          : [...prev, categoryName]
      );
    },
    [setSelectedCategories]
  );

  return {
    filteredCourses,
    categories,
    handleCategoryChange,
    selectedCategories,
    handleSearchChange,
  };
};
