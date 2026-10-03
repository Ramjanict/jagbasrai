import { T } from "@/components/translated-text";
import CommonHeader from "../common/header/CommonHeader";
import Dot from "./Dot";

interface SectionHeaderProps {
  title?: string;
  bigTitle?: string;
  description?: string;
  className?: string;
  bigClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  bigTitle,
  description,
  className = "",
  bigClassName = "",
}) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-7.5">
      {title && (
        <div className="flex items-center gap-2.5">
          <Dot size="h-1.5 w-1.5" className="!bg-sky" />
          <CommonHeader size="xl" className={className}>
            <T>{title}</T>
          </CommonHeader>
        </div>
      )}
      {bigTitle && (
        <CommonHeader size="4xl" className={bigClassName}>
          <T>{bigTitle}</T>
        </CommonHeader>
      )}
      {description && (
        <CommonHeader size="md">
          <T>{description}</T>
        </CommonHeader>
      )}
    </div>
  );
};

export default SectionHeader;
