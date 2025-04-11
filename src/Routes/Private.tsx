import React from "react";

interface PrivateProps {
  children: React.ReactNode;
}

export function Private({ children }: PrivateProps) {
  return <>{children}</>;
}
