import { FormImage } from "@/components/Auth/FormImage";
import { FormLogin } from "@/components/Auth/Login/FormLogin";
import { TitleLogin } from "@/components/Auth/Login/TitleLogin";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login title",
  description: "Ha description",
};

const Login = () => {
  return (
    <section className="relative">
      <div className="flex">
        <div className="min-h-screen md:block hidden w-[40%] bg-[#1363DF]">
          <div className="pt-[110px] pb-[50px] px-[25px] h-full flex items-center justify-center">
            <FormImage />
          </div>
        </div>
        <div className="min-h-screen md:w-[60%] w-full">
          <div className="pt-[110px] pb-[50px] px-[25px] mx-auto max-w-[525px]">
            <TitleLogin />
            <FormLogin />
            <p className="font-body text-[16px] leading-[1.5] mt-[35px] font-normal text-[#39557E]">
              Don’t have an account?{" "}
              <Link href="/auth/register" className="text-[#1363DF]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
