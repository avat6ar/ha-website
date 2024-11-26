"use client";
import { getNumber, updateNumberSetting } from "@/api/admin/home";
import { NumberItem } from "./NumberItem";
import { useEffect, useState } from "react";
import { Model } from "@/components/Model";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormGroup } from "@/components/FormGroup";

export const Number = () => {
  const { data: numbers, isLoading, mutate } = getNumber();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("n_tutorials", data.n_tutorials);
    formData.append("n_students", data.n_students);
    formData.append("n_videos", data.n_videos);
    formData.append("n_lessons", data.n_lessons);
    try {
      const data = await updateNumberSetting(formData);
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
          message: "Updated Numbers Successfully",
        });
        setErrors({});
        reset();
        mutate();
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
      <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px]">
        {isLoading &&
          [...Array(4).keys()].map((i, index) => (
            <li
              className="col-span-1 bg-white animate-pulse flex justify-between rounded-lg"
              key={index}
              style={{
                animationDelay: `${index * 1}s`,
                animationDirection: "1s",
              }}
            >
              <span className="bg-slate-200 w-1/3 h-3 rounded"></span>
              <span className="bg-slate-200 w-1/5 h-3 rounded"></span>
            </li>
          ))}
        {numbers && (
          <>
            <NumberItem
              label="Tutorials"
              value={numbers?.tutorials}
              setVisible={setVisible}
            />
            <NumberItem
              label="Lessons"
              value={numbers?.lessons}
              setVisible={setVisible}
            />
            <NumberItem
              label="Students"
              value={numbers?.students}
              setVisible={setVisible}
            />
            <NumberItem
              label="Videos"
              value={numbers?.videos}
              setVisible={setVisible}
            />
          </>
        )}
      </ul>
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Update Number
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[10px]"
          >
            <div className="flex gap-[15px] flex-col">
              <FormGroup
                title="Tutorials"
                type="text"
                id="n_tutorials"
                error={errors?.n_tutorials}
                register={register}
                placeholder="Enter Tutorials"
                defaultValue={numbers?.tutorials}
              />
              <FormGroup
                title="Lessons"
                type="text"
                id="n_lessons"
                error={errors?.n_tutorials}
                register={register}
                placeholder="Enter Lessons"
                defaultValue={numbers?.lessons}
              />
              <FormGroup
                title="Students"
                type="text"
                id="n_students"
                error={errors?.n_students}
                register={register}
                placeholder="Enter Students"
                defaultValue={numbers?.students}
              />
              <FormGroup
                title="Videos"
                type="text"
                id="n_videos"
                error={errors?.n_videos}
                register={register}
                placeholder="Enter Videos"
                defaultValue={numbers?.videos}
              />
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
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </Model>
    </>
  );
};
