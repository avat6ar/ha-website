"use client";
import { Instructor } from "@/types/admin";
import Link from "next/link";

export const TBody = ({ instructors }: { instructors: Instructor[] }) => {
  return (
    <tbody className="bg-white divide-y-0 divide-opacity-100">
      {instructors &&
        instructors.map((instructor, index) => (
          <tr key={index}>
            {[
              instructor.name,
              instructor.category,
              instructor.experience + " Years",
              instructor.rate,
              instructor.n_courses,
              instructor.n_students,
            ].map((item, i) => (
              <td
                key={i}
                className={`${i === 0 ? "pl-6" : "px-3"} ${
                  i === 5 ? "pr-6" : "pl-3"
                } py-3 text-left text-base font-medium font-body ${
                  i === 0 ? "text-[rgb(17_24_39)]" : "text-[rgb(107_114_128)]"
                }`}
              >
                {item}
              </td>
            ))}
            <td className="px-3 py-3 text-left text-base font-medium font-body text-[rgb(107_114_128)]">
              <Link
                href={`/admin/instructors/${instructor.id}`}
                className="rounded-lg bg-[#1363DF] text-[#1363DF] bg-opacity-20 text-center py-[6px] px-[28px]"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
