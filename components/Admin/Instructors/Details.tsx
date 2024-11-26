"use client";
import { useState } from "react";
import { Courses } from "../Courses";
import { useParams, useRouter } from "next/navigation";
import {
  deleteInstructor,
  getInstructorDetails,
} from "@/api/admin/Instructors/instructor";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export const Details = () => {
  const params = useParams();
  const id = params.id;

  const { data: instructor, isLoading } = getInstructorDetails(id);
  const router = useRouter();
  const [message, setMessage] = useState<Record<string, string> | null>();
  const [loadingDelete, setLoadingDelete] = useState(false);

  if (isLoading) {
    return <p className="text-base">Loading...</p>;
  }

  if (!instructor) {
    return <p className="text-base">instructor not be found</p>;
  }

  const courses = instructor.courses;

  const handleDeleteClick = async () => {
    setLoadingDelete(true);
    setMessage(null);

    try {
      await deleteInstructor(instructor.id);
      router.push("/admin/instructors");
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
          <div className="flex-[0_0_auto] w-[270px] md:w-auto lg:mb-0 mb-[25px] lg:mx-0 mx-auto text-center">
            <Image
              src={instructor.cover}
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
                  {instructor.name}
                </h2>
                <div className="flex flex-wrap gap-[10px]">
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Category:{" "}
                    <span className="text-[#1363DF]">
                      {instructor.category}
                    </span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Experience:{" "}
                    <span className="text-[#1363DF]">
                      {instructor.experience}
                    </span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Rate:{" "}
                    <span className="text-[#1363DF]">{instructor.rate}</span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Students:{" "}
                    <span className="text-[#1363DF]">
                      {instructor.n_students}
                    </span>
                  </span>
                  <span className="block font-normal font-heading text-[16px] text-gray-600">
                    Email:{" "}
                    <span className="text-[#1363DF]">{instructor.email}</span>
                  </span>
                </div>
                <ul className="flex items-center gap-[6px] mt-[8px]">
                  {instructor.facebook && (
                    <li className="block">
                      <a
                        href={instructor.facebook}
                        target="_blank"
                        className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                  )}
                  {instructor.linkedin && (
                    <li className="block">
                      <a
                        href={instructor.linkedin}
                        target="_blank"
                        className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  )}
                  {instructor.youtube && (
                    <li className="block">
                      <a
                        href={instructor.youtube}
                        target="_blank"
                        className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                  )}
                  {instructor.instagram && (
                    <li className="block">
                      <a
                        href={instructor.instagram}
                        target="_blank"
                        className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex gap-[8px]">
                <button
                  type="button"
                  onClick={handleDeleteClick}
                  className="rounded-lg bg-[#FF2020] text-white text-center py-[5px] px-[25px] relative"
                  disabled={loadingDelete}
                >
                  {loadingDelete ? "Loading..." : "Delete"}
                </button>
                <Link
                  href={`/admin/instructors/update/${instructor.id}`}
                  className="rounded-lg bg-[#1363DF] text-white text-center py-[5px] px-[25px] relative"
                >
                  Update
                </Link>
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
          <p className="mt-2 text-pink-600 text-base text-center">
            Warning: Deleting this instructor will also delete associated courses.
          </p>
        </div>
        <Courses courses={courses} />
      </div>
    </div>
  );
};
