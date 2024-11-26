"use client";
import { Question } from "@/types/admin";
import { FormGroup } from "@/components/FormGroup";
import { Model } from "@/components/Model";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { Select } from "../Select";
import { getQuizzSelector } from "@/api/admin/quizz/quizz";

export const UpdateQuestion = ({
  question,
  handleData,
}: {
  question?: Question;
  handleData: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    setLoading(false);
    setErrors(null);
    setMessage(null);
  }, [visible]);
  
  useEffect(() => {
    if (question) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [question]);

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    setLoading(true);
    setMessage(null);
    setErrors(null);
    try {
      const { data } = await axios.put(
        "/admin/question/" + question?.id,
        formData
      );
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
          message: "Update Question Successfully",
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
      await axios.delete("/admin/question/" + id);
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
      {question && (
        <Model visible={visible} setVisible={setVisible}>
          <div className="md:w-[500px] w-[300px]">
            <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
              Update Question
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[10px]"
            >
              <div className="flex flex-col gap-[5px]">
                <FormGroup
                  title="question"
                  placeholder="Enter question"
                  id="question"
                  register={register}
                  type="text"
                  error={errors?.question}
                  defaultValue={question.question}
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
                    "Update"
                  )}
                </button>
                <button
                  className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                  type="button"
                  onClick={() => handleDeleteClick(question.id)}
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
