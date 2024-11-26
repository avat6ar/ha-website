import { FaStar, FaStarHalf } from "react-icons/fa";
import { ProgressBar } from "./ProgressBar";
import { useState } from "react";
import { Review } from "./Review";
import type { ReviewsResponse, CourseDetails } from "@/types";
import { addReview } from "@/api/Courses";
import { getAuthData } from "@/lib/features/auth/session";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const Reviews = ({ course }: { course: CourseDetails }) => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, reset, register } = useForm();
  const [reviews, setReviews] = useState<ReviewsResponse[]>(course.reviews);
  const ratingCounts = course.rating_counts;
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [loading, setLoading] = useState(false);

  const { totalPoints, totalCount } = Object.entries(ratingCounts).reduce(
    (acc, [stars, count]) => {
      acc.totalPoints += parseInt(stars) * count;
      acc.totalCount += count;
      return acc;
    },
    { totalPoints: 0, totalCount: 0 }
  );

  const stars: number = Number((totalPoints / totalCount || 0).toFixed(1));

  const fullStars = Math.floor(stars);
  const decimalPart = stars % 1;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<FaStar className="text-[18px]" key={i} />);
  }

  if (decimalPart >= 0.25 && decimalPart <= 0.5) {
    starElements.push(<FaStarHalf className="text-[18px]" key="half" />);
  } else if (decimalPart > 0.5) {
    starElements.push(<FaStar className="text-[18px]" key="nextFull" />);
  }

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const token = getAuthData()?.token;

    if (!token) {
      return router.push("/auth/login");
    }

    const formData = new FormData();
    formData.append("review", data.review);
    formData.append("rate", selectedRating.toString());
    formData.append("link", course.link);

    try {
      const data = await addReview(formData);

      if (data.error) {
        setErrors(data.error);
        data.error.message &&
          setMessage({
            type: "error",
            message: data.error.message,
          });
      } else {
        setReviews(prev => (prev ? [...prev, data.data] : [data.data]));
        setSelectedRating(0);
        reset();
      }
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="block w-full">
      <h4 className="text-[22px] mb-[25px] font-heading text-[#082A5E] font-medium leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
        Student Ratings & Reviews
      </h4>
      <div className="bg-[#F6F7FA] border border-[#DAE0E7] rounded-[8px] flex md:flex-row flex-col items-center p-[30px] gap-[26px]">
        <div className="bg-white border border-[#E6EAEF] shadow-[0px_0px_20px_rgba(0,0,0,0.09)] w-[180px] rounded-[8px] text-center flex-col justify-center py-[33px] px-[20px] gap-[3px]">
          <div className="text-[#082A5E] font-semibold text-[64px] leading-[0.8]">
            {stars}
          </div>
          <div className="flex text-[15px] items-center justify-center gap-[5px] my-[10px]">
            {starElements}
          </div>
          <div className="text-[#5A7093]">Total {totalCount} Rating</div>
        </div>
        <div className="grow md:w-auto w-full">
          {Object.entries(ratingCounts).map(([stars, count], index) => (
            <ProgressBar
              key={index}
              stars={stars}
              count={count}
              totalCount={Object.values(ratingCounts).reduce(
                (acc, count) => acc + count,
                0
              )}
            />
          ))}
        </div>
      </div>
      <div className="mt-[35px]">
        <h4 className="text-[22px] mb-[25px] font-heading text-[#082A5E] font-medium leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
          Reviews ({reviews && reviews.length.toString().padStart(2, "0")})
        </h4>
        <ul className="block w-full">
          {reviews &&
            reviews.map(review => (
              <Review
                rate={review.rate}
                name={review.user_name}
                profile={review.profile}
                text={review.review}
                date={review.created_at}
                key={review.created_at}
              />
            ))}
        </ul>
      </div>
      <div className="mt-[50px]">
        <h4 className="text-[22px] mb-[25px] font-heading text-[#082A5E] font-medium leading-[1.2] after:block after:w-full after:h-px after:bg-[#DBE1E8] after:mt-[15px]">
          Write a review
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center leading-[1] mb-[20px]">
            <span className="mr-[7px] text-[18px]">Select Rating:</span>
            {[1, 2, 3, 4, 5].map(star => (
              <FaStar
                key={star}
                className={`text-${
                  selectedRating >= star ? "[#F8BC24]" : "[#082A5E]"
                } text-[16px] mx-[2px] cursor-pointer`}
                onClick={() => handleRatingSelect(star)}
              />
            ))}
          </div>
          <textarea
            {...register("review")}
            id="review"
            className="min-h-[185px] block w-full bg-[#F0F6FC] border border-[#CDDBE9] rounded-[4px] py-[10px] px-[20px] text-[#39557E] appearance-none font-normal placeholder:text-[#39557E]"
            placeholder="Type Comments"
          ></textarea>
          {errors?.review && (
            <p className="mt-2 text-pink-600 text-base">{errors?.review}</p>
          )}
          {message && (
            <p
              className={`mt-2 text-base ${
                message.type == "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.message}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-[20px] pt-[19px] pb-[16px] px-[24px] text-white font-semibold bg-[#1363DF] uppercase inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
          >
            {loading ? "Loading..." : "Submit your Review"}
          </button>
        </form>
      </div>
    </div>
  );
};
