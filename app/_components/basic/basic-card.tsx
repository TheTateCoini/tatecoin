import { BasicCardProps } from "@/helpers/types";
import React from "react";

export default function BasicCard({ icon, label }: BasicCardProps) {
  return (
    <div className="cursor-pointer group w-fit rounded-lg flex items-center justify-center space-x-4 px-7 py-3 bg-gradient-to-br from-purple-600 via-purple-400 to-blue-100">
      {icon}
      <p className="text-gray-100 text-lg font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
