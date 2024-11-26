"use client";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { Select } from "../Select";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { addNewDiscount } from "@/api/admin/discounts/discounts";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const AddDiscount = ({
  onDiscountAdded,
}: {
  onDiscountAdded: () => void;
}) => {
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: coursesSelector, isLoading } = getCoursesSelector();
  const [courseId, setCourseId] = useState<string | number | undefined>();
  const [message, setMessage] = useState<Record<string, string> | null>();
  
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
      const data = await addNewDiscount(formData);
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
          message: "Add Discount Successfully",
        });
        onDiscountAdded();
        setErrors({});
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
        Add Discount Course
      </button>
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Add Discount
          </h3>
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
              />
              <Select
                options={coursesSelector}
                setValue={setCourseId}
                title="Select Course"
                id="course_id"
                name="course_id"
                placeholder="Select Course"
                error={errors?.course_id}
                isLoading={isLoading}
              />
              <div className="flex gap-[10px]">
                <input
                  id="value"
                  className="peer/draft"
                  type="radio"
                  {...register("type")}
                  defaultChecked
                  value="value"
                />
                <label
                  htmlFor="value"
                  className="peer-checked/draft:text-sky-500"
                >
                  Value
                </label>

                <input
                  id="percent"
                  className="peer/published"
                  type="radio"
                  {...register("type")}
                  value="percent"
                />
                <label
                  htmlFor="percent"
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
            <div className="flex mt-[15px]">
              <button
                className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                type="submit"
                disabled={loading}
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
