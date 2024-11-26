"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Model } from "@/components/Model";
import { FormGroup } from "@/components/FormGroup";
import {
  deleteChapter,
  getChapterDetails,
  updateChapter,
} from "@/api/admin/chapters/chapters";
import { Lessons } from "../Lessons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const Details = () => {
  const params = useParams();
  const id = params.id;

  const { data: chapter, isLoading } = getChapterDetails(id);

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [nameChapter, setNameChapter] = useState<string>();
  const [statusChapter, setStatusChapter] = useState<number>();
  const router = useRouter();
  const { handleSubmit, reset, register } = useForm();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();

  useEffect(() => {
    if (chapter) {
      setNameChapter(chapter.name);
      setStatusChapter(chapter.status);
    }
  }, [chapter]);

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
  }, [visible]);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!chapter) {
    return <p className="text-base">chapter not be found</p>;
  }

  const handleDeleteClick = async () => {
    setLoadingDelete(true);
    try {
      await deleteChapter(chapter.id);
      router.replace("/admin/chapters");
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (dataChapter) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("name", dataChapter.name);
    formData.append("status", dataChapter.status);

    try {
      const data = await updateChapter(formData, chapter.id);
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
          message: "Updated Chapter Successfully",
        });
        setNameChapter(dataChapter.name);
        setStatusChapter(dataChapter.status);
        setVisible(false);
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
                {nameChapter}
              </h2>
              <span className="block font-meduim font-heading text-[16px] text-gray-600 mt-[8px]">
                Course:{" "}
                <span className="text-[#1363DF]">{chapter.course_name}</span>
              </span>
              <span className="block font-meduim font-heading text-[16px] text-gray-600 mt-[8px]">
                Lessons:{" "}
                <span className="text-[#1363DF]">{chapter.n_lessons}</span>
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
                    Update Chapter
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[10px]"
                  >
                    <div className="relative">
                      <FormGroup
                        title="Name Chapter"
                        type="text"
                        id="name"
                        register={register}
                        error={errors?.name}
                        placeholder="Enter name chapter"
                        defaultValue={nameChapter}
                      />
                      <div className="flex gap-[10px] mt-[15px]">
                        <input
                          id="activate"
                          className="peer/draft"
                          type="radio"
                          {...register("status")}
                          defaultChecked={statusChapter === 1}
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
                          defaultChecked={statusChapter === 0}
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
            Warning: Deleting this chapter will also delete associated Chapter.
          </p>
        </div>
        <Lessons lessons={chapter.lessons} />
      </div>
    </div>
  );
};
