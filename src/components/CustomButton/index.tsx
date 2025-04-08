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
    <button {...rest} className={`bg-blue-600 ${className}`}>
      {children}
    </button>
  );
}
