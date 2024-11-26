"use client";
import { changeRole } from "@/api/admin/users/users";
import { useAppSelector } from "@/hooks/hooks";
import { ChangeEvent, useEffect, useState } from "react";

export const Role = ({
  user_role,
  user_id,
}: {
  user_role: string;
  user_id: number;
}) => {
  const [loading, setLoading] = useState(false);
  const roles = ["owner", "member"];
  const [userRole, setUserRole] = useState<string>(user_role);
  const [message, setMessage] = useState<Record<string, string> | null>();

  const onChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    setMessage(null);

    const role = e.target.value;
    const formData = new FormData();
    formData.append("role", role);
    formData.append("user_id", user_id.toString());

    try {
      const data = await changeRole(formData);
      if (data.error) {
        data.error.message &&
          setMessage({
            type: "error",
            message: data.error.message,
          });
      } else {
        setMessage({
          type: "success",
          message: "Change Role Successfully",
        });
        setUserRole(role);
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
      <div className="relative min-w-[100px]">
        <select
          className="bg-gray-50 border border-gray-300 text-[rgb(107_114_128)] text-base rounded-lg block w-full p-[5px] focus-visible:outline-none capitalize"
          onChange={onChange}
          disabled={loading}
          value={userRole}
        >
          {roles.map((item, index) => (
            <option
              value={item}
              key={index}
              className="text-[rgb(107_114_128)] font-body capitalize"
            >
              {item}
            </option>
          ))}
        </select>
        {loading && (
          <span className="animate-spin rounded-full border-b-2 border-t-2 border-[#1363DF] absolute top-[7px] h-5 w-5 right-[5px]"></span>
        )}
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
    </>
  );
};
