import { InstructorDetail } from "@/types";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiFileTextThin } from "react-icons/pi";

export const DetailsCard = ({
  instructorDetails,
}: {
  instructorDetails: InstructorDetail;
}) => {
  return (
    <section className="py-[100px] w-full">
      <div className="container">
        <div className="bg-white border border-[#ECECEC] shadow-[0px_0px_15px] shadow-[rgba(0,0,0,0.08)] rounded-[8px] md:py-[25px] xl:px-[25px] lg:px-[20px] md:px-[25px] py-[20px] px-[20px] flex lg:flex-nowrap flex-wrap items-start gap-[15px_35px]">
          <div className="w-[270px] mr-[35px]">
            <Image
              src={instructorDetails.cover}
              width={270}
              quality={100}
              height={294}
              alt="image"
              className="rounded-[5px]"
            />
          </div>
          <div className="grow">
            <div className="flex items-center justify-between mb-[20px] gap-[20px] md:flex-nowrap flex-wrap">
              <div className="relative">
                <h2 className="text-[24px] mb-[5px] font-heading text-[#082A5E] leading-[1.2] font-semibold">
                  {instructorDetails.name}
                </h2>
                <span className="block font-normal font-heading text-[16px] text-[#1363DF]">
                  {instructorDetails.category}
                </span>
              </div>
              <ul className="flex items-center gap-[6px]">
                {instructorDetails.facebook && (
                  <li className="block">
                    <a
                      href={instructorDetails.facebook}
                      target="_blank"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                )}
                {instructorDetails.linkedin && (
                  <li className="block">
                    <a
                      href={instructorDetails.linkedin}
                      target="_blank"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                )}
                {instructorDetails.youtube && (
                  <li className="block">
                    <a
                      href={instructorDetails.youtube}
                      target="_blank"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                )}
                {instructorDetails.instagram && (
                  <li className="block">
                    <a
                      href={instructorDetails.instagram}
                      target="_blank"
                      className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] text-[#39557E] text-[16px] leading-[0] bg-white transition-all duration-300 ease-out hover:text-white hover:bg-[#1363DF]"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <ul className="flex items-center lg:gap-[20px] md:gap-[12px] gap-[15px] border-b border-[#CFD9E4] mb-[20px] pb-[20px]">
              <li className="flex items-center text-[#5A7093] font-normal leading-none text-[16px]">
                <FaStar className="text-[#F8BC24] mr-[10px]" />(
                {instructorDetails.rate})
              </li>
              {instructorDetails.email && (
                <li className="flex items-center text-[#5A7093] font-normal leading-none text-[16px]">
                  <MdOutlineMailOutline className="text-[#5A7093] mr-[10px]" />(
                  {instructorDetails.email})
                </li>
              )}
              <li className="flex items-center text-[#5A7093] font-normal leading-none text-[16px]">
                <PiFileTextThin className="text-[#5A7093] mr-[10px]" />(
                {instructorDetails.n_courses} Courses)
              </li>
            </ul>
            <h4 className="font-heading mb-[15px] text-[20px] font-medium text-[#082A5E] leading-[1.2]">
              Short Bio:
            </h4>
            <p className="xl:w-[95%] w-full font-body text-[16px] leading-[1.75] font-normal text-[#39557E]">
              {instructorDetails.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
