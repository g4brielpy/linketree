import React from "react";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export function CustomLink({ children, className, ...rest }: CustomLinkProps) {
  return (
    <a
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-amber-50 py-2 font-semibold rounded-sm ${className}`}
    >
      {children}
    </a>
  );
}
