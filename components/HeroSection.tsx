import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import main from "@/app/main.module.css";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export const HeroSection = ({
  array,
  title,
}: {
  array: ({ name: string; url: string } | string)[];
  title?: string;
}) => {
  return (
    <section
      className={`pt-[105px] pb-[110px] relative z-[1] ${main.banner} before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#031227] before:opacity-80 before:z-[-1]`}
    >
      <div className="container">
        <div className="block">
          <h3 className="md:text-[44px] text-[32px] text-white font-semibold capitalize leading-[1.2] font-heading">
            {title}
          </h3>
          <nav className="flex flex-wrap justify-start items-center text-white gap-[10px_5px] mt-[17px]">
            {array.map((item, index) => (
              <Fragment key={index}>
                {typeof item === "object" ? (
                  <Link
                    href={item.url}
                    className="block text-[18px] text-[#B6CFF5] leading-[1.4] font-normal capitalize"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <span className="block text-[18px] text-white leading-[1.4] font-normal capitalize">
                      {item}
                    </span>
                  </>
                )}
                {index < array.length - 1 ? (
                  <span className="leading-[1] text-[16px] font-bold mt-[2px] text-white opacity-50">
                    <IoIosArrowForward />
                  </span>
                ) : (
                  ""
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
