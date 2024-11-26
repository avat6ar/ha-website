import Link from "next/link";
import React, { Fragment } from "react";

export const PageTitle = ({
  array,
  title,
}: {
  array: ({ name: string; url: string } | string)[];
  title?: string;
}) => {
  return (
    <div className="mb-[15px]">
      <h1 className="md:text-[26px] text-xl font-heading leading-[1.2] text-[#082A5E] font-medium capitalize">
        {title}
      </h1>
      <nav className="flex flex-wrap justify-start items-center text-white gap-[10px_5px] mt-[17px]">
        {array.map((item, index) => (
          <Fragment key={index}>
            {typeof item === "object" ? (
              <Link
                href={item.url}
                className="block text-[18px] text-[#082A5E] leading-[1.4] font-medium capitalize transition-all duration-300 ease-out hover:text-[#1363DF]"
              >
                {item.name}
              </Link>
            ) : (
              <>
                <span className="block text-[18px] text-[#082A5E] leading-[1.4] font-medium capitalize">
                  {item}
                </span>
              </>
            )}
            {index < array.length - 1 ? (
              <span className="leading-[1] text-[16px] font-bold text-[#082A5E] opacity-50">
                /
              </span>
            ) : (
              ""
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
};
