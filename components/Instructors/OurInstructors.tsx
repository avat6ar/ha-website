"use client";
import React from "react";
import { InstructorCard } from "./InstructorCard";
import { getInstructors } from "@/api/Instructor";

export const OurInstructors = () => {
  const { data: instructors, isLoading,isError } = getInstructors();
  console.log("🚀 ~ OurInstructors ~ isError:", isError)
  console.log("🚀 ~ OurInstructors ~ instructors:", instructors)

  return (
    <section className="pb-[70px] pt-[120px] relative w-full">
      <div className="container">
        <div className="grid grid-cols-12 justify-center gap-[50px_30px]">
          {instructors &&
            instructors.map((instructor) => (
              <InstructorCard instructor={instructor} />
            ))}
        </div>
      </div>
    </section>
  );
};
