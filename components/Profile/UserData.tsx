"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";
import { useEffect, useState } from "react";
import { clearAuth } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { logout } from "@/api/auth/profile";
import { ImageProfile } from "./ImageProfile";
import Link from "next/link";

export const UserData = () => {
  const { user } = useAppSelector((state) => state.authReducer.authData);
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [image, setImage] = useState<string | undefined>("");
  const [role, setRole] = useState<string | undefined>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setImage(user?.image);
    setRole(user?.role);
  }, [user]);

  const handleLogout = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const status = await logout();
      if (status == 200) {
        router.replace("/");
        dispatch(clearAuth());
      }
    } catch (e) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="py-[100px]">
      <div className="lg:w-[950px] w-full lg:px-0 px-[15px] mx-auto">
        <div className="bg-white border border-[#ECECEC] shadow-[0px_0px_15px] shadow-[rgba(0,0,0,0.08)] rounded-[8px] md:py-[25px] xl:px-[25px] lg:px-[20px] md:px-[25px] py-[20px] px-[20px] flex lg:flex-nowrap flex-wrap items-start gap-[15px_35px]">
          {loading ? (
            <div className="min-h-[342px] grow flex items-center justify-center w-full h-full">
              <div className="flex items-center">
                <span className="mr-2 text-[20px]">Loading...</span>
                <div className="animate-spin rounded-full h-8 w-8 border-t-[2px] border-b-[2px] border-[#1363DF]"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-[0_0_auto] w-[270px] md:w-auto lg:mb-0 mb-[25px] lg:mx-0 mx-auto text-center">
                {image && <ImageProfile image={image} />}
              </div>
              <div className="grow">
                <div className="border-b border-[#CFD9E4] mb-[15px] pb-[10px]">
                  <h2 className="text-[24px] mb-[5px] font-heading text-[#082A5E] leading-[1.2] font-semibold">
                    {name ?? ""}
                  </h2>
                  <span className="block font-normal font-heading text-[16px] text-[#1363DF]">
                    {email ?? ""}
                  </span>
                </div>
                <div className="w-full flex flex-col gap-[15px]">
                  {name && <UserName />}
                  <UserPassword />
                  <div className="flex justify-end gap-2">
                    {role == "admin" || role == "super admin" ? (
                      <Link
                        href="/admin"
                        className="mt-[25px] py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      ""
                    )}
                    <button
                      type="button"
                      className="mt-[25px] py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
                      onClick={handleLogout}
                      disabled={loading}
                    >
                      Logout
                    </button>
                  </div>
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
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
