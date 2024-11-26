"use client";
import { GoogleForm } from "@/components/Auth/GoogleForm";
import { FormGroup } from "../../FormGroup";
import { useState } from "react";
import { loginUser } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/hooks";
import { setAuth } from "@/lib/features/auth/authSlice";
import { clearAuthEmail, setAuthEmail } from "@/lib/features/auth/session";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";

export const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, register } = useForm();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    setLoading(true);
    setErrors(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("email", dataForm.email);
    formData.append("password", dataForm.password);

    try {
      const data = await loginUser(formData);

      if (data.error) {
        setErrors(data.error);
      } else if (data.data) {
        const { token, user } = data.data;

        dispatch(setAuth({ token, user }));
        setErrors({});
        clearAuthEmail();

        router.replace("/");
      }
    } catch (error: any | AxiosError) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ error:", error)
      if (error.response.status === 425) {
        setAuthEmail(dataForm.email);
        return router.push("/auth/verify");
      }

      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-[25px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[15px]">
        <FormGroup
          register={register}
          type="email"
          id="email"
          placeholder="Exampl@email.com"
          title="Email address"
          error={errors?.email}
        />
        <FormGroup
          register={register}
          type="password"
          id="password"
          placeholder="Enter password"
          title="Password"
          error={errors?.password}
        />
        {errors?.message && (
          <p className="mt-2 text-pink-600 text-base">{errors?.message}</p>
        )}
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
          className="block mt-3 bg-[#1363DF] text-white px-[12px] py-[15px] rounded-md text-[18px] font-medium disabled:bg-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">Loading...</span>
              <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
            </div>
          ) : (
            "Start Now!"
          )}
        </button>
        <div className="my-[20px] text-center relative text-[#5A7093] text-[20px] font-medium leading-[1] before:w-[45%] before:h-px before:bg-[#D0DAE9] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 after:w-[45%] after:h-px after:bg-[#D0DAE9] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0">
          OR
        </div>
        <GoogleForm />
      </div>
    </form>
  );
};
