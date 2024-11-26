import main from "@/app/main.module.css";
import type { CourseFiltersProps } from "@/types";

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  categories,
  difficulty,
  type,
  onCategoryChange,
  onDifficultyChange,
  onTypeChange,
  selectedCategories,
  selectedDifficulty,
  selectedType,
}) => {
  return (
    <aside className="block relative">
      <div className="border border-[#ECECEC] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded-[8px] py-[25px] px-[30px] bg-white mb-[30px]">
        <h4 className="text-[19px] font-medium mb-[20px] relative font-heading text-[#082A5E] leading-[1.2] after:abolute after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
          Filter by Category
        </h4>
        <ul className="flex flex-col gap-[15px]">
          {categories &&
            categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center gap-[10px] leading-[1]"
              >
                <input
                  type="checkbox"
                  name={category.name}
                  id={category.name}
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => onCategoryChange(category.name)}
                  className={`rounded-[4px] border border-[#B2BDCD] w-[16px] h-[16px] appearance-none bg-white checked:bg-[#0d6efd] ${main.checkbox}`}
                />
                <label htmlFor={category.name}>
                  {category.name} ({category.count})
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div className="border border-[#ECECEC] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded-[8px] py-[25px] px-[30px] bg-white mb-[30px]">
        <h4 className="text-[19px] font-medium mb-[20px] relative font-heading text-[#082A5E] leading-[1.2] after:abolute after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
          Price Type
        </h4>
        <ul className="flex flex-col gap-[15px]">
          {type &&
            type.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[10px] leading-[1]"
              >
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  checked={selectedType.includes(item.name)}
                  onChange={() => onTypeChange(item.name)}
                  className={`rounded-[4px] border border-[#B2BDCD] w-[16px] h-[16px] appearance-none bg-white checked:bg-[#0d6efd] ${main.checkbox}`}
                />
                <label htmlFor={item.name}>
                  {item.name} ({item.count})
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div className="border border-[#ECECEC] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded-[8px] py-[25px] px-[30px] bg-white mb-[30px]">
        <h4 className="text-[19px] font-medium mb-[20px] relative font-heading text-[#082A5E] leading-[1.2] after:abolute after:block after:w-[28px] after:h-[4px] after:rounded-[50px] after:bg-[#1363DF] after:mt-[10px]">
          Difficulty
        </h4>
        <ul className="flex flex-col gap-[15px]">
          {difficulty &&
            difficulty.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-[10px] leading-[1]"
              >
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  checked={selectedDifficulty.includes(item.name)}
                  onChange={() => onDifficultyChange(item.name)}
                  className={`rounded-[4px] border border-[#B2BDCD] w-[16px] h-[16px] appearance-none bg-white checked:bg-[#0d6efd] ${main.checkbox}`}
                />
                <label htmlFor={item.name}>
                  {item.name} ({item.count})
                </label>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};
