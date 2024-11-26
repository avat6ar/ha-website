"use client";
import { addNewBlogCategory } from "@/api/admin/blog-categories/blog-categories";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const AddCategory = ({
  onCategoryAdded,
}: {
  onCategoryAdded: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, reset, register } = useForm();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("name", data.name_category);
    formData.append("status", data.status);

    try {
      const data = await addNewBlogCategory(formData);
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
          message: "Add Blog Category Successfully",
        });
        onCategoryAdded();
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
    <>
      <button
        className="flex items-center justify-center py-[7px] px-[20px] rounded bg-[#03C0EA] transition-all duration-300 ease-out text-white font-medium"
        onClick={() => setVisible(true)}
      >
        Add Blog Category
      </button>
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Add New Blog Category
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[10px]"
          >
            <div className="relative">
              <FormGroup
                title="Name Blog Category"
                type="text"
                id="name_category"
                register={register}
                error={errors?.name}
                placeholder="Name"
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
                <label
                  htmlFor="activate"
                  className="peer-checked/draft:text-sky-500"
                >
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
              {errors?.status && (
                <p className="mt-2 text-pink-600 text-base">{errors?.status}</p>
              )}
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
            <div className="flex mt-[15px]">
              <button
                className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                type="submit"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Loading...</span>
                    <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
                  </div>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
        </div>
      </Model>
    </>
  );
};
