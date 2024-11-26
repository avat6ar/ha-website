"use client";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./Links";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useAppSelector } from "@/hooks/hooks";

export const NavBar = ({
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useAppSelector((state) => state.authReducer.authData.user);
  const token = useAppSelector((state) => state.authReducer.authData.token);
  const [loggedInUserSection, setLoggedInUserSection] =
    useState<React.JSX.Element | null>(null);

  useEffect(() => {
    setLoggedInUserSection(
      user && token ? (
        <div className="ml-[19px] xl:block hidden">
          <Link className="flex items-center gap-[5px]" href="/profile">
            <Image
              src={user.image ?? "/images/logo-02.webp"}
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-[#082A5E] block text-[16px] font-medium font-body leading-[1] whitespace-nowrap">
              {user.name}
            </span>
          </Link>
        </div>
      ) : (
        <ul className="xl:flex hidden ml-[19px] items-center gap-[7px]">
          <li className="block relative">
            <Link
              href="/auth/login"
              className="py-[12px] px-[21px] text-[#5A7093] font-medium border border-[#D0DAE9] bg-white capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
            >
              Log In
            </Link>
          </li>
          <li className="block relative">
            <Link
              href="/auth/register"
              className="py-[12px] px-[21px] text-white font-medium bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:text-white hover:bg-[#082A5E] transition-all duration-300 ease-out"
            >
              Create Account
            </Link>
          </li>
        </ul>
      )
    );
  }, [user, token]);

  return (
    <div className="mx-auto w-full relative px-[30px]">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="block">
          <Link href="/" className="flex items-center" prefetch>
            <Image
              src="/images/logo-02.webp"
              width={35}
              height={24}
              quality={100}
              alt="logo"
              className="mr-[7px]"
            />
            <h3 className="text-gray-800 font-heading font-semibold text-[15px] tracking-[2px] leading-[1]">
              Traning & <br /> Consulting
            </h3>
          </Link>
        </div>
        <div className="xl:flex xl:grow hidden">
          <ul className="flex mr-auto ml-[73px] flex-wrap">
            <li className="block relative">
              <NavLink url="/" name="Home" />
            </li>
            <li className="block relative">
              <NavLink url="/about" name="About" />
            </li>
            <li className="block relative">
              <NavLink url="/consulting" name="Consulting" />
            </li>
            <li className="block relative">
              <NavLink url="/instructors" name="Instructors" />
            </li>
            <li className="block relative">
              <NavLink url="/courses" name="courses" />
            </li>
            <li className="block relative">
              <NavLink url="/blog" name="Blog" />
            </li>
            <li className="block relative">
              <NavLink url="/contact" name="Contact" />
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="flex items-center relative pr-[20px] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[2px] after:h-[30px] after:bg-[#B2BDCD]">
            <Link href="/cart" className="block">
              <Image src="/images/cart.svg" width={24} height={24} alt="cart" />
            </Link>
          </div>
          {loggedInUserSection}
          <div className="xl:hidden block ml-[19px] mt-[8px]">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[30px] cursor-pointer leading-[1] text-[#1363DF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="30"
                height="30"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M174 240H66c-36.393 0-66-29.607-66-66V66C0 29.607 29.607 0 66 0h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM66 32c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V66c0-18.748-15.252-34-34-34zM446 240H338c-36.393 0-66-29.607-66-66V66c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM338 32c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V66c0-18.748-15.252-34-34-34zM392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zM174 512H66c-36.393 0-66-29.607-66-66V338c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM66 304c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V338c0-18.748-15.252-34-34-34z"
                    fill="#1363df"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const NavBarAuth = () => {
  const pathname = usePathname();

  const shouldShowLinkAuth = pathname.includes("/login");

  return (
    <div className="container">
      <div className="block">
        <nav className="flex items-center justify-between flex-wrap">
          <Link href="/" className="flex items-center" prefetch>
            <Image
              src="/images/logo-02.webp"
              width={35}
              height={24}
              quality={100}
              alt="logo"
              className="mr-[7px]"
            />
            <h3 className="text-white font-heading font-semibold text-[15px] tracking-[2px] leading-[1]">
              Traning & <br /> Consulting
            </h3>
          </Link>
          <div className="flex items-center gap-[15px]">
            {shouldShowLinkAuth ? (
              <>
                <span className="font-body text-[20px] leading-[1.75] font-normal text-[#39557E] md:block hidden">
                  Don’t have an account?
                </span>
                <Link
                  href="/auth/register"
                  type="button"
                  prefetch
                  className="py-[12px] px-[21px] text-white font-medium border border-[#1363DF] bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="font-body text-[20px] leading-[1.75] font-normal text-[#39557E] md:block hidden">
                  Already have an account?
                </span>
                <Link
                  href="/auth/login"
                  type="button"
                  prefetch
                  className="py-[12px] px-[21px] text-white font-medium border border-[#1363DF] bg-[#1363DF] capitalize inline-block tracking-[0.5px] leading-[1] text-center rounded-[4px] font-body hover:border-[#082A5E] hover:bg-[#082A5E] transition-all duration-300 ease-out"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export const NavBarDashboard = ({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useAppSelector((state) => state.authReducer.authData.user);
  const token = useAppSelector((state) => state.authReducer.authData.token);
  const [loggedInUserSection, setLoggedInUserSection] =
    useState<React.JSX.Element | null>(null);

  useEffect(() => {
    setLoggedInUserSection(
      user && token ? (
        <div className="ml-[19px] xl:block hidden">
          <Link className="flex items-center gap-[5px]" href="/profile">
            <Image
              src={user.image ?? "/images/logo-02.webp"}
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-[#082A5E] block text-[16px] font-medium font-body leading-[1] whitespace-nowrap">
              {user.name}
            </span>
          </Link>
        </div>
      ) : null
    );
  }, [user, token]);

  return (
    <>
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" prefetch>
            <Image
              src="/images/logo-02.webp"
              width={35}
              height={24}
              quality={100}
              alt="logo"
              className="mr-[7px]"
            />
            <h3 className="text-gray-800 font-heading font-semibold text-[15px] tracking-[2px] leading-[1]">
              Traning & <br /> Consulting
            </h3>
          </Link>
          <button
            type="button"
            className="text-[22px] ml-[8px]"
            onClick={() => setSidebar((prev) => !prev)}
          >
            <FiMenu />
          </button>
        </div>
        {loggedInUserSection}
      </nav>
    </>
  );
};
