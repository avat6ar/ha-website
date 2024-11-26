"use client";
import { Question, Quizz } from "@/types/admin";

export const TBody = ({
  questions,
  handleQuestionView,
  handleAddAnswer,
}: {
  questions: Question[];
  handleQuestionView: (id: number) => void;
  handleAddAnswer: (id: number) => void;
}) => {

  return (
    <tbody className="bg-white divide-y-0 divide-opacity-100">
      {questions &&
        questions.map((question, index) => (
          <tr key={index}>
            {[
              question.question,
              question.quizz_title,
              question.answer[0]?.answer ?? "no answer",
              question.answer[1]?.answer ?? "no answer",
              question.answer[2]?.answer ?? "no answer",
              question.answer[3]?.answer ?? "no answer",
            ].map((item, i) => {
              const answer = question.answer.find(a => a.answer == item);
              return (
                <td
                  key={i}
                  className={`${i === 0 ? "pl-6" : "px-3"} ${
                    i === 5 ? "pr-6" : "pl-3"
                  } py-3 text-left text-base font-medium font-body ${
                    i === 0
                      ? "text-[rgb(17_24_39)]"
                      : answer?.is_correct == true
                      ? "text-[#1363DF]"
                      : "text-[rgb(107_114_128)]"
                  }`}
                >
                  {item}
                </td>
              );
            })}
            <td className="px-3 py-3 text-left text-base font-medium font-body text-[rgb(107_114_128)]">
              <button
                type="button"
                onClick={() => handleQuestionView(question.id)}
                className="rounded-lg bg-[#1363DF] text-[#1363DF] bg-opacity-20 text-center py-[6px] px-[28px]"
              >
                View
              </button>
            </td>
            <td className="px-3 py-3 text-left text-base font-medium font-body text-[rgb(107_114_128)]">
              <button
                type="button"
                onClick={() => handleAddAnswer(question.id)}
                className="rounded-lg bg-[#1363DF] text-[#1363DF] bg-opacity-20 text-center py-[6px] px-[28px]"
              >
                Add Answer
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
