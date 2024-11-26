"use client";
import { useState } from "react";
import { FormGroup } from "../FormGroup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { storeConsulting } from "@/api/Contact copy";

export const FormConsulting = () => {
  const { handleSubmit, reset, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("name", data.username);
    formData.append("email", data.email);
    formData.append("whats_number", data.phone);
    formData.append("type", data.type);
    formData.append("description", data.subject);

    try {
      const data = await storeConsulting(formData);

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
          message:
            "Your submission has been successfully sent. You can expect a response from the responsible parties shortly. Thank you!",
        });
        reset();
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
    <section className="py-[120px] relative w-full">
      <div className="container">
        <h2 className="md:text-[30px] text-[26px] font-semibold relative mb-5 leading-[1.2] font-heading pb-[15px] text-[#082A5E] before:absolute before:left-0 before:bottom-0 before:w-[28px] before:h-[4px] before:rounded-[2px] before:bg-[#1363DF]">
          Need any consulting?
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
            <FormGroup
              title="Name"
              id="username"
              placeholder="Enter Your Name"
              type="text"
              register={register}
              error={errors?.name}
            />
            <FormGroup
              title="Phone"
              id="phone"
              placeholder="Enter Your phone"
              type="text"
              register={register}
              error={errors?.whats_number}
            />
            <FormGroup
              title="Email"
              id="email"
              placeholder="Enter Your email"
              type="email"
              register={register}
              error={errors?.email}
            />
            <FormGroup
              title="Type of Consultation"
              id="type"
              placeholder="Enter Type of Consultation"
              type="text"
              register={register}
              error={errors?.type}
            />
            <div className="md:col-span-2">
              <FormGroup
                title="Subject"
                id="subject"
                placeholder="Enter Subject"
                type="textarea"
                register={register}
                error={errors?.description}
              />
            </div>
          </div>
          <div className="mt-3">
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
          <button
            type="submit"
            className="pt-[19px] px-[24px] pb-[16px] mt-6 text-white font-semibold uppercase border border-[#D0DAE9] bg-[#1363DF] inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
          >
            {loading ? "Loading..." : "Send Consulting"}
          </button>
        </form>
      </div>
    </section>
  );
};
