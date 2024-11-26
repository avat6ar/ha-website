"use client";
import { Options, Quizz } from "@/types/admin";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { Select } from "../Select";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { getChaptersSelector } from "@/api/admin/chapters/chapters";

export const UpdateQuizz = ({
  quizz,
  handleData,
}: {
  quizz?: Quizz;
  handleData: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [type, setType] = useState<
    "end_of_course" | "after_chapter" | string | any
  >();
  const [courseId, setCourseId] = useState<string | number>();
  const [chapterId, setChapterId] = useState<string | number>();
  const { data: coursesSelector, isLoading: isLoadingCourses } =
    getCoursesSelector();
  const [chaptersSelector, setChaptersSelector] = useState<Options[] | any>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (courseId) {
        try {
          const data = await getChaptersSelector(courseId);
          setChaptersSelector(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [courseId]);

  useEffect(() => {
    if (quizz) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [quizz]);

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
  }, [visible]);

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    setLoading(true);
    setMessage(null);
    setErrors(null);
    formData.type = type;
    if (type == "after_chapter") {
      formData.chapter_id = chapterId;
    } else {
      formData.course_id = courseId;
    }

    try {
      const { data } = await axios.put("/admin/quizz/" + quizz?.id, formData);
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
          message: "Update Quizz Successfully",
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
      await axios.delete("/admin/quizz/" + id);
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
      {quizz && (
        <Model visible={visible} setVisible={setVisible}>
          <div className="md:w-[500px] w-[300px]">
            <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
              Update Quizz
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[10px]"
            >
              <div className="flex flex-col gap-[5px]">
                <FormGroup
                  title="Title"
                  placeholder="Enter Title quizz"
                  id="title"
                  register={register}
                  type="text"
                  error={errors?.title}
                  defaultValue={quizz.title}
                />
                <Select
                  title="Selecte Quizz Type"
                  placeholder="Selecte Quizz Type..."
                  id="type"
                  name="type"
                  setValue={setType}
                  options={[
                    {
                      id: "end_of_course",
                      name: "End of Course",
                    },
                    {
                      id: "after_chapter",
                      name: "After Chapter",
                    },
                  ]}
                  error={errors?.type}
                  defaultValue={quizz.type}
                />
                <FormGroup
                  title="final grade"
                  placeholder="Enter final grade"
                  id="final_grade"
                  register={register}
                  type="text"
                  error={errors?.final_grade}
                  defaultValue={quizz.final_grade}
                />
                <FormGroup
                  title="success rate"
                  placeholder="Enter success rate"
                  id="success_rate"
                  register={register}
                  type="text"
                  error={errors?.success_rate}
                  defaultValue={quizz.success_rate}
                />
                <Select
                  title="Select Course"
                  id="select_course"
                  name="select_course"
                  setValue={setCourseId}
                  options={coursesSelector}
                  placeholder="Select Course..."
                  error={errors?.course_id}
                  isLoading={isLoadingCourses}
                  defaultValue={quizz?.course_id}
                />
                {type == "after_chapter" && (
                  <Select
                    title="Select Chapter"
                    id="select_chapter"
                    name="select_chapter"
                    setValue={setChapterId}
                    options={chaptersSelector}
                    placeholder="Select Chapter..."
                    error={errors?.course_chapters_id}
                    defaultValue={quizz.chapter_id}
                  />
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
                  onClick={() => handleDeleteClick(quizz.id)}
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
