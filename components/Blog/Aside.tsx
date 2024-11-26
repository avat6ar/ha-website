import type { Filter } from "@/types";
import { BoxSearch } from "./BoxSearch";
import { PostFilters } from "./PostFilters";

export const Aside = ({
  categories,
  handleCategoryChange,
  selectedCategories,
  handleSearchChange,
}: {
  categories: Filter[];
  handleCategoryChange: (categoryName: string) => void;
  handleSearchChange: (categoryName: string) => void;
  selectedCategories: string[];
}) => {
  return (
    <aside className="w-full">
      <BoxSearch handleSearchChange={handleSearchChange} />
      <PostFilters
        categories={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategories={selectedCategories}
      />
    </aside>
  );
};
