"use client";
import { getQuestions } from "@/api/Courses";
import { notFound, useParams } from "next/navigation";
import { Loading } from "../Loading";
import axios from "@/lib/axios";

export const Question = () => {
  const { id } = useParams();

  const { data: questions, isLoading, isError } = getQuestions(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return notFound();
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData = new FormData(e.target as HTMLFormElement);
    const ids = [...formData.values()];

    try {
      const { data } = await axios.post("/store_user_answer", { ids: ids });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-[120px]">
      <div className="container">
        <form action="#" onSubmit={onSubmit}>
          {questions &&
            questions.map(question => (
              <>
                <h2 className="md:text-[22px] text-[29px] leading-[1.32] font-heading text-[#082A5E] font-semibold">
                  {question.question}
                </h2>
                <ul className="flex flex-col mt-3" key={question.id}>
                  {question.answer.map(answer => (
                    <li
                      className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
                      key={answer.id}
                    >
                      <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                          <input
                            id={answer.id.toString()}
                            name={question.id.toString()}
                            type="radio"
                            className="border-gray-200 rounded-full disabled:opacity-50"
                            value={answer.id}
                          />
                        </div>
                        <label
                          htmlFor={answer.id.toString()}
                          className="ms-3 block w-full text-sm text-gray-600"
                        >
                          {answer.answer}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          <button
            type="submit"
            className="pt-[19px] pb-[16px] px-[24px] text-[15px] mt-6 text-white font-semibold border border-[#D0DAE9] bg-[#1363DF] uppercase tracking-[0.5px] leading-[1] flex items-center gap-[10px] text-center rounded-[4px] font-body hover:text-white hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
