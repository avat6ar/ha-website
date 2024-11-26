"use client";
import { useState } from "react";
import main from "@/app/main.module.css";
import Image from "next/image";
import { Collapse } from "react-collapse";
import type { Chapter } from "@/types";

export const Accordion = ({ chapters }: { chapters: Chapter[] }) => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="block relative">
      {chapters &&
        chapters.map((chapter, index) => (
          <div
            className="mb-[15px] border border-[#DCE1E8] rounded-[4px] overflow-hidden"
            key={index}
          >
            <h2 className="text-[35px] font-heading text-[#082A5E] font-semibold leading-[1.2]">
              <button
                type="button"
                className={`flex text-[17px] p-[1.25rem_1.5rem] font-normal relative justify-between items-center w-full transition-all duration-150 ease-in-out after:w-[1.25rem] after:h-[1.25rem] after:bg-no-repeat after:[background-size:1.25rem] after:transition-transform after:duration-200 after:ease-in-out ${
                  main.accordionButton
                } ${
                  open == chapter.name
                    ? "bg-[#E7EFFC] text-[#1363DF] after:rotate-180"
                    : "bg-white text-[#082A5E] after:rotate-0"
                }`}
                onClick={() =>
                  setOpen(prevOpen =>
                    prevOpen == chapter.name ? null : chapter.name
                  )
                }
              >
                {chapter.name}
              </button>
            </h2>
            <Collapse isOpened={open == chapter.name}>
              <ul className="block">
                {chapter.lessons.map(lesson => (
                  <li
                    className="py-[17px] px-[26px] border-b border-[#DCE1E8] last:border-0"
                    key={lesson.name}
                  >
                    <a
                      href="#"
                      className="flex items-center justify-between text-[#39557E]"
                    >
                      <span
                        className={`flex items-center gap-[10px] ${main.play} before:block before:w-[26px] before:h-[26px]`}
                      >
                        {lesson.name}
                      </span>
                      <div className="flex items-center leading-[1] gap-[20px]">
                        <span>
                          <Image
                            src="/images/lock.svg"
                            width={15}
                            height={18}
                            alt="lock"
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
        ))}
    </div>
  );
};
