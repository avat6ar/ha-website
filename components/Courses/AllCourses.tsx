"use client";
import { CourseFilters } from "./CourseFilters";
import { CoursesProduct } from "./CoursesProduct";
import { useCourseData } from "./courseUtils";

export const AllCourses = () => {
  const {
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
  } = useCourseData();

  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="grid gap-[30px] lg:grid-cols-12">
          <div className="xl:col-span-3 lg:col-span-4 order-2 lg:order-1">
            <CourseFilters
              categories={categories}
              difficulty={difficulty}
              type={type}
              onCategoryChange={handleCategoryChange}
              onDifficultyChange={handleDifficultyChange}
              onTypeChange={handleTypeChange}
              selectedCategories={selectedCategories}
              selectedDifficulty={selectedDifficulty}
              selectedType={selectedType}
            />
          </div>
          <div className="xl:col-span-9 lg:col-span-8 order-1 lg:order-2">
            <CoursesProduct
              courses={filteredCourses}
              loading={isLoading}
              handleSearchChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
