"use client";
import { useState } from "react";
import { FormGroup } from "../../FormGroup";
import Link from "next/link";
import { sendCodeForgetPassword } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { setAuthEmail } from "@/lib/features/auth/session";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const FormForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    setLoading(true);
    setErrors(null);
    setMessage(null);

    const formData = new FormData();
    formData.append("email", dataForm.email);

    try {
      const data = await sendCodeForgetPassword(formData);

      if (data.error) {
        setErrors(data.error);
      } else {
        setAuthEmail(dataForm.email);
        router.push("/auth/reset-password");
      }
    } catch (e) {
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
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[25px]">
        <div className="flex flex-col gap-[15px]">
          <FormGroup
            register={register}
            type="email"
            id="email"
            placeholder="Enter Email"
            title="Email"
            error={errors?.email}
          />
          {message && (
            <p
              className={`mt-2 text-base ${
                message.type == "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.message}
            </p>
          )}
          <button
            type="submit"
            className="block mt-3 bg-[#1363DF] text-white px-[12px] py-[15px] rounded-md text-[18px] font-medium hover:bg-[#082A5E] transition-all duration-300 ease-out disabled:bg-[#082A5E]"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <span className="mr-2">Loading...</span>
                <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
              </div>
            ) : (
              "Send Code!"
            )}
          </button>
        </div>
      </form>

      <p className="font-body text-[16px] leading-[1.5] mt-[35px] font-normal text-[#39557E]">
        Don’t have an account?{" "}
        <Link href="/auth/register" className="text-[#1363DF]">
          Sign Up
        </Link>
      </p>
    </>
  );
};
