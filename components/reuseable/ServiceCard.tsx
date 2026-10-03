import { T } from "@/components/translated-text";
import Image, { StaticImageData } from "next/image";

import { FC } from "react";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import Dot from "./Dot";

interface ServiceCardProps {
  image?: string | StaticImageData;
  title: string;
}
const ServiceCard: FC<ServiceCardProps> = ({ image, title }) => {
  return (
    <CommonBorder
      size="xs"
      className="h-full flex flex-col justify-between w-full"
    >
      {/* Top Dots */}
      <div className="w-full flex justify-between">
        <Dot size="h-1.5 w-1.5" color="!bg-purple" />
        <Dot size="h-1.5 w-1.5" color="!bg-purple" />
      </div>

      {/* Content */}
      <div className="w-[190px] mx-auto flex flex-col items-center gap-4 py-12">
        {image && (
          <div className="w-full h-[70px] relative">
            <Image
              src={image}
              alt={`${title} icon`}
              fill
              sizes="190px"
              className="object-contain"
              priority
            />
          </div>
        )}

        <CommonHeader size="xl" className="text-center">
          <T>{title}</T>
        </CommonHeader>
      </div>

      {/* Bottom Dots */}
      <div className="w-full flex justify-between">
        <Dot size="h-1.5 w-1.5" color="!bg-purple" />
        <Dot size="h-1.5 w-1.5" color="!bg-purple" />
      </div>
    </CommonBorder>
  );
};

export default ServiceCard;
