"use client";
import { FormGroup } from "@/components/FormGroup";
import { Select } from "@/components/Admin/Select";
import { useState } from "react";
import { AddList } from "../AddList";
import { addBlog } from "@/api/admin/blog/blog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getBlogCategoriesSelector } from "@/api/admin/blog-categories/blog-categories";
import { getAuthData } from "@/lib/features/auth/session";
import axios from "@/lib/axios";

export const AddBlog = () => {
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, reset, register } = useForm();
  const [categoryId, setCategoryId] = useState<string | number | undefined>();
  const { data: categoriesSelector, isLoading: isLoadingCategories } =
    getBlogCategoriesSelector();
  const [goals, setGoals] = useState<string[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async blog => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("cover", blog.blog_cover[0]);
    formData.append("title", blog.blog_title);
    formData.append("text", blog.blog_text);
    formData.append("category_id", categoryId?.toString() ?? "");
    formData.append("link", blog.link);
    formData.append("status", blog.status);
    goals?.forEach(goal => {
      formData.append("goals[]", goal);
    });
    const token = getAuthData()?.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.post("/admin/blogs", formData, config);

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
          message: "Add Blog Successfully",
        });
        setErrors({});
        reset();
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
          register={register}
          id="blog_cover"
          placeholder="Enter Cover Blog.."
          title="Cover Blog"
          error={errors?.cover}
        />
        <div className="grid md:grid-cols-2 gap-[8px_35px]">
          <FormGroup
            type="text"
            register={register}
            id="blog_title"
            placeholder="Enter Name Blog.."
            title="Name Blog"
            error={errors?.title}
          />
          <Select
            title="Select Category"
            id="select_category"
            name="select_category"
            setValue={setCategoryId}
            options={categoriesSelector}
            placeholder="Select Category Blog..."
            error={errors?.category_id}
            isLoading={isLoadingCategories}
          />
          <FormGroup
            type="text"
            register={register}
            id="link"
            placeholder="Enter Link Blog..."
            title="Link to the blog"
            error={errors?.link}
          />
          <AddList
            value={goals}
            setValue={setGoals}
            title="Gols List"
            placeholder="Enter Gol Blog..."
            error={errors?.gols}
          />
        </div>
        <FormGroup
          type="textarea"
          register={register}
          id="blog_text"
          placeholder="Enter Text Blog..."
          title="Text Blog"
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
            "Add Blog!"
          )}
        </button>
      </form>
    </div>
  );
};
