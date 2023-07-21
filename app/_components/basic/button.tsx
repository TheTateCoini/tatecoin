import { ButtonProps } from "@/helpers/types";
import React from "react";

export default function Button({
  loading,
  label,
  labelColor,
  onPress,
  bg,
  disabled,
}: ButtonProps) {
  return (
    <div
      className={`${
        disabled && "opacity-40"
      } hover:opacity-60 w-fit cursor-pointer rounded-xl px-6 py-4 shadow-sm shadow-dark/30`}
      style={{
        backgroundColor: bg,
      }}
      onClick={onPress}
    >
      {loading ? (
        <div className={`border-2 border-[white]`} />
      ) : (
        <p style={{ color: labelColor }} className={``}>
          {label}
        </p>
      )}
    </div>
  );
}
