"use client";
import { useState } from "react";
import { Information } from "./Information";
import { Reviews } from "./Reviews";
import { useSpring, animated } from "@react-spring/web";
import type { CourseDetails } from "@/types";

export const Details = ({ course }: { course: CourseDetails }) => {
  const [tab, setTab] = useState("information");

  const informationSpring = useSpring({
    opacity: tab === "information" ? 1 : 0,
    delay: tab === "information" ? 0 : 300,
  });

  const reviewsSpring = useSpring({
    opacity: tab === "reviews" ? 1 : 0,
    delay: tab === "reviews" ? 0 : 300,
  });

  return (
    <div className="pt-[55px] lg:mr-[70px] block">
      <ul className="flex flex-wrap gap-[30px] mb-[25px] border-b-[3px] border-[#E6EAEF]">
        <li className="block relative">
          <button
            type="button"
            onClick={() => setTab("information")}
            className={`text-[19px] bg-transparent px-[5px] pb-[10px] font-medium font-heading relative before:absolute before:left-0 before:bottom-[-3px] before:w-full before:h-[3px] before:bg-[#1363DF] before:transition-all before:duration-300 before:ease-linear ${
              tab == "information"
                ? "text-[#1363DF] before:opacity-100"
                : "text-[#39557E] before:opacity-0"
            }`}
          >
            Course Information
          </button>
        </li>
        <li className="block relative">
          <button
            type="button"
            onClick={() => setTab("reviews")}
            className={`text-[19px] bg-transparent px-[5px] pb-[10px] font-medium font-heading relative before:absolute before:left-0 before:bottom-[-3px] before:w-full before:h-[3px] before:bg-[#1363DF] before:transition-all before:duration-300 before:ease-linear ${
              tab == "reviews"
                ? "text-[#1363DF] before:opacity-100"
                : "text-[#39557E] before:opacity-0"
            }`}
          >
            Reviews
          </button>
        </li>
      </ul>
      <animated.div
        style={{
          ...informationSpring,
          display: tab === "information" ? "block" : "none",
        }}
      >
        <Information course={course} />
      </animated.div>
      <animated.div
        style={{
          ...reviewsSpring,
          display: tab === "reviews" ? "block" : "none",
        }}
      >
        <Reviews course={course} />
      </animated.div>
    </div>
  );
};
