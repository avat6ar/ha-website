"use client";
import Image from "next/image";
import { Status } from "./Status";
import { Role } from "./Role";
import { Courses } from "./Courses";
import { geUserDetails } from "@/api/admin/users/users";

export const Details = ({ id }: { id: string }) => {
  const { data: user, isLoading } = geUserDetails(id);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!user) {
    return <p className="text-base">user not be found</p>;
  }

  return (
    <div className="relative">
      <div className="bg-white border border-[#ECECEC] shadow-[0px_0px_15px] shadow-[rgba(0,0,0,0.08)] rounded-[8px] md:py-[25px] xl:px-[25px] lg:px-[20px] md:px-[25px] py-[20px] px-[20px]">
        <div className="border-b border-[#CFD9E4] mb-[15px] pb-[10px] flex lg:flex-nowrap flex-wrap items-start gap-[15px_35px]">
          <div className="flex-[0_0_auto] w-[270px] md:w-auto lg:mb-0 mb-[25px] lg:mx-0 mx-auto text-center">
            <Image
              src={user.image}
              width={120}
              height={120}
              quality={100}
              alt="img"
              className="w-[120px] h-[120px] object-cover"
            />
          </div>
          <div className="grow">
            <div className="w-full flex flex-wrap gap-[8px] justify-between items-end">
              <div className="block">
                <h2 className="text-[24px] mb-[5px] font-heading text-[#082A5E] leading-[1.2] font-semibold">
                  {user.name}
                </h2>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Email: <span className="text-[#1363DF]">{user.email}</span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Order:{" "}
                    <span className="text-[#1363DF]">
                      {user.n_orders.toString().padStart(2, "0")}
                    </span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Cart:{" "}
                    <span className="text-[#1363DF]">
                      {user.cartLength.toString().padStart(2, "0")}
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px]">
                <Status user_id={user.id} user_status={user.status} />
                <Role user_id={user.id} user_role={user.role} />
              </div>
            </div>
          </div>
        </div>
        <Courses courses={user.courses} user_id={user.id} />
      </div>
    </div>
  );
};
