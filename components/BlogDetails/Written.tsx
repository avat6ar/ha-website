import type { Writer } from "@/types";
import Image from "next/image";

export const Written = ({ written }: { written: Writer }) => {
  return (
    <div className="flex items-center md:gap-[30px] gap-[20px] bg-[#F8FAFF] border border-[#D5E4F4] rounded-[10px] lg:p-[40px] p-[30px] md:flex-row flex-col md:text-left text-center mb-[60px]">
      <div className="flex-[0_0_auto]">
        <a href="#">
          <Image
            src={written.cover}
            width={115}
            height={115}
            alt=""
            className="max-w-[115px] rounded-full"
          />
        </a>
      </div>
      <div className="grow">
        <span className="block leading-[1] text-[#1363DF] font-medium mb-[11px]">
          Written by
        </span>
        <h5 className="text-[20px] font-heading text-[#082A5E] font-medium leading-[1.2] mb-[10px]">
          {written.name}
        </h5>
      </div>
    </div>
  );
};
