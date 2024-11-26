import { FormImage } from "@/components/Auth/FormImage";
import { FormVerify } from "@/components/Auth/Verify/FormVerify";
import { TitleVerify } from "@/components/Auth/Verify/TitleVerify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify title",
  description: "Ha description",
};

const Verify = () => {
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
            <TitleVerify />
            <FormVerify />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verify;