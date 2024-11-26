"use client";
import { FormGroup } from "@/components/FormGroup";
import { Select } from "../Select";
import { useEffect, useState } from "react";
import { getCategoriesSelector } from "@/api/admin/categories/categories";
import {
  getInstructorDetails,
  updateInstructor,
} from "@/api/admin/Instructors/instructor";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useParams } from "next/navigation";

export const UpdateInstructor = () => {
  const params = useParams();
  const id = params.id;

  const { data: instructor, isLoading } = getInstructorDetails(id);
  const { handleSubmit, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [categoryId, setCategoryId] = useState<string | number>();
  const { data: categoriesSelector, isLoading: isLoadingCategories } =
    getCategoriesSelector();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    if (instructor) {
      setCategoryId(instructor.category_id);
    }
  }, [instructor]);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!instructor) {
    return <p className="text-base">instructor not be found</p>;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (updatedInstructor) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    updatedInstructor.instructor_cover[0] &&
      formData.append("cover", updatedInstructor.instructor_cover[0]);
    formData.append("name", updatedInstructor.instructor_name);
    formData.append("title", updatedInstructor.instructor_title);
    formData.append("text", updatedInstructor.instructor_text);
    formData.append("link", updatedInstructor.instructor_link);
    formData.append("experience", updatedInstructor.instructor_experience);
    formData.append("rate", updatedInstructor.instructor_rate);
    formData.append("n_students", updatedInstructor.n_students);
    formData.append("facebook", updatedInstructor.instructor_facebook);
    formData.append("email", updatedInstructor.instructor_email);
    formData.append("youtube", updatedInstructor.instructor_youtube);
    formData.append("instagram", updatedInstructor.instructor_instagram);
    formData.append("linkedin", updatedInstructor.instructor_linkedin);
    formData.append("category_id", categoryId?.toString() ?? "");
    formData.append("status", updatedInstructor.status);

    try {
      const data = await updateInstructor(formData, instructor.id);
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
          message: "Add Instructor Successfully",
        });
      }
    } catch (e) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ e:", e);
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
        <Image
          src={instructor.cover}
          width={180}
          height={180}
          alt="cover"
          className="max-w-full"
        />
        <FormGroup
          type="file"
          register={register}
          id="instructor_cover"
          placeholder="Enter Cover instructorUpdate.."
          title="Cover instructor"
          error={errors?.cover}
        />
        <div className="grid grid-cols-2 gap-[8px_35px]">
          <FormGroup
            type="text"
            register={register}
            id="instructor_name"
            placeholder="Enter Name instructorUpdate.."
            title="Name instructor"
            error={errors?.name}
            defaultValue={instructor.name}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_title"
            placeholder="Enter Title instructorUpdate.."
            title="Title instructor"
            error={errors?.title}
            defaultValue={instructor.title}
          />
          <Select
            title="Select Category"
            id="select_category"
            name="select_category"
            setValue={setCategoryId}
            options={categoriesSelector}
            placeholder="Select Category instructorUpdate..."
            error={errors?.category_id}
            isLoading={isLoadingCategories}
            defaultValue={instructor.category_id}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_link"
            placeholder="Enter Link instructorUpdate..."
            title="Link to the instructor"
            error={errors?.link}
            defaultValue={instructor.link}
          />
          <FormGroup
            type="text"
            register={register}
            id="n_students"
            placeholder="Enter Students instructorUpdate..."
            title="Students to the instructor"
            error={errors?.n_students}
            defaultValue={instructor.n_students}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_rate"
            placeholder="Enter Rate instructorUpdate..."
            title="Rate to the instructor"
            error={errors?.rate}
            defaultValue={instructor.rate}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_experience"
            placeholder="Enter Experience instructorUpdate..."
            title="Experience to the instructor"
            error={errors?.experience}
            defaultValue={instructor.experience}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_facebook"
            placeholder="Enter Link Facebook instructorUpdate..."
            title="Facebook to the instructor"
            error={errors?.facebook}
            defaultValue={instructor.facebook}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_youtube"
            placeholder="Enter Link youtube instructorUpdate..."
            title="Youtube to the instructor"
            error={errors?.youtube}
            defaultValue={instructor.youtube}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_instagram"
            placeholder="Enter Link instagram instructorUpdate..."
            title="Instagram to the instructor"
            error={errors?.instagram}
            defaultValue={instructor.instagram}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_linkedin"
            placeholder="Enter Link linkedin instructorUpdate..."
            title="Linkedin to the instructor"
            error={errors?.linkedin}
            defaultValue={instructor.linkedin}
          />
          <FormGroup
            type="text"
            register={register}
            id="instructor_email"
            placeholder="Enter email address instructorUpdate..."
            title="Email to the instructor"
            error={errors?.email}
            defaultValue={instructor.email}
          />
        </div>
        <FormGroup
          type="textarea"
          register={register}
          id="instructor_text"
          placeholder="Enter Text instructorUpdate..."
          title="Text instructor"
          error={errors?.text}
          defaultValue={instructor.text}
        />
        <div className="flex gap-[10px] mt-[15px]">
          <input
            id="activate"
            className="peer/draft"
            type="radio"
            {...register("status")}
            defaultChecked={instructor.status == 1}
            value="1"
          />
          <label htmlFor="activate" className="peer-checked/draft:text-sky-500">
            Activate
          </label>
          <input
            id="deactivate"
            className="peer/published"
            type="radio"
            {...register("status")}
            value="0"
            defaultChecked={instructor.status == 0}
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
            "Update Instructor"
          )}
        </button>
      </form>
    </div>
  );
};
