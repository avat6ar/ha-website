import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { UseFormRegister } from "react-hook-form";

interface FormProps {
  type: string;
  id: string;
  title: string;
  placeholder: string;
  error?: string | null;
  defaultValue?: string | number | null;
  register: UseFormRegister<any>;
}

export const FormGroup = ({
  type,
  id,
  title,
  placeholder,
  error,
  defaultValue,
  register,
}: FormProps) => {
  const [changeTypePassword, setChangeTypePassword] = useState<string | null>(
    null
  );

  const pathname = usePathname();

  return (
    <div className="relative">
      {type === "password" && pathname.includes("/login") ? (
        <div className="flex justify-between mb-[8px]">
          <label
            htmlFor={id}
            className="text-[18px] text-[#39557E] font-medium font-body block"
          >
            {title}
          </label>
          <Link
            href="/auth/forget-password"
            className="text-[18px] text-[#1363DF] font-medium font-body block"
          >
            Forgot Password
          </Link>
        </div>
      ) : (
        <label
          htmlFor={id}
          className="text-[18px] text-[#39557E] font-medium font-body mb-[4px] block"
        >
          {title}
        </label>
      )}
      {type === "password" ? (
        <div className="relative">
          <input
            type={changeTypePassword ? "text" : "password"}
            {...register(id)}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue ?? ""}
            className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[12px] py-[15px] bg-white rounded-md border border-[#D0DAE9] focus-visible:outline-none"
          />
          <button
            type="button"
            className="absolute top-[15px] right-[15px] w-[24px] h-[24px]"
            onClick={() =>
              setChangeTypePassword(prevType =>
                prevType === "text" ? null : "text"
              )
            }
          >
            {changeTypePassword ? (
              <FaRegEye className="w-full" />
            ) : (
              <FaRegEyeSlash className="w-full" />
            )}
          </button>
        </div>
      ) : type === "textarea" ? (
        <>
          <textarea
            {...register(id)}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue ?? ""}
            className="block mt-[4px] w-full min-h-[185px] text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[12px] py-[15px] bg-white rounded-md border border-[#D0DAE9] focus-visible:outline-none"
          ></textarea>
        </>
      ) : (
        <>
          <input
            type={type}
            {...register(id)}
            id={id}
            placeholder={placeholder}
            defaultValue={defaultValue ?? ""}
            className="block mt-[4px] w-full text-[16px] font-normal leading-[1.5] text-[#5A7093] px-[12px] py-[15px] bg-white rounded-md border border-[#D0DAE9] focus-visible:outline-none"
          />
        </>
      )}
      {error && <p className="mt-2 text-pink-600 text-base">{error}</p>}
    </div>
  );
};
