import clsx from "clsx";
import React, { type ReactNode } from "react";

interface CommonButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  shadow?: boolean;
}

const CommonBorder: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  size = "md",
  shadow = false,
  ...props
}) => {
  const baseStyles = "";
  const shadowStyles =
    "shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]";
  const sizeStyles: Record<typeof size, string> = {
    xs: "px-3 py-2 rounded-md bg-[rgba(213,191,223,0.12)] backdrop-blur-[25px] flex flex-col items-center justify-center",
    sm: "p-5 rounded-2xl ",
    md: "p-6  rounded-lg ",
    lg: "p-7.5 rounded-2xl ",
  };

  return (
    <div
      className={clsx(
        baseStyles,
        shadow && shadowStyles,
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CommonBorder;
