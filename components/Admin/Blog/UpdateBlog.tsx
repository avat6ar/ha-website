"use client";
import { FormGroup } from "@/components/FormGroup";
import { Select } from "@/components/Admin/Select";
import { useEffect, useState } from "react";
import { AddList } from "../AddList";
import { deleteBlog, getBlogDetails, updateBlog } from "@/api/admin/blog/blog";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getBlogCategoriesSelector } from "@/api/admin/blog-categories/blog-categories";

export const UpdateBlog = () => {
  const params = useParams();
  const id = params.id;

  const { data: blog, isLoading } = getBlogDetails(id);

  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, reset, register } = useForm();
  const [categoryId, setCategoryId] = useState<string | number>();
  const { data: categoriesSelector, isLoading: isLoadingCategories } =
    getBlogCategoriesSelector();
  const [goals, setGoals] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    if (blog) {
      setCategoryId(blog.category_id);
      setGoals(blog.goals);
    }
  }, [blog]);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-base">Blog not be found</p>;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (blogUpdate) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ blogUpdate.blog_link:",
      blogUpdate.blog_link
    );
    const formData = new FormData();
    blogUpdate.blog_cover[0] &&
      formData.append("cover", blogUpdate.blog_cover[0]);
    formData.append("title", blogUpdate.blog_title);
    formData.append("text", blogUpdate.blog_text);
    formData.append("category_id", categoryId?.toString() ?? "");
    formData.append("link", blogUpdate.blog_link);
    formData.append("status", blogUpdate.blog_status);
    goals?.forEach((goal) => {
      formData.append("goals[]", goal);
    });

    try {
      const data = await updateBlog(formData, blog.id);

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
          message: "Updated Blog Successfully",
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

  const onDelete = async () => {
    setLoadingDelete(true);

    try {
      const data = await deleteBlog(blog.id);
      console.log("🚀 ~ onDelete ~ data:", data);
      router.replace("/admin/blog");
    } catch (err) {
      console.log("🚀 ~ onDelete ~ err:", err);
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
        <Image
          src={blog.cover}
          width={180}
          height={180}
          alt="cover"
          className="max-w-full"
        />
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
            defaultValue={blog.title}
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
            defaultValue={blog.category_id}
          />
          <FormGroup
            type="text"
            register={register}
            id="blog_link"
            placeholder="Enter Link Blog..."
            title="Link to the blog"
            error={errors?.link}
            defaultValue={blog.link}
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
          defaultValue={blog.text}
        />
        <div className="flex gap-[10px] mt-[15px]">
          <input
            id="activate"
            className="peer/draft"
            type="radio"
            {...register("blog_status")}
            defaultChecked={blog.status === 1}
            value="1"
          />
          <label htmlFor="activate" className="peer-checked/draft:text-sky-500">
            Activate
          </label>
          <input
            id="deactivate"
            className="peer/published"
            type="radio"
            {...register("blog_status")}
            value="0"
            defaultChecked={blog.status === 0}
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
            "Update Blog"
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
            "Delete Blog"
          )}
        </button>
      </form>
    </div>
  );
};
