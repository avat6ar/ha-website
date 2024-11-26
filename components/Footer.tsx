import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FooterLink } from "./Links";

export const Footer = () => {
  return (
    <>
      <div className="pt-[110px] pb-[55px] relative block">
        <div className="container">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="col-span-1">
              <div className="mb-[50px]">
                <div className="mb-[25px]">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/images/logo-02.webp"
                      quality={100}
                      width={60}
                      height={34}
                      alt="logo"
                      className="max-w-[60px] mr-[7px]"
                    />
                    <h3 className="text-white font-heading font-semibold text-[20px] tracking-[2px] leading-[1]">
                      Traning & <br /> Consulting
                    </h3>
                  </Link>
                </div>
                <p className="text-[#B2BDCD] mb-[20px] font-body text-[16px] leading-[1.75] font-normal">
                  Our courses are accredited with an international certificate
                </p>
                <ul className="block w-full">
                  <li className="leading-[1.4] text-[#E7EFFC] uppercase font-medium mb-[13px]">
                    463 7th Ave, NY 10018, USA
                  </li>
                  <li className="leading-[1.4] text-[#E7EFFC] uppercase font-medium mb-[13px]">
                    +123 88 9900 456
                  </li>
                  <li className="flex mt-[18px] gap-[20px] text-[#E7EFFC] font-medium leading-[1.4]">
                    <a
                      href="#"
                      className="inline-block text-[#E7EFFC] text-[15px]"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="inline-block text-[#E7EFFC] text-[15px]"
                    >
                      <BsTwitterX />
                    </a>
                    <a
                      href="#"
                      className="inline-block text-[#E7EFFC] text-[15px]"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="#"
                      className="inline-block text-[#E7EFFC] text-[15px]"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="inline-block text-[#E7EFFC] text-[15px]"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-[50px] lg:ml-[85px] md:ml-[30px] ml-0">
                <h4 className="text-[24px] mb-[28px] text-white font-heading font-semibold leading-[1.2]">
                  Resources
                </h4>
                <ul className="flex flex-col gap-[8px]">
                  <li className="block">
                    <FooterLink url="/about" name="About" />
                  </li>
                  <li className="block">
                    <FooterLink url="/contact" name="Contact" />
                  </li>
                  <li className="block">
                    <FooterLink url="/contact" name="Help Center" />
                  </li>
                  <li className="block">
                    <FooterLink url="#" name="Refund" />
                  </li>
                  <li className="block">
                    <FooterLink url="#" name="Conditions" />
                  </li>
                  <li className="block">
                    <FooterLink url="#" name="Privacy Policy" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-[50px] lg:ml-[85px] ml-0">
                <h4 className="text-[24px] mb-[28px] text-white font-heading font-semibold leading-[1.2]">
                  Courses
                </h4>
                <ul className="flex flex-col gap-[8px]">
                  <li className="block">
                    <FooterLink url="/courses" name="Life Coach" />
                  </li>
                  <li className="block">
                    <FooterLink url="/courses" name="Business Coach" />
                  </li>
                  <li className="block">
                    <FooterLink url="/courses" name="Health Coach" />
                  </li>
                  <li className="block">
                    <FooterLink url="/courses" name="Development" />
                  </li>
                  <li className="block">
                    <FooterLink url="/courses" name="Web Design" />
                  </li>
                  <li className="block">
                    <FooterLink url="/courses" name="SEO Optimize" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-[50px]">
                <h4 className="text-[24px] mb-[28px] text-white font-heading font-semibold leading-[1.2]">
                  Working Hours
                </h4>
                <div className="block">
                  <div className="flex justify-between gap-[30px] relative text-[#B2BDCD] font-medium pb-[15px] mb-[15px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#39557E]">
                    <span className="font-semibold text-white">Mon - Fri</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-[30px] relative text-[#B2BDCD] font-medium pb-[15px] mb-[15px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#39557E]">
                    <span className="font-semibold text-white">Mon - Fri</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-[30px] relative text-[#B2BDCD] font-medium pb-[15px] mb-[15px]">
                    <span className="font-semibold text-white">Mon - Fri</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2A4774] py-[30px]">
        <div className="container">
          <div className="flex justify-between md:flex-row flex-col items-center">
            <div className="block md:text-left text-center">
              <p className="capitalize text-[#8798B3] text-[15px] font-heading leading-[1.75] font-normal">
                Copyright © 2023 eduvalt. All rights reserved.
              </p>
            </div>
            <ul className="flex justify-end gap-x-[15px]">
              <li className="block">
                <a href="#" className="text-[#8798B3] text-[15px] font-heading">
                  Privacy Policy
                </a>
              </li>
              <li className="flex gap-x-[15px] items-center before:content-['.'] before:text-[#8798B3]">
                <a href="#" className="text-[#8798B3] text-[15px] font-heading">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
