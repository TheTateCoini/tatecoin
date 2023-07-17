import { UsecaseProps } from "@/helpers/types";
import React from "react";

export default function UsecaseCard({
  description,
  icon,
  label,
  bgColor,
  textColor,
}: UsecaseProps) {
  return (
    <div
      className="lg:w-1/3 lg:h-72 h-80 p-10 lg:mb-0 mb-6 rounded-[50px] flex flex-col items-start justify-center bg-opacity-60"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex items-center justify-between w-full">
        <p className="lg:text-2xl text-lg font-semibold tracking-wide uppercase w-fit">
          {label}
        </p>
        {icon}
      </div>
      <p className="lg:text-base text-sm mt-4">{description}</p>
    </div>
  );
}
