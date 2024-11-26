"use client";
import { useState } from "react";
import { FormGroup } from "../../FormGroup";
import { GoogleForm } from "../GoogleForm";
import { registerUser } from "@/api/auth/auth";
import { useRouter } from "next/navigation";
import { setAuthEmail } from "@/lib/features/auth/session";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const FormRegister = () => {
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setErrors(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const data = await registerUser(formData);
      if (data.error) {
        setErrors(data.error);
      } else if (data.data) {
        const { email } = data.data;
        setAuthEmail(email);
        return router.push("/auth/verify");
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[25px]">
      <div className="flex flex-col gap-[15px]">
        <FormGroup
          type="text"
          id="name"
          register={register}
          placeholder="Your name"
          title="Full name"
          error={errors?.name}
        />
        <FormGroup
          type="email"
          id="email"
          register={register}
          placeholder="Exampl@email.com"
          title="Email address"
          error={errors?.email}
        />
        <FormGroup
          type="password"
          id="password"
          register={register}
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
          className="block mt-3 bg-[#1363DF] text-white px-[12px] py-[15px] rounded-md text-[18px] font-medium hover:bg-[#082A5E] transition-all duration-300 ease-out disabled:bg-[#082A5E]"
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
