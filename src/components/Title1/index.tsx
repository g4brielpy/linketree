import React from "react";

interface Title1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Title1({ children, ...rest }: Title1Props) {
  return (
    <h1
      {...rest}
      className="text-3xl text-white font-extrabold md:text-4xl lg:text-5xl"
    >
      {children}
    </h1>
  );
}
