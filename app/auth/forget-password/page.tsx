import { FormForgetPassword } from "@/components/Auth/Forget-Password/FormForgetPassword";
import { TitleFrogetPassword } from "@/components/Auth/Forget-Password/TitleFrogetPassword";
import { FormImage } from "@/components/Auth/FormImage";

const ForgetPassword = () => {
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
            <TitleFrogetPassword />
            <FormForgetPassword />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
