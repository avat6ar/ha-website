"use client";
import { Quizz } from "@/types/admin";

export const TBody = ({
  quizzs,
  handleQuizzView,
}: {
  quizzs: Quizz[];
  handleQuizzView: (id: number) => void;
}) => {
  return (
    <tbody className="bg-white divide-y-0 divide-opacity-100">
      {quizzs &&
        quizzs.map((quizz, index) => (
          <tr key={index}>
            {[
              quizz.title,
              quizz.course_name,
              quizz.type,
              quizz.final_grade,
              quizz.success_rate,
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
              <button
                type="button"
                onClick={() => handleQuizzView(quizz.id)}
                className="rounded-lg bg-[#1363DF] text-[#1363DF] bg-opacity-20 text-center py-[6px] px-[28px]"
              >
                View
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
