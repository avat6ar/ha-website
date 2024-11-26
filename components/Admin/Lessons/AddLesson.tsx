"use client";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { Select } from "../Select";
import { getCoursesSelector } from "@/api/admin/courses/courses";
import { addNewLesson } from "@/api/admin/lessons/lessons";
import { getChaptersSelector } from "@/api/admin/chapters/chapters";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Options } from "@/types/admin";

export const AddLesson = ({ onLessonAdded }: { onLessonAdded: () => void }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [courseId, setCourseId] = useState<string | number | null>();
  const [chapterId, setChapterId] = useState<string | number | null>();
  const { data: coursesSelector, isLoading: isLoadingCourses } =
    getCoursesSelector();
  const [chaptersSelector, setChaptersSelector] = useState<Options[] | any>([]);
  const [message, setMessage] = useState<Record<string, string> | null>();
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

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("status", data.status);
    formData.append("link", data.link);
    formData.append("course_id", courseId?.toString() ?? "");
    formData.append("course_chapters_id", chapterId?.toString() ?? "");

    try {
      const data = await addNewLesson(formData);
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
          message: "Add Lesson Successfully",
        });
        onLessonAdded();
        reset();
        setCourseId(null);
        setChapterId(null);
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

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
    setCourseId(null);
    setChapterId(null);
  }, [visible]);
  return (
    <>
      <button
        className="flex items-center justify-center py-[7px] px-[20px] rounded bg-[#03C0EA] transition-all duration-300 ease-out text-white font-medium"
        onClick={() => setVisible(true)}
      >
        Add Lesson
      </button>
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Add New Lesson
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
              />
              <FormGroup
                title="Link video"
                placeholder="Enter Link video"
                id="link"
                register={register}
                type="text"
                error={errors?.link}
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
              />
              <Select
                title="Select Chapter"
                id="select_chapter"
                name="select_chapter"
                setValue={setChapterId}
                options={chaptersSelector}
                placeholder="Select Chapter..."
                error={errors?.course_chapters_id}
              />
              <div className="flex gap-[10px]">
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
