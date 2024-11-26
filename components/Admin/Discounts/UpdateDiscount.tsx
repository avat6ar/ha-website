"use client";
import { Discount, Options } from "@/types/admin";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { Select } from "../Select";
import {
  deleteDiscount,
  updateDiscount,
} from "@/api/admin/discounts/discounts";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const UpdateDiscount = ({
  discount,
  handleData,
}: {
  discount?: Discount;
  handleData: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: coursesSelector, isLoading } = getCoursesSelector();
  const [courseId, setCourseId] = useState<string | number>();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    if (discount) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [discount]);

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
  }, [visible]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("course_id", courseId?.toString() ?? "");
    formData.append("type", data.type.toString());
    formData.append("value", data.value);

    try {
      const data = await updateDiscount(formData, discount?.id);
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
          message: "Updated Discount Successfully",
        });
        handleData();
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

  const handleDeleteClick = async (id: number) => {
    setLoadingDelete(true);

    try {
      await deleteDiscount(id);
      setVisible(false);
      reset();
      handleData();
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <>
      {discount && (
        <Model visible={visible} setVisible={setVisible}>
          <div className="md:w-[500px] w-[300px]">
            <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]"></h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[10px]"
            >
              <div className="flex gap-[15px] flex-col">
                <FormGroup
                  title="Discount value"
                  type="text"
                  id="value"
                  error={errors?.value}
                  register={register}
                  placeholder="Enter Discount value"
                  defaultValue={discount.value}
                />
                <Select
                  options={coursesSelector}
                  setValue={setCourseId}
                  title="Select Course"
                  id="course_id"
                  name="course_id"
                  placeholder="Select Course"
                  error={errors?.course_id}
                  defaultValue={discount.course_id}
                  isLoading={isLoading}
                />
                <div className="flex gap-[10px]">
                  <input
                    id="type-value"
                    className="peer/draft"
                    type="radio"
                    {...register("type")}
                    defaultChecked={discount.type == "value"}
                    value="value"
                  />
                  <label
                    htmlFor="type-value"
                    className="peer-checked/draft:text-sky-500"
                  >
                    Value
                  </label>
                  <input
                    id="type-percent"
                    className="peer/published"
                    type="radio"
                    {...register("type")}
                    value="percent"
                    defaultChecked={discount.type == "percent"}
                  />
                  <label
                    htmlFor="type-percent"
                    className="peer-checked/published:text-sky-500"
                  >
                    Percent
                  </label>
                </div>
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
              <div className="flex justify-between mt-[15px]">
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
                    "Update"
                  )}
                </button>
                <button
                  className="py-[12px] px-[21px] text-white font-medium bg-[#FF2020] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#7e2b2b] transition-all duration-300 ease-out"
                  type="button"
                  onClick={() => handleDeleteClick(discount.id)}
                >
                  {loadingDelete ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Loading...</span>
                      <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
                    </div>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </form>
          </div>
        </Model>
      )}
    </>
  );
};
