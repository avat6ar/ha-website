"use client";
import { changeStatus } from "@/api/admin/users/users";
import { useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";

export const Status = ({
  user_status,
  user_id,
}: {
  user_status: number;
  user_id: number;
}) => {
  const [loading, setLoading] = useState(false);
  const [localUserStatus, setLocalUserStatus] = useState(user_status);
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onClick = async () => {
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("user_id", user_id.toString());

    try {
      const data = await changeStatus(formData);
      if (data.error) {
        data.error.message &&
          setMessage({
            type: "error",
            message: data.error.message,
          });
      } else {
        setMessage({
          type: "success",
          message: "Change Status Successfully",
        });
        setLocalUserStatus(localUserStatus === 0 ? 1 : 0);
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
      <button
        type="button"
        onClick={onClick}
        className={`rounded-lg ${
          localUserStatus === 0
            ? "bg-[#FF2020] text-[#FF2020]"
            : "bg-[#04BC53] text-[#04BC53]"
        } bg-opacity-20 text-center py-[5px] px-[25px]`}
        disabled={loading}
      >
        {loading
          ? "Loading..."
          : localUserStatus === 0
          ? "Deactivate"
          : "Activate"}
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
  );
};
