"use client";
import { getCourses } from "@/api/Courses";
import type { Course, Filter } from "@/types";
import { useState, useEffect, useMemo, useCallback } from "react";

export const useCourseData = () => {
  const { data: courses, isLoading, isError } = getCourses();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredCourses = useMemo(() => {
    if (courses) {
      return courses.filter(
        (course) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(course.category)) &&
          (selectedDifficulty.length === 0 ||
            selectedDifficulty.includes(course.difficulty)) &&
          (selectedType.length === 0 || selectedType.includes(course.type)) &&
          (searchInput === "" ||
            course.name.toLowerCase().includes(searchInput.toLowerCase()))
      );
    }
    return [];
  }, [
    courses,
    selectedCategories,
    selectedDifficulty,
    selectedType,
    searchInput,
  ]);

  const categories = useMemo(() => {
    if (courses) {
      const categoryCounts = courses.reduce(
        (acc: Record<string, number>, course: Course) => {
          const { category } = course;
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
  }, [courses]);

  const difficulty = useMemo(() => {
    if (courses) {
      const difficultyCounts = courses.reduce(
        (acc: Record<string, number>, course: Course) => {
          const { difficulty } = course;
          acc[difficulty] = acc[difficulty] ? acc[difficulty] + 1 : 1;
          return acc;
        },
        {}
      );

      return Object.entries(difficultyCounts).map(
        ([name, count]): Filter => ({
          name,
          count,
        })
      );
    }
    return [];
  }, [courses]);

  const type = useMemo(() => {
    if (courses) {
      const typeCounts = courses.reduce(
        (acc: Record<string, number>, course: Course) => {
          const { type } = course;
          acc[type] = acc[type] ? acc[type] + 1 : 1;
          return acc;
        },
        {}
      );

      return Object.entries(typeCounts).map(
        ([name, count]): Filter => ({
          name,
          count,
        })
      );
    }
    return [];
  }, [courses]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

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

  const handleDifficultyChange = useCallback(
    (difficultyName: string) => {
      setSelectedDifficulty((prev) =>
        prev.includes(difficultyName)
          ? prev.filter((difficulty) => difficulty !== difficultyName)
          : [...prev, difficultyName]
      );
    },
    [setSelectedDifficulty]
  );

  const handleTypeChange = useCallback(
    (typeName: string) => {
      setSelectedType((prev) =>
        prev.includes(typeName)
          ? prev.filter((type) => type !== typeName)
          : [...prev, typeName]
      );
    },
    [setSelectedType]
  );

  return {
    courses,
    isLoading,
    isError,
    selectedCategories,
    selectedDifficulty,
    selectedType,
    categories,
    difficulty,
    type,
    filteredCourses,
    handleCategoryChange,
    handleDifficultyChange,
    handleTypeChange,
    handleSearchChange,
  };
};
