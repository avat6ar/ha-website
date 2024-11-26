"use client";
import { FormGroup } from "@/components/FormGroup";
import { Select } from "../Select";
import { useState } from "react";
import { getCategoriesSelector } from "@/api/admin/categories/categories";
import { addInstructor } from "@/api/admin/Instructors/instructor";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const AddInstructor = () => {
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [categoryId, setCategoryId] = useState<string | number | undefined>();
  const { data: categoriesSelector, isLoading: isLoadingCategories } =
    getCategoriesSelector();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (instructor) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("cover", instructor.cover[0]);
    formData.append("name", instructor.name);
    formData.append("title", instructor.title);
    formData.append("text", instructor.text);
    formData.append("link", instructor.link);
    formData.append("experience", instructor.experience);
    formData.append("rate", instructor.rate);
    formData.append("n_students", instructor.n_students);
    formData.append("facebook", instructor.facebook);
    formData.append("email", instructor.email);
    formData.append("youtube", instructor.youtube);
    formData.append("instagram", instructor.instagram);
    formData.append("linkedin", instructor.linkedin);
    formData.append("category_id", categoryId?.toString() ?? "");
    formData.append("status", instructor.status);

    try {
      const data = await addInstructor(formData);
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
        reset();
      }
    } catch (e) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ e:", e)
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
          register={register}
          id="cover"
          placeholder="Enter Cover instructor.."
          title="Cover instructor"
          error={errors?.cover}
        />
        <div className="grid grid-cols-2 gap-[8px_35px]">
          <FormGroup
            type="text"
            register={register}
            id="name"
            placeholder="Enter Name instructor.."
            title="Name instructor"
            error={errors?.name}
          />
          <FormGroup
            type="text"
            register={register}
            id="title"
            placeholder="Enter Title instructor.."
            title="Title instructor"
            error={errors?.title}
          />
          <Select
            title="Select Category"
            id="select_category"
            name="select_category"
            setValue={setCategoryId}
            options={categoriesSelector}
            placeholder="Select Category instructor..."
            error={errors?.category_id}
            isLoading={isLoadingCategories}
          />
          <FormGroup
            type="text"
            register={register}
            id="link"
            placeholder="Enter Link instructor..."
            title="Link to the instructor"
            error={errors?.link}
          />
          <FormGroup
            type="text"
            register={register}
            id="n_students"
            placeholder="Enter Students instructor..."
            title="Students to the instructor"
            error={errors?.n_students}
          />
          <FormGroup
            type="text"
            register={register}
            id="rate"
            placeholder="Enter Rate instructor..."
            title="Rate to the instructor"
            error={errors?.rate}
          />
          <FormGroup
            type="text"
            register={register}
            id="experience"
            placeholder="Enter Experience instructor..."
            title="Experience to the instructor"
            error={errors?.experience}
          />
          <FormGroup
            type="text"
            register={register}
            id="facebook"
            placeholder="Enter Link Facebook instructor..."
            title="Facebook to the instructor"
            error={errors?.facebook}
          />
          <FormGroup
            type="text"
            register={register}
            id="youtube"
            placeholder="Enter Link youtube instructor..."
            title="Youtube to the instructor"
            error={errors?.youtube}
          />
          <FormGroup
            type="text"
            register={register}
            id="instagram"
            placeholder="Enter Link instagram instructor..."
            title="Instagram to the instructor"
            error={errors?.instagram}
          />
          <FormGroup
            type="text"
            register={register}
            id="linkedin"
            placeholder="Enter Link linkedin instructor..."
            title="Linkedin to the instructor"
            error={errors?.linkedin}
          />
          <FormGroup
            type="text"
            register={register}
            id="email"
            placeholder="Enter email address instructor..."
            title="Email to the instructor"
            error={errors?.email}
          />
        </div>
        <FormGroup
          type="textarea"
          register={register}
          id="text"
          placeholder="Enter Text instructor..."
          title="Text instructor"
          error={errors?.text}
        />
        <div className="flex gap-[10px] mt-[15px]">
          <input
            id="activate"
            className="peer/draft"
            type="radio"
            {...register("status")}
            defaultChecked
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
            "Add Instructor"
          )}
        </button>
      </form>
    </div>
  );
};
