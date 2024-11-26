"use client";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { storeContact } from "@/api/Contact";
import { Input } from "./Input";

export const ContactForm = () => {
  const { handleSubmit, reset, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("title", data.subject);
    formData.append("message", data.message);

    try {
      const data = await storeContact(formData);

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
    <section className="py-[120px]">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-[30px]">
          <div className="col-span-5">
            <h2 className="md:text-[30px] text-[26px] font-semibold relative mb-[15px] leading-[1.2] font-heading pb-[15px] text-[#082A5E] before:absolute before:left-0 before:bottom-0 before:w-[28px] before:h-[4px] before:rounded-[2px] before:bg-[#1363DF]">
              Keep In Touch With Us
            </h2>
            <p className="text-[16px] font-normal text-[#39557E] font-body leading-[1.75] mb-[25px] lg:w-[80%] w-full">
              Be free and leave a message and we will reply to you as soon as
              possible
            </p>
            <ul className="block">
              <li className="flex items-center mb-[40px]">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#1363DF] text-white text-[24px] mr-[15px]">
                  <IoLocationOutline />
                </div>
                <div className="block">
                  <p className="text-[16px] font-medium text-[#39557E] font-body leading-[1.4]">
                    68 Street Holakt Street world <br /> 10002 New York
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-[40px]">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#1363DF] text-white text-[20px] mr-[15px]">
                  <FiPhoneCall />
                </div>
                <div className="block">
                  <p className="text-[16px] font-medium text-[#39557E] font-body leading-[1.4]">
                    Our Phone <br /> 01150469106
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-[40px]">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#1363DF] text-white text-[24px] mr-[15px]">
                  <MdOutlineMailOutline />
                </div>
                <div className="block">
                  <p className="text-[16px] font-medium text-[#39557E] font-body leading-[1.4]">
                    Our Email <br /> info@hatc.uk
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-7">
            <div className="bg-[#F6F7FA] border border-[#DAE0E7] rounded-[8px] md:pt-[30px] pt-[25px] xl:px-[45px] lg:px-[25px] md:px-[40px] px-[20px] md:pb-[40px] pb-[30px]">
              <h4 className="text-[24px] font-semibold relative mb-[30px] pb-[17px] font-heading leading-[1.2] text-[#082A5E] before:absolute before:left-0 before:bottom-0 before:w-[28px] before:h-[4px] before:rounded-[2px] before:bg-[#1363DF]">
                Get in Touch
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-[20px]">
                  <div className="md:col-span-1">
                    <Input
                      id="name"
                      register={register}
                      placeholder="Enter Name"
                      error={errors?.name}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <Input
                      id="email"
                      register={register}
                      placeholder="Enter Email"
                      error={errors?.email}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <Input
                      id="phone"
                      register={register}
                      placeholder="Enter Phone"
                      error={errors?.phone}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <Input
                      id="subject"
                      register={register}
                      placeholder="Your Subject"
                      error={errors?.subject}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <textarea
                      {...register("message")}
                      id="message"
                      className="w-full block border border-[#DAE0E7] rounded-[3px] bg-white font-normal text-[15px] text-[#39557E] py-[11px] px-[20px] focus:border-[#1363DF] min-h-[135px] max-h-[135px]"
                      placeholder="Message"
                    ></textarea>
                    {errors?.message && (
                      <p className="mt-2 text-pink-600 text-base">
                        {errors?.message}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
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
                  </div>
                  <div className="flex">
                    <button
                      type="submit"
                      className="pt-[19px] px-[24px] pb-[16px] text-white font-semibold uppercase border border-[#D0DAE9] bg-[#1363DF] inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                    >
                      {loading ? "loading..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
