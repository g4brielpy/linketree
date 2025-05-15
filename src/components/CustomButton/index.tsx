import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CustomButton({
  children,
  className = "",
  ...rest
}: CustomButtonProps) {
  return (
    <button
      {...rest}
      className={`
        bg-blue-600 text-white 
        w-full h-10 px-5 rounded-md
        font-semibold border-2 border-transparent
        transition-all duration-300 ease-in-out
        hover:border-blue-300 focus:border-blue-400
        focus:outline-none
        ${className}
      `}
    >
      {children}
    </button>
  );
}
