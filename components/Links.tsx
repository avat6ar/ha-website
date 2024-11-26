"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHashtag } from "react-icons/fa";

type LinkProps = {
  url: string;
  name: string;
  class?: any;
};

export const NavLink = ({
  url,
  name,
  class: customClass = null,
}: LinkProps) => {
  const pathname = usePathname();

  const isActive = pathname == url;

  return (
    <Link
      href={url}
      passHref
      prefetch
      className={`text-[16px] font-normal capitalize py-[37px] px-[18px] flex gap-2 items-center justify-center relative z-[1] font-heading hover:text-[#1363DF] leading-[1] transition-all duration-300 ease-out ${
        isActive ? "text-[#1363DF]" : "text-[#082A5E]"
      } ${customClass}`}
    >
      {name}
    </Link>
  );
};

export const NavMenuLink = ({ url, name }: LinkProps) => {
  const pathname = usePathname();

  const isActive = pathname == url;

  return (
    <Link
      href={url}
      passHref
      prefetch
      className={`text-[16px] font-medium capitalize py-[10px] px-[25px] relative font-heading leading-[1.5] block before:absolute before:left-0 before:top-0 before:transition-all before:duration-500 before:w-[2px] before:bg-[#1363DF] ${
        isActive ? "text-[#1363DF] before:h-full" : "text-[#082A5E] before:h-0"
      }`}
    >
      {name}
    </Link>
  );
};

export const FooterLink = ({ url, name }: LinkProps) => {
  return (
    <Link
      href={url}
      passHref
      prefetch
      className="relative inline-block font-medium text-[#B2BDCD] transition-all duration-[0.5s] ease-out hover:pl-[20px] hover:text-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[3px] before:rounded-[50px] before:bg-[#1363DF] before:transition-all before:duration-[0.5s] before:ease-out hover:before:w-[12px]"
    >
      {name}
    </Link>
  );
};

export const SidebarLink = ({ url, name }: { url: string; name: string }) => {
  const pathname = usePathname();

  const isActive = pathname == url;

  return (
    <Link
      href={url}
      className={`text-[16px] font-medium capitalize py-[14px] px-[15px] rounded flex gap-[15px] items-center font-body hover:bg-[#f6f9ff] hover:text-[#1363DF] leading-[1] transition-all duration-300 ease-out ${
        isActive ? "text-[#1363DF] bg-[#f6f9ff]" : "text-[#082A5E] bg-white"
      }`}
    >
      <FaHashtag />
      {name}
    </Link>
  );
};
