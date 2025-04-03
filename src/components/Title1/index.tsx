import React from "react";

interface Title1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Title1({ children, ...rest }: Title1Props) {
  return <h1 {...rest}>{children}</h1>;
}
