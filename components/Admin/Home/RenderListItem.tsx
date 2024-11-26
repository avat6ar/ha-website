import React from "react";
import { IconType } from "react-icons";

export const RenderListItem = ({
  icon,
  title,
  color,
  value,
}: {
  icon: IconType;
  title: string;
  color: string;
  value: number | string | undefined;
}) => (
  <li className="flex flex-col gap-[8px] items-center justify-center p-5 bg-white rounded-lg">
    <span
      className={`w-[50px] h-[50px] rounded-full flex items-center justify-center bg-opacity-20 bg-[${color}]`}
    >
      {React.createElement(icon, {
        className: `text-[28px] text-[${color}]`,
      })}
    </span>
    <h3 className="text-[20px] font-heading text-[#082A5E] leading-[1.2] font-medium">
      {title}
    </h3>
    <span className="text-[#1363DF] font-body text-[18px] leading-[1] font-medium">
      {value}
    </span>
  </li>
);
