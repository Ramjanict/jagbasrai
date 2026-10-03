import { type ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={` w-full max-w-[1606px] mx-auto px-4 md:px-10  ${className}`}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;
