"use client";
import { BsPostcardHeart } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { PiUsersThreeLight } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import { getDataIndex } from "@/api/admin/home";
import { RenderListItem } from "./RenderListItem";

export const IndexDetails = () => {
  const { data, isLoading } = getDataIndex();

  return (
    <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px] mb-[35px]">
      {isLoading &&
        [...Array(6).keys()].map((i, index) => (
          <li
            className="flex flex-col gap-[8px] items-center justify-center p-5 bg-white rounded-lg animate-pulse"
            key={index}
            style={{
              animationDelay: `${index * 1}s`,
              animationDirection: "1s",
            }}
          >
            <div className="w-[50px] h-[50px] rounded-full bg-slate-200"></div>
            <div className="w-full h-4 rounded bg-slate-200"></div>
            <div className="w-2/3 h-4 rounded bg-slate-200"></div>
          </li>
        ))}
      {data && (
        <>
          <RenderListItem
            icon={PiUsersThreeLight}
            title="Users"
            color="#04BC53"
            value={data?.n_users}
          />
          <RenderListItem
            icon={IoBookOutline}
            title="Courses"
            color="#BC18E4"
            value={data?.n_courses.toLocaleString()}
          />
          <RenderListItem
            icon={BsPostcardHeart}
            title="Blogs"
            color="#FF2020"
            value={data?.n_blogs.toLocaleString()}
          />
          <RenderListItem
            icon={BiCategoryAlt}
            title="Course Categories"
            color="#03C0EA"
            value={data?.n_courses_categories.toLocaleString()}
          />
          <RenderListItem
            icon={MdOutlineCategory}
            title="Blog Categories"
            color="#03C0EA"
            value={data?.n_blogs_categories.toLocaleString()}
          />
          <RenderListItem
            icon={FiEye}
            title="Reviews"
            color="#03C0EA"
            value={data?.n_reviews.toLocaleString()}
          />
        </>
      )}
    </ul>
  );
};
