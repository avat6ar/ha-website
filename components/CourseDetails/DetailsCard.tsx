"use client";
import { BsClock } from "react-icons/bs";
import { PiFileTextThin, PiUsers } from "react-icons/pi";
import { IoFlashOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { AddToCart } from "@/api/AddToCart";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FormOnline } from "./FormOnline";

export const DetailsCard = ({
  id,
  cover,
  duration,
  seats,
  joined,
  category,
  name,
  old_price,
  new_price,
  type_course,
}: {
  id: number;
  cover: string;
  duration: string;
  seats: number;
  joined: number;
  category: string;
  name: string;
  old_price: number;
  new_price: number;
  type_course: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();
  const router = useRouter();

  const addCart = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("id", id.toString());

    try {
      const data = await AddToCart(formData);

      if (data.error) {
        setMessage({
          type: "error",
          message: "Course added already!",
        });
      } else {
        setMessage({
          type: "success",
          message: "Added course Successfully",
        });
      }
    } catch (error: AxiosError | any) {
      if (error.response.status == 401) {
        router.push("/auth/login");
        return;
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
    <div className="border border-[#ececec] shadow-[0px_0px_10px_rgba(0,0,0,0.05)] rounded-[8px] pt-[7px] px-[7px] pb-[30px] bg-white mb-[30px]">
      <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#082A5E] before:opacity-20 before:rounded-[4px] before:z-[1] mb-[20px]">
        <Image
          src={cover}
          height={200}
          width={200}
          alt="img"
          className="lg:h-[200px] h-auto w-full rounded-[4px] object-cover"
        />
      </div>
      <div className="block px-[30px]">
        <h4 className="flex items-center text-[#082A5E] mb-[18px] font-semibold text-[25px] font-heading">
          <span className="text-[#5A7093] text-[16px] font-normal font-heading mr-[15px]">
            Costs:
          </span>
          {old_price == new_price ? (
            <>${old_price}</>
          ) : (
            <>
              <del className="text-[16px] text-[#8D9DB5] mr-[4px]">
                ${old_price.toLocaleString()}
              </del>
              ${new_price.toLocaleString()}
            </>
          )}
        </h4>
        {type_course == "online_course" ? (
          <FormOnline id={id} />
        ) : (
          <>
            <button
              type="button"
              onClick={addCart}
              disabled={loading}
              className="w-full bg-[#1363DF] text-white inline-block cursor-pointer text-[15px] font-semibold tracking-[0.5px] leading-[1] pt-[19px] px-[24p]x pb-[16px] text-center uppercase transition-all duration-300 ease-out rounded-[4px] hover:bg-[#082A5E]"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="mr-2">Loading...</span>
                  <div className="animate-spin rounded-full h-4 w-4 border-t border-b border-white"></div>
                </div>
              ) : (
                "Enroll This Now"
              )}
            </button>
            {message && (
              <p
                className={`mt-2 text-base ${
                  message.type == "error" ? "text-red-600" : "text-green-600"
                }`}
              >
                {message.message}
              </p>
            )}
          </>
        )}
        <div className="block mt-[20px]">
          <h6 className="font-heading text-[16px] mb-[10px] text-[#082A5E] leading-[1.2]">
            Include This Course
          </h6>
          <ul className="block">
            <li className="flex items-center text-[#082A5E] border-b mb-[15px] pb-[8px] border-[#D7DCE3]">
              <BsClock className="text-[20px] mr-[15px] text-[#8D9DB5]" />
              Duration
              <span className="text-[#5A7093] ml-auto">{duration}</span>
            </li>
            <li className="flex items-center text-[#082A5E] border-b mb-[15px] pb-[8px] border-[#D7DCE3]">
              <PiFileTextThin className="text-[20px] mr-[15px] text-[#8D9DB5]" />
              Estimated Seat
              <span className="text-[#5A7093] ml-auto">
                {seats.toString().padStart(2, "0")}
              </span>
            </li>
            <li className="flex items-center text-[#082A5E] border-b mb-[15px] pb-[8px] border-[#D7DCE3]">
              <PiUsers className="text-[20px] mr-[15px] text-[#8D9DB5]" />
              Joined
              <span className="text-[#5A7093] ml-auto">
                {joined.toString().padStart(2, "0")}
              </span>
            </li>
            <li className="flex items-center text-[#082A5E] border-b mb-[15px] pb-[8px] border-[#D7DCE3]">
              <IoFlashOutline className="text-[20px] mr-[15px] text-[#8D9DB5]" />
              Category
              <span className="text-[#5A7093] ml-auto">{category}</span>
            </li>
            <li className="flex items-center text-[#082A5E] mb-[15px] pb-[8px] ">
              <IoShareSocialOutline className="text-[20px] mr-[15px] text-[#8D9DB5]" />
              Share
              <ul className="flex items-center gap-[12px] text-[#5A7093] ml-auto">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      name
                    )}&url=${encodeURIComponent(window.location.href)}`}
                  >
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
