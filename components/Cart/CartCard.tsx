"use client";
import { removeFromCart } from "@/api/auth/profile";
import { CartCourse } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { BsClock } from "react-icons/bs";
import { PiFileTextThin } from "react-icons/pi";

export const CartCard = ({
  cart,
  handleData,
}: {
  cart: CartCourse;
  handleData: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onRemove = async () => {
    setLoading(true);
    setMessage(null);
    
    const formData = new FormData();
    formData.append("course_id", cart.id.toString());

    try {
      const data = await removeFromCart(formData);
      handleData();
    } catch (err) {
      console.log("🚀 ~ onRemove ~ err:", err);
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <li className="flex py-[20px] border-b gap-[25px] items-center last:border-0 md:flex-row flex-col">
      <div className="block">
        <Image
          src={cart.cover}
          width={270}
          height={223}
          alt="img"
          className="md:w-[290px] w-full rounded-[4px] object-cover"
        />
      </div>
      <div className="grow md:w-auto w-full">
        <h5 className="text-[17px] font-normal leading-[1.3] mb-[16px] font-heading text-[#082A5E]">
          {cart.name}
        </h5>
        <a
          href="#"
          className="text-[14px] font-medium leading-[1] py-[6px] px-[16px] rounded-[50px] bg-[#E8F9EF] text-[#04BC53] inline-block"
        >
          {cart.category}
        </a>
        <ul className="flex gap-[8px_22px] items-center flex-wrap my-[16px]">
          <li className="flex items-center">
            <PiFileTextThin className="text-[20px] mr-[7px]" />
            {cart.n_lessons.toString().padStart(0, "2")}
          </li>
          <li className="flex items-center">
            <BsClock className="text-[18px] mr-[7px]" />
            {cart.duration}
          </li>
        </ul>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onRemove}
            className="py-[8px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
          >
            {loading ? "Loading..." : "Remove"}
          </button>
          <span className="text-[22px] leading-[1] text-[#1363DF] font-medium font-heading">
            ${cart.price.toLocaleString()}
          </span>
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
      </div>
    </li>
  );
};
