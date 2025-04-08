import React from "react";

interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CustomInput({ className = "", ...props }: CustomInputProps) {
  return (
    <input
      type="text"
      className={`
        w-full h-10 px-5 rounded-md
        bg-gray-800 text-white 
        font-semibold border-2 border-amber-500/40
        transition-all duration-300 ease-in-out
        focus:border-amber-500 focus:outline-none
        ${className}
      `}
      {...props}
    />
  );
}
