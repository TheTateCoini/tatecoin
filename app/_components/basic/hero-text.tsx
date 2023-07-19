import { HeroTextProps } from "@/helpers/types";
import React from "react";

export default function HeroText({ subtitle, title }: HeroTextProps) {
  return (
    <div className="flex flex-col items-center text-center lg:w-2/3 lg:mt-20">
      <p className="text-5xl tracking-wide">{title}</p>
      <p className="opacity-60 leading-relaxed tracking-wide mt-6">
        {subtitle}
      </p>
    </div>
  );
}
