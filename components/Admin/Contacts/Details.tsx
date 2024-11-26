"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { deleteContact, getContactDetails } from "@/api/admin/contact/contact";
export const Details = () => {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, isError } = getContactDetails(id);

  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [loadingDelete, setLoadingDelete] = useState(false);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!data) {
    return <p className="text-base">contact not be found</p>;
  }

  const handleDeleteClick = async () => {
    setLoadingDelete(true);
    setMessage(null);

    try {
      await deleteContact(data.id);
      router.push("/admin/contacts");
    } catch (error) {
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <div className="relative">
      <div className="bg-white border border-[#ECECEC] shadow-[0px_0px_15px] shadow-[rgba(0,0,0,0.08)] rounded-[8px] md:py-[25px] xl:px-[25px] lg:px-[20px] md:px-[25px] py-[20px] px-[20px]">
        <div className="border-b border-[#CFD9E4] mb-[15px] pb-[10px]">
          <div className="grow">
            <div className="w-full flex flex-wrap gap-[8px] justify-between items-end">
              <div className="block">
                <h2 className="text-[24px] mb-[5px] font-heading text-[#082A5E] leading-[1.2] font-semibold">
                  {data.name}
                </h2>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Title: <span className="text-[#1363DF]">{data.title}</span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Phone: <span className="text-[#1363DF]">{data.phone}</span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Email: <span className="text-[#1363DF]">{data.email}</span>
                  </span>
                </div>
                <h3 className="text-[20px] mt-[5px] font-heading text-[#082A5E] leading-[1.2] font-semibold">
                  {data.message}
                </h3>
              </div>
              <div className="block">
                <button
                  type="button"
                  onClick={handleDeleteClick}
                  className="rounded-lg bg-[#FF2020] text-white text-center py-[5px] px-[25px] relative"
                  disabled={loadingDelete}
                >
                  {loadingDelete ? "Loading..." : "Delete"}
                </button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
