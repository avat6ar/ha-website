"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Model } from "../Model";
import { useRouter } from "next/navigation";
import { changePassword } from "@/api/auth/profile";
import { useAppSelector } from "@/hooks/hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const UserPassword = () => {
  const { token } = useAppSelector((state) => state.authReducer.authData);
  const { user } = useAppSelector((state) => state.authReducer.authData);
  const [visible, setVisible] = useState(false);
  const { handleSubmit, register } = useForm();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!token || !user) {
      return router.push("/auth/login");
    }

    setLoading(true);
    setErrors(null);
    setMessage(null);

    const formData = new FormData();

    formData.append("old_password", data.old_password);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);

    try {
      const data = await changePassword(formData);
      if (data.error) {
        setErrors(data.error);
      } else {
        setMessage({
          type: "success",
          message: "Updated profile successfully",
        });
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
      <div className="flex justify-between items-center">
        <label
          htmlFor="fake_password"
          className="text-[18px] font-body text-[#082A5E] leading-[1.2] font-medium"
        >
          Password
        </label>
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="text-[16px] text-[#082A5E] flex items-center font-medium gap-[9px]"
        >
          Edit <CiEdit />
        </button>
      </div>
      <input
        type="password"
        name="fake_password"
        id="fake_password"
        disabled
        className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[15px] py-[10px] bg-[#fafafa] rounded-md border border-[#D0DAE9]"
        value="password"
      />
      <Model visible={visible} setVisible={setVisible}>
        <div className="md:w-[500px] w-[300px]">
          <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
            Edit Password
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[10px]"
          >
            <div className="relative">
              <label
                htmlFor="old_passowrd"
                className="text-[18px] mb-[5px] font-body text-[#082A5E] leading-[1.2] font-medium"
              >
                Old Password
              </label>
              <input
                type="password"
                {...register("old_password")}
                id="old_passowrd"
                className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[15px] py-[10px] bg-white rounded-md border border-[#D0DAE9]"
              />
              {errors?.old_password && (
                <p className="mt-2 text-pink-600 text-base">
                  {errors?.old_password}
                </p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="new_password"
                className="text-[18px] mb-[5px] font-body text-[#082A5E] leading-[1.2] font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                {...register("password")}
                id="password"
                className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[15px] py-[10px] bg-white rounded-md border border-[#D0DAE9]"
              />
              {errors?.password && (
                <p className="mt-2 text-pink-600 text-base">
                  {errors?.password}
                </p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password_confirmation"
                className="text-[18px] mb-[5px] font-body text-[#082A5E] leading-[1.2] font-medium"
              >
                Confimation Password
              </label>
              <input
                type="password"
                {...register("password_confirmation")}
                id="password_confirmation"
                className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[15px] py-[10px] bg-white rounded-md border border-[#D0DAE9]"
              />
              {errors?.password && (
                <p className="mt-2 text-pink-600 text-base">
                  {errors?.password}
                </p>
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
            <div className="flex mt-[15px]">
              <button className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out">
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
    </div>
  );
};
