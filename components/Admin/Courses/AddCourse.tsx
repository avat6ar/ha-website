"use client";
import { getCategoriesSelector } from "@/api/admin/categories/categories";
import { FormGroup } from "@/components/FormGroup";
import { Select } from "@/components/Admin/Select";
import { useState } from "react";
import { AddList } from "../AddList";
import { Difficulty } from "./Difficulty";
import { addCourse } from "@/api/admin/courses/courses";
import { getInstructorsSelector } from "@/api/admin/Instructors/instructor";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const AddCourse = () => {
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [categoryId, setCategoryId] = useState<string | number | undefined>();
  const [instructorId, setInstructorId] = useState<
    string | number | undefined
  >();
  const { data: categoriesSelector, isLoading: isLoadingCategories } =
    getCategoriesSelector();
  const { data: instructorsSelector, isLoading: isLoadingInstructor } =
    getInstructorsSelector();
  const [goals, setGoals] = useState<string[]>();
  const [requirements, setRequirements] = useState<string[]>();
  const [difficulty, setDifficulty] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [type, setType] = useState("offline_course");

  const onSubmit: SubmitHandler<FieldValues> = async course => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("cover", course.course_cover[0]);
    formData.append("name", course.course_name);
    formData.append("text", course.course_text);
    formData.append("short_text", course.course_short_text);
    formData.append("category_id", categoryId?.toString() ?? "");
    formData.append("instructor_id", instructorId?.toString() ?? "");
    formData.append("duration", course.course_duration);
    formData.append("n_seats", course.course_n_seats);
    formData.append("difficulty", difficulty ?? "");
    formData.append("link", course.course_link);
    formData.append("status", course.course_status);
    formData.append("price", course.course_price);
    formData.append("type", type);

    goals?.forEach(goal => {
      formData.append("goals[]", goal);
    });
    requirements?.forEach(requirement => {
      formData.append("requirements[]", requirement);
    });

    try {
      const data = await addCourse(formData);

      if (data.error) {
        setErrors(data.error);
        data.error.message &&
          setMessage({
            type: "error",
            message: data.error.message,
          });
      } else {
        setMessage({
          type: "success",
          message: "Add Course Successfully",
        });
        reset();
        setGoals(undefined);
        setRequirements(undefined);
      }
    } catch (e) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col gap-[8px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormGroup
          type="file"
          id="course_cover"
          placeholder="Enter Cover Course.."
          title="Cover Course"
          error={errors?.course_cover}
          register={register}
        />
        <div className="grid md:grid-cols-2 gap-[8px_35px]">
          <FormGroup
            type="text"
            id="course_name"
            placeholder="Enter Name Course.."
            title="Name Course"
            error={errors?.name}
            register={register}
          />
          <FormGroup
            type="text"
            id="course_price"
            placeholder="Enter Price Course..."
            title="Price of course"
            error={errors?.price}
            register={register}
          />
          <Select
            title="Select Type"
            id="type_course"
            name="type_course"
            setValue={setType}
            options={[
              { name: "offline", id: "offline_course" },
              { name: "online", id: "online_course" },
            ]}
            placeholder="Select Type Course..."
            error={errors?.type_course}
          />
          <Select
            title="Select Category"
            id="select_category"
            name="select_category"
            setValue={setCategoryId}
            options={categoriesSelector}
            placeholder="Select Category Course..."
            error={errors?.category_id}
            isLoading={isLoadingCategories}
          />
          <Select
            title="Select Instructor"
            id="select_instructor"
            name="select_instructor"
            setValue={setInstructorId}
            options={instructorsSelector}
            placeholder="Select Instructor Course..."
            error={errors?.instructor_id}
            isLoading={isLoadingInstructor}
          />
          <Difficulty
            setValue={setDifficulty}
            value={difficulty}
            error={errors?.difficulty}
          />
          <FormGroup
            type="text"
            id="course_n_seats"
            placeholder="Enter Seats Course..."
            title="Number of seats"
            error={errors?.n_seats}
            register={register}
          />
          <AddList
            value={goals}
            setValue={setGoals}
            title="Goals List"
            placeholder="Enter Goal Course..."
            error={errors?.goals}
          />
          <AddList
            value={requirements}
            setValue={setRequirements}
            title="Requirements List"
            placeholder="Enter Requirement Course..."
            error={errors?.requirements}
          />
          <FormGroup
            type="text"
            id="course_duration"
            placeholder="Enter Duration Course..."
            title="Duration of the course"
            error={errors?.duration}
            register={register}
          />
          <FormGroup
            type="text"
            id="course_link"
            placeholder="Enter Link Course..."
            title="Link to the course"
            error={errors?.link}
            register={register}
          />
        </div>
        <FormGroup
          type="textarea"
          id="course_text"
          placeholder="Enter Text Course..."
          title="Text Course"
          error={errors?.text}
          register={register}
        />
        <FormGroup
          type="textarea"
          id="course_short_text"
          placeholder="Enter Short Text Course..."
          title="Short Text"
          error={errors?.short_text}
          register={register}
        />
        <div className="flex gap-[10px] mt-[15px]">
          <input
            id="activate"
            className="peer/draft"
            type="radio"
            defaultChecked
            value="1"
            {...register("course_status")}
          />
          <label htmlFor="activate" className="peer-checked/draft:text-sky-500">
            Activate
          </label>
          <input
            id="deactivate"
            className="peer/published"
            type="radio"
            value="0"
            {...register("course_status")}
          />
          <label
            htmlFor="deactivate"
            className="peer-checked/published:text-sky-500"
          >
            Deactivate
          </label>
        </div>
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
          className="block mt-3 bg-[#1363DF] text-white px-[12px] py-[15px] rounded-md text-[18px] font-medium hover:bg-[#082A5E] transition-all duration-300 ease-out disabled:bg-[#082A5E]"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">Loading...</span>
              <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
            </div>
          ) : (
            "Add Course!"
          )}
        </button>
      </form>
    </div>
  );
};
