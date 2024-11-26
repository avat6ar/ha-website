"use client";
import { useEffect, useState } from "react";
import { FormGroup } from "../../FormGroup";
import { resendCodeVerify, verifyUser } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/hooks";
import { setAuth } from "@/lib/features/auth/authSlice";
import { clearAuthEmail, getAuthEmail } from "@/lib/features/auth/session";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const FormVerify = () => {
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const email: string = getAuthEmail() ?? "";
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrors(null);
    setMessage(null);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("verification_code", data.verification_code);

    try {
      const data = await verifyUser(formData);

      if (data.error) {
        setErrors(data.error);
      } else {
        dispatch(setAuth({ token: data.token, user: data.data }));
        clearAuthEmail();
        router.replace("/");
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

  const handleResendCode = async () => {
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("email", email);

    try {
      await resendCodeVerify(formData);

      setMessage({
        type: "success",
        message: `Verification code has been sent to: ${email}`,
      });
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
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[25px]">
        <div className="flex flex-col gap-[15px]">
          <FormGroup
            type="text"
            id="verification_code"
            register={register}
            placeholder="Enter Code"
            title="Verification Code"
            error={errors?.verification_code}
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
              "Send Now!"
            )}
          </button>
        </div>
      </form>
      <p className="font-body text-[16px] leading-[1.5] mt-[35px] font-normal text-[#39557E]">
        Would you like to resend the code?
        <button
          type="button"
          className="text-[#1363DF]"
          onClick={handleResendCode}
        >
          Send Code
        </button>
      </p>
    </>
  );
};
