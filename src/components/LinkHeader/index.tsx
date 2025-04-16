import { Link, LinkProps } from "react-router-dom";

export function LinkHeader({ children, className, ...rest }: LinkProps) {
  return (
    <Link
      {...rest}
      className={`
        relative text-gray-800
        transition-all duration-300 ease-in-out
        hover:text-blue-600
        after:content-['']
        after:absolute after:-bottom-1 after:left-0
        after:w-0 after:h-[2px]
        after:bg-blue-600
        hover:after:w-full
        after:transition-all after:duration-300
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
