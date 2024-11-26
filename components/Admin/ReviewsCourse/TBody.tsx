"use client";
import { deleteReview } from "@/api/admin/reviews-course/reviews";
import { ReviewCourse } from "@/types/admin";
import { useState } from "react";
export const TBody = ({
  reviews,
  handleData,
}: {
  reviews: ReviewCourse[];
  handleData: () => void;
}) => {
  const [loadingDelete, setLoadingDelete] = useState<number>();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onDelete = async (id: number) => {
    setLoadingDelete(id);

    try {
      await deleteReview(id);
      handleData();
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoadingDelete(undefined);
    }
  };

  return (
    <>
      <tbody className="bg-white divide-y-0 divide-opacity-100">
        {reviews &&
          reviews.map((review, index) => (
            <tr key={index}>
              {[review.review, review.course_name, review.rate].map(
                (item, i) => (
                  <td
                    key={i}
                    className={`${i === 0 ? "pl-6" : "px-3"} ${
                      i === 5 ? "pr-6" : "pl-3"
                    } py-3 text-left text-base font-medium font-body ${
                      i === 0
                        ? "text-[rgb(17_24_39)]"
                        : "text-[rgb(107_114_128)]"
                    }`}
                  >
                    {item}
                  </td>
                )
              )}
              <td className="px-3 py-3 text-left text-base font-medium font-body text-[rgb(107_114_128)]">
                <button
                  type="button"
                  onClick={() => onDelete(review.id)}
                  disabled={loadingDelete == review.id}
                  className="rounded-lg bg-[#FF2020] text-[#FF2020] bg-opacity-20 text-center py-[6px] px-[28px]"
                >
                  {loadingDelete == review.id ? "loading..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};
