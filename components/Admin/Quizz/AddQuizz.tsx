"use client";
import { Options, Quizz } from "@/types/admin";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { Select } from "../Select";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { getChaptersSelector } from "@/api/admin/chapters/chapters";

export const AddQuizz = ({ handleData }: { handleData: () => void }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [type, setType] = useState<
    "end_of_course" | "after_chapter" | string | any
  >();
  const [courseId, setCourseId] = useState<string | number | null>();
  const [chapterId, setChapterId] = useState<string | number | null>();
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
    setLoading(false);
    setErrors(null);
    setMessage(null);
    setCourseId(null);
    setChapterId(null);
    setType("offline_course");
  }, [visible]);

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    setLoading(true);
    setMessage(null);
    setErrors(null);
    formData.type = type;
    if (type == "after_chapter") {
      formData.course_chapter_id = chapterId;
    } else if (type == "end_of_course") {
      formData.course_id = courseId;
    }

    try {
      const { data } = await axios.post("/admin/quizz", formData);
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
          message: "Added Quizz Successfully",
        });
        handleData();
        reset();
        setCourseId(null);
        setChapterId(null);
        setType("offline_course");
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
        Add Quizz
      </button>
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Add Quizz
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
                defaultValue={"after_chapter"}
              />
              <FormGroup
                title="final grade"
                placeholder="Enter final grade"
                id="final_grade"
                register={register}
                type="text"
                error={errors?.final_grade}
              />
              <FormGroup
                title="success rate"
                placeholder="Enter success rate"
                id="success_rate"
                register={register}
                type="text"
                error={errors?.success_rate}
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
                defaultValue={courseId}
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
                  defaultValue={chapterId}
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
