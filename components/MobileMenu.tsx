"use client";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { NavMenuLink } from "../components/Links";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/hooks";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) => {
  const user = useAppSelector((state) => state.authReducer.authData.user);
  const token = useAppSelector((state) => state.authReducer.authData.token);
  const [loggedInUserSection, setLoggedInUserSection] =
    useState<boolean>(false);

  useEffect(() => {
    setLoggedInUserSection(user && token ? true : false);
  }, [user, token]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed right-0 top-0 w-[300px] max-w-full h-full z-[99] transition-all duration-[0.3s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] xl:hidden block ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-[101%]"
      }`}
    >
      <nav className="w-full h-full overflow-y-auto overflow-x-hidden bg-white shadow-[-9px_0_14px_0px_rgba(0,0,0,0.06)]">
        <button
          type="button"
          onClick={closeMenu}
          className={`absolute right-[15px] top-[28px] leading-[30px] w-[35px] text-center text-[#1363DF] cursor-pointer p-[8px] z-[10] transition-all duration-[0.5s] ${
            isMobileMenuOpen && "rotate-[360deg]"
          }`}
        >
          <AiOutlineClose className="w-[18px] h-[18px]" />
        </button>
        <div className="relative py-[30px] px-[25px] text-left">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/images/logo-02.webp"
              quality={100}
              width={35}
              height={20}
              alt="logo"
              className="max-w-[35px] mr-[7px]"
            />
            <h3 className="text-gray-800 font-heading font-semibold text-[15px] tracking-[2px] leading-[1]">
              Traning & <br /> Consulting
            </h3>
          </Link>
        </div>
        <div className="block relative">
          <ul className="relative block w-full border-b border-[rgba(0,_0,_0,_0.1)]">
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/" name="Home" />
            </li>
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/about" name="About" />
            </li>
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/consulting" name="Consulting" />
            </li>
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/courses" name="courses" />
            </li>
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/instructors" name="Instructors" />
            </li>
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/blog" name="blog" />
            </li>
            <li
              className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
              onClick={closeMenu}
            >
              <NavMenuLink url="/contact" name="contact" />
            </li>
            {loggedInUserSection && (
              <li
                className="relative block border-t border-[rgba(0,_0,_0,_0.1)]"
                onClick={closeMenu}
              >
                <NavMenuLink url="/profile" name="profile" />
              </li>
            )}
          </ul>
        </div>
        <div className="block relative">
          {!loggedInUserSection && (
            <ul className="flex pt-[30px] px-[20px] justify-center gap-[15px] items-center">
              <li className="block relative">
                <Link
                  href="/auth/login"
                  onClick={closeMenu}
                  className="py-[12px] px-[21px] text-[#5A7093] font-medium border border-[#D0DAE9] bg-white capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body"
                >
                  Log In
                </Link>
              </li>
              <li className="block relative">
                <Link
                  href="/auth/signup"
                  onClick={closeMenu}
                  className="py-[12px] px-[21px] text-white font-medium border border-[#D0DAE9] bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="block relative">
          <ul className="flex justify-center items-center flex-wrap relative text-center pt-[30px] px-[20px] pb-[20px]">
            <li className="relative inline-block mx-[6px] mb-[10px]">
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center w-[40px] h-[40px] relative leading-[32px] text-[16px] text-[#39557E] border border-[#efefef] rounded-[3px]"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="relative inline-block mx-[6px] mb-[10px]">
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center w-[40px] h-[40px] relative leading-[32px] text-[16px] text-[#39557E] border border-[#efefef] rounded-[3px]"
              >
                <BsTwitterX />
              </a>
            </li>
            <li className="relative inline-block mx-[6px] mb-[10px]">
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center w-[40px] h-[40px] relative leading-[32px] text-[16px] text-[#39557E] border border-[#efefef] rounded-[3px]"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="relative inline-block mx-[6px] mb-[10px]">
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center w-[40px] h-[40px] relative leading-[32px] text-[16px] text-[#39557E] border border-[#efefef] rounded-[3px]"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="relative inline-block mx-[6px] mb-[10px]">
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center w-[40px] h-[40px] relative leading-[32px] text-[16px] text-[#39557E] border border-[#efefef] rounded-[3px]"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
