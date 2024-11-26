"use client";
import { Options, File } from "@/types/admin";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { Select } from "../Select";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { getChaptersSelector } from "@/api/admin/chapters/chapters";
import { getQuizzSelector } from "@/api/admin/quizz/quizz";

export const AddFile = ({ handleData }: { handleData: () => void }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const { data: coursesSelector, isLoading: isLoadingCourses } =
    getCoursesSelector();
  const [courseId, setCourseId] = useState<string | number>();

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
  }, [visible]);

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();

    formData.append("course_id", courseId?.toString() ?? "");
    formData.append("file", data.file[0]);
    formData.append("name", data.name);

    try {
      const { data } = await axios.post("/admin/course_file", formData);
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
          message: "Added File Successfully",
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

  return (
    <>
      <button
        className="flex items-center justify-center py-[7px] px-[20px] rounded bg-[#03C0EA] transition-all duration-300 ease-out text-white font-medium"
        onClick={() => setVisible(true)}
      >
        Add File
      </button>
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Add File
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[10px]"
          >
            <div className="flex flex-col gap-[5px]">
              <FormGroup
                title="Name"
                placeholder="Enter Name File"
                id="name"
                register={register}
                type="text"
                error={errors?.name}
              />
              <FormGroup
                title="File"
                placeholder="Enter File"
                id="file"
                register={register}
                type="file"
                error={errors?.file}
              />
              <Select
                title="Select Course"
                id="select_course"
                name="select_course"
                setValue={setCourseId}
                options={coursesSelector}
                placeholder="Select Quizz..."
                error={errors?.course_id}
                isLoading={isLoadingCourses}
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
                  "Add"
                )}
              </button>
            </div>
          </form>
        </div>
      </Model>
    </>
  );
};
