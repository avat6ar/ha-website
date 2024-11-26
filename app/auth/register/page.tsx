import { FormImage } from "@/components/Auth/FormImage";
import { FormRegister } from "@/components/Auth/Register/FormRegister";
import { TitleRegister } from "@/components/Auth/Register/TitleRegister";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register title",
  description: "Ha description",
};

const Register = () => {
  return (
    <section className="relative">
      <div className="flex">
        <div className="min-h-screen md:block hidden w-[40%] bg-[#1363DF]">
          <div className="pt-[180px] pb-[40px] px-[25px] h-full flex xl:items-center items-start justify-center">
            <FormImage />
          </div>
        </div>
        <div className="min-h-screen md:w-[60%] w-full">
          <div className="pt-[110px] pb-[40px] px-[25px] mx-auto max-w-[525px]">
            <TitleRegister />
            <FormRegister />
            <p className="font-body text-[16px] leading-[1.5] mt-[35px] font-normal text-[#39557E]">
              By signing up, you agree to our communications and usage terms
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#1363DF]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
