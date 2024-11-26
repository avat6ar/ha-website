"use client";
import { getCategoriesSelector } from "@/api/admin/categories/categories";
import { FormGroup } from "@/components/FormGroup";
import { Select } from "@/components/Admin/Select";
import { useEffect, useState } from "react";
import { AddList } from "../AddList";
import { Difficulty } from "./Difficulty";
import {
  deleteCourse,
  getCourseDetails,
  updateCourse,
} from "@/api/admin/courses/courses";
import { getInstructorsSelector } from "@/api/admin/Instructors/instructor";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const UpdateCourse = () => {
  const params = useParams();
  const id = params.id;

  const { data: course, isLoading } = getCourseDetails(id);

  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [categoryId, setCategoryId] = useState<string | number | undefined>();
  const [instructorId, setInstructorId] = useState<
    string | number | undefined
  >();
  const { data: categoriesSelector } = getCategoriesSelector();
  const { data: instructorsSelector } = getInstructorsSelector();
  const [goals, setGoals] = useState<string[]>();
  const [requirements, setRequirements] = useState<string[]>();
  const [difficulty, setDifficulty] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [type, setType] = useState(course?.type);
  useEffect(() => {
    if (course) {
      setRequirements(course.requirements);
      setGoals(course.goals);
      setDifficulty(course.difficulty);
      setInstructorId(course.instructor.id);
      setCategoryId(course.category_id);
    }
  }, [course]);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!course) {
    return <p className="text-base">course not be found</p>;
  }

  const onSubmit: SubmitHandler<FieldValues> = async courseUpdated => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    courseUpdated.cover[0] && formData.append("cover", courseUpdated.cover[0]);
    formData.append("name", courseUpdated.name);
    formData.append("text", courseUpdated.text);
    formData.append("short_text", courseUpdated.short_text);
    formData.append("category_id", categoryId?.toString() ?? "");
    formData.append("instructor_id", instructorId?.toString() ?? "");
    formData.append("duration", courseUpdated.duration);
    formData.append("n_seats", courseUpdated.n_seats);
    formData.append("difficulty", difficulty ?? "");
    formData.append("link", courseUpdated.link);
    formData.append("status", courseUpdated.status);
    formData.append("price", courseUpdated.price);
    formData.append("type", type ?? "offline_course");
    goals?.forEach(goal => {
      formData.append("goals[]", goal);
    });
    requirements?.forEach(requirement => {
      formData.append("requirements[]", requirement);
    });

    try {
      const data = await updateCourse(formData, course.id);

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
          message: "Updated Course Successfully",
        });
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

  const onDelete = async () => {
    setLoadingDelete(true);

    try {
      await deleteCourse(course.id);
      router.replace("/admin/courses");
    } catch (err) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoadingDelete(false);
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
          id="cover"
          placeholder="Enter Cover Course.."
          title="Cover Course"
          error={errors?.cover}
          register={register}
        />
        <div className="grid md:grid-cols-2 gap-[8px_35px]">
          <FormGroup
            type="text"
            id="name"
            placeholder="Enter Name Course.."
            title="Name Course"
            error={errors?.name}
            register={register}
            defaultValue={course.name}
          />
          <FormGroup
            type="text"
            id="price"
            placeholder="Enter Price Course..."
            title="Price of course"
            error={errors?.price}
            register={register}
            defaultValue={course.price}
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
            defaultValue={course?.type}
          />
          <Select
            title="Select Category"
            id="category"
            name="category"
            setValue={setCategoryId}
            options={categoriesSelector}
            placeholder="Select Category Course..."
            error={errors?.category_id}
            defaultValue={categoryId}
          />
          <Select
            title="Select Instructor"
            id="instructor"
            name="instructor"
            setValue={setInstructorId}
            options={instructorsSelector}
            placeholder="Select Instructor Course..."
            error={errors?.instructor_id}
            defaultValue={course?.instructor.id}
          />
          <Difficulty
            setValue={setDifficulty}
            value={difficulty}
            error={errors?.difficulty}
          />
          <FormGroup
            type="text"
            id="n_seats"
            placeholder="Enter Seats Course..."
            title="Number of seats"
            error={errors?.n_seats}
            register={register}
            defaultValue={course.n_seats}
          />
          <AddList
            value={goals}
            setValue={setGoals}
            title="Gols List"
            placeholder="Enter Gol Course..."
            error={errors?.gols}
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
            id="duration"
            placeholder="Enter Duration Course..."
            title="Duration of the course"
            error={errors?.duration}
            register={register}
            defaultValue={course.duration}
          />
          <FormGroup
            type="text"
            id="link"
            placeholder="Enter Link Course..."
            title="Link to the course"
            error={errors?.link}
            register={register}
            defaultValue={course.link}
          />
        </div>
        <FormGroup
          type="textarea"
          id="text"
          placeholder="Enter Text Course..."
          title="Text Course"
          error={errors?.text}
          register={register}
          defaultValue={course.text}
        />
        <FormGroup
          type="textarea"
          id="short_text"
          placeholder="Enter Short Text Course..."
          title="Short Text"
          error={errors?.short_text}
          register={register}
          defaultValue={course.short_text}
        />
        <div className="flex gap-[10px] mt-[15px]">
          <input
            id="activate"
            type="radio"
            defaultChecked={course.status == 1}
            value="1"
            {...register("status")}
          />
          <label htmlFor="activate" className="text-sky-500">
            Activate
          </label>
          <input
            id="deactivate"
            type="radio"
            value="0"
            defaultChecked={course.status == 0}
            {...register("status")}
          />
          <label htmlFor="deactivate" className="text-sky-500">
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
            "Update!"
          )}
        </button>
        <button
          type="button"
          className="block mt-3 bg-[#FF2020] text-white px-[12px] py-[15px] rounded-md text-[18px] font-medium hover:bg-[#7e2b2b] transition-all duration-300 ease-out disabled:bg-[#7e2b2b]"
          disabled={loadingDelete}
          onClick={onDelete}
        >
          {loadingDelete ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">Loading...</span>
              <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
            </div>
          ) : (
            "Delete Course"
          )}
        </button>
      </form>
    </div>
  );
};
