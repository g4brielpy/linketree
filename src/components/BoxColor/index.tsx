import React from "react";

interface BoxColorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BoxColor({ children, className = "", ...rest }: BoxColorProps) {
  return (
    <div {...rest} className={`${className} flex items-center gap-4`}>
      {children}
    </div>
  );
}
