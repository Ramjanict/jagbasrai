import { FC, ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

const IconButton: FC<IconButtonProps> = ({
  children,
  className = "",
  "aria-label": ariaLabel,

  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white/12 p-2 rounded-full text-white cursor-pointer flex items-center justify-center ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default IconButton;
