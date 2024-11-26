"use client";
import { Lesson } from "@/types/admin";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { Select } from "../Select";
import { getChaptersSelector } from "@/api/admin/chapters/chapters";
import { deleteLesson, updateLesson } from "@/api/admin/lessons/lessons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const UpdateLesson = ({
  lesson,
  handleData,
}: {
  lesson?: Lesson;
  handleData: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    if (lesson) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [lesson]);

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
    formData.append("name", data.name);
    formData.append("status", data.status);
    formData.append("link", data.link);

    try {
      const data = await updateLesson(formData, lesson?.id);
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
          message: "Update Lesson Successfully",
        });
        handleData();
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

  const handleDeleteClick = async (id: number) => {
    setLoadingDelete(true);

    try {
      await deleteLesson(id);
      handleData();
      setVisible(false);
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
      {lesson && (
        <Model visible={visible} setVisible={setVisible}>
          <div className="md:w-[500px] w-[300px]">
            <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
              Update Lesson
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[10px]"
            >
              <div className="flex flex-col gap-[5px]">
                <FormGroup
                  title="Name Lesson"
                  placeholder="Enter Name Lesson"
                  id="name"
                  register={register}
                  type="text"
                  error={errors?.name}
                  defaultValue={lesson.name}
                />
                <FormGroup
                  title="Link video"
                  placeholder="Enter Link video"
                  id="link"
                  register={register}
                  type="text"
                  error={errors?.link}
                  defaultValue={lesson.link}
                />
                <div className="flex gap-[10px]">
                  <input
                    id="activate"
                    className="peer/draft"
                    type="radio"
                    {...register("status")}
                    defaultChecked={lesson.status === 1}
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
                    defaultChecked={lesson.status === 0}
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
                  className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                  type="button"
                  onClick={() => handleDeleteClick(lesson.id)}
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
