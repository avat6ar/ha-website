"use client";
import Image from "next/image";
import { useState } from "react";
import { Model } from "../Model";
import { useRouter } from "next/navigation";
import { changeProfile } from "@/api/auth/profile";
import { ImageCropper } from "./ImageCropper";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setAuth } from "@/lib/features/auth/authSlice";

export const ImageProfile = ({ image }: { image: string }) => {
  const { user } = useAppSelector((state) => state.authReducer.authData);
  const { token } = useAppSelector((state) => state.authReducer.authData);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null> | null>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<Record<string, string> | null>();

  const save = async (croppedImageUrl: any) => {
    setLoading(true);
    setMessage(null);
    setErrors(null);

    if (!token || !user) {
      return router.push("/auth/login");
    }

    const formData = new FormData();
    formData.append("image", croppedImageUrl);

    try {
      const data = await changeProfile(formData);

      if (data.error) {
        setErrors(data.error);
      } else if (data.data) {
        const user = data.data;
        dispatch(setAuth({ token, user }));
        setErrors({});
        setVisible(false);
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
    <>
      <Image
        src={image}
        width={250}
        height={250}
        quality={100}
        alt="profile"
        className="w-[250px] h-[250px] object-cover"
      />
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out cursor-pointer mt-[15px]"
      >
        Edit
      </button>
      <Model visible={visible} setVisible={setVisible}>
        <h3 className="xl:text-[26px] text-[21px] font-heading text-[#082A5E] leading-[1.2] font-semibold mb-[16px]">
          Edit Image
        </h3>
        <ImageCropper onImageCropped={save} loading={loading} />
        {errors?.image && (
          <p className="mt-2 text-pink-600 text-base">{errors?.image}</p>
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
      </Model>
    </>
  );
};
