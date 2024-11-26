"use client";
import { subscribe } from "@/api/Home";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const { handleSubmit, reset, register } = useForm();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setErrors(null);
    setMessage(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("email", data.email);

    try {
      const data = await subscribe(formData);

      if (data.error) {
        setErrors(data.error);
      } else if (data.data) {
        const email = data.data;
        setMessage({
          type: "success",
          message: `Subscription successful for the email: ${email}`,
        });
        setErrors({});
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

  return (
    <section className="w-full relative py-[55px] border-b border-[#E2E2E2]">
      <div className="container">
        <div className="grid items-center justify-center lg:grid-cols-12 grid-cols-1 gap-[20px]">
          <div className="xl:col-span-6 lg:col-span-4 col-span-1">
            <div className="flex items-center justify-center xl:flex-row md:flex-col-reverse flex-col gap-[12px]">
              <div className="block" data-aos="fade-right">
                <Image
                  src="/images/newsletter.webp"
                  alt="img"
                  className="max-w-full"
                  width={269}
                  height={203}
                  quality={70}
                />
              </div>
              <div className="xl:ml-[10px] grow">
                <h4 className="text-[#082A5E] text-[30px] font-semibold leading-[1.2]">
                  Let’s Join To
                  <br />
                  Our Newsletters
                </h4>
              </div>
            </div>
          </div>
          <div className="xl:col-span-6 lg:col-span-8 col-span-1">
            <div className="relative">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  {...register("email")}
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full bg-[#E7EFFC] border border-[#D0DFF7] rounded-full py-[15px] pr-[200px] pl-[28px]"
                />
                {errors?.email && (
                  <p className="mt-2 text-pink-600 text-base">
                    {errors?.email}
                  </p>
                )}
                <button
                  type="submit"
                  className="absolute top-[5px] right-[6px] py-[12px] px-[30px] h-[50px] uppercase bg-[#1363DF] text-white font-bold rounded-full hover:bg-[#082A5E] transition-all duration-300 ease-out"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Loading...</span>
                      <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
                    </div>
                  ) : (
                    "Subscribe Now"
                  )}
                </button>
              </form>
              {message && (
                <p
                  className={`mt-2 text-base ${
                    message.type == "error" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {message.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
