import clsx from "clsx";
import React from "react";

interface DotProps {
  size?: string;
  color?: string;
  className?: string;
}

const Dot: React.FC<DotProps> = ({
  size = "h-1 w-1",
  color = "bg-black",
  className = "",
}) => {
  return (
    <span
      className={clsx("rounded-full inline-block", size, color, className)}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default Dot;
