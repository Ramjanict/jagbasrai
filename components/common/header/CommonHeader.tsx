import clsx from "clsx";
import parse from "html-react-parser";
import React, { type ReactNode } from "react";

interface CommonHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  htmlContent?: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  children,
  htmlContent,
  className = "",
  size = "md",
  ...props
}) => {
  const baseStyles = "break-words leading-relaxed";

  const sizeStyles: Record<typeof size, string> = {
    xs: "text-xs leading-4",
    sm: "text-sm leading-5",
    md: "text-base leading-6 font-normal text-black",
    lg: "text-lg leading-7",
    xl: "text-lg sm:text-xl leading-6 sm:leading-7 font-medium text-black",
    "2xl": "text-xl sm:text-2xl leading-4 sm:leading-8 font-bold text-black",
    "3xl": "text-3xl leading-9",
    "4xl":
      "text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-10 md:leading-11 font-bold font-helvetica",
    "5xl":
      "text-3xl sm:text-4xl md:text-5xl leading-[44px] sm:leading-[56px] md:leading-[72px] font-bold font-helvetica",
  };

  const HeadingTag = ["5xl"].includes(size) ? "h1" : "h2";

  return React.createElement(
    HeadingTag,
    { className: clsx(baseStyles, sizeStyles[size], className), ...props },
    htmlContent ? parse(htmlContent) : children,
  );
};

export default CommonHeader;
