"use client";
import { useEffect, useState } from "react";
import { Courses } from "../Courses";
import {
  deleteCategory,
  geCategoryDetails,
  updateCategory,
} from "@/api/admin/categories/categories";
import { useParams, useRouter } from "next/navigation";
import { Model } from "@/components/Model";
import { FormGroup } from "@/components/FormGroup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const Details = () => {
  const params = useParams();
  const id = params.id;

  const { data: category, isLoading } = geCategoryDetails(id);
  const [nameCategory, setNameCategory] = useState<string>();
  const [statusCategory, setStatusCategory] = useState<number>();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const router = useRouter();
  const { handleSubmit, reset, register } = useForm();
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    if (category) {
      setNameCategory(category.name);
      setStatusCategory(category.status);
    }
  }, [category]);

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
  }, [visible]);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!category) {
    return <p className="text-base">category not be found</p>;
  }

  const handleDeleteClick = async () => {
    setLoadingDelete(true);
    try {
      await deleteCategory(category.id);
      router.replace("/admin/categories");
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (categoryData) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("name", categoryData.name_category);
    formData.append("status", categoryData.status);

    try {
      const data = await updateCategory(formData, category.id);
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
          message: "Updated Category Successfully",
        });
        setNameCategory(categoryData.name_category);
        setStatusCategory(categoryData.status);
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
    <div className="relative">
      <div className="bg-white border border-[#ECECEC] shadow-[0px_0px_15px] shadow-[rgba(0,0,0,0.08)] rounded-[8px] md:py-[25px] xl:px-[25px] lg:px-[20px] md:px-[25px] py-[20px] px-[20px]">
        <div className="border-b border-[#CFD9E4] mb-[15px] pb-[10px]">
          <div className="w-full flex justify-between flex-wrap gap-[8px] items-end">
            <div className="block">
              <h2 className="md:text-[24px] text-lg mb-[5px] font-heading text-[#082A5E] leading-[1.2] font-semibold">
                {nameCategory}
              </h2>
              <span className="block font-meduim font-heading text-[16px] text-gray-600 mt-[8px]">
                Courses:{" "}
                <span className="text-[#1363DF]">{category.n_courses}</span>
              </span>
            </div>
            <div className="flex gap-[12px]">
              <button
                type="button"
                className="rounded-lg bg-[#1363DF] bg-opacity-20 text-[#1363DF] text-center py-[5px] px-[25px] relative"
                onClick={() => setVisible(true)}
              >
                Update
              </button>
              <Model visible={visible} setVisible={setVisible}>
                <div className="md:w-[500px] w-[300px]">
                  <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
                    Update Category
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[10px]"
                  >
                    <div className="relative">
                      <FormGroup
                        title="Name Category"
                        type="text"
                        id="name_category"
                        register={register}
                        error={errors?.name}
                        placeholder="Enter name category"
                        defaultValue={nameCategory}
                      />
                      <div className="flex gap-[10px] mt-[15px]">
                        <input
                          id="activate"
                          className="peer/draft"
                          type="radio"
                          {...register("status")}
                          defaultChecked={statusCategory === 1}
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
                          defaultChecked={statusCategory === 0}
                        />
                        <label
                          htmlFor="deactivate"
                          className="peer-checked/published:text-sky-500"
                        >
                          Deactivate
                        </label>
                      </div>
                    </div>
                    {message && (
                      <p
                        className={`mt-2 text-base ${
                          message.type == "error"
                            ? "text-red-600"
                            : "text-green-600"
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
              <button
                type="button"
                onClick={handleDeleteClick}
                className="rounded-lg bg-[#FF2020] text-white text-center py-[5px] px-[25px] relative"
                disabled={loadingDelete}
              >
                {loadingDelete ? "Loading..." : "Delete"}
              </button>
            </div>
          </div>
          <p className="mt-2 text-pink-600 text-base text-center">
            Warning: Deleting this category will also delete associated courses.
          </p>
        </div>
        <Courses courses={category.courses} />
      </div>
    </div>
  );
};
