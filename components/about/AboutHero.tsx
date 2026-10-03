"use client";

import Image, { StaticImageData } from "next/image";
import CommonHeader from "../common/header/CommonHeader";
import CommonWrapper from "../common/space/CommonWrapper";
import { T } from "../translated-text";

interface AboutHeroProps {
  title: string;
  subtitle?: string;
  image: StaticImageData;
  gradient?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  subtitle,
  image,
  gradient = "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
}) => {
  return (
    <div className="relative w-full h-[669px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0" style={{ background: gradient }}></div>

      <CommonWrapper className="relative h-full">
        <div className="absolute bottom-8 left-4 md:bottom-30 md:left-8 max-w-3xl">
          <CommonHeader size="5xl" className="text-white!">
            <T>{title}</T>
          </CommonHeader>
          {subtitle && (
            <CommonHeader size="xl" className="text-white! ">
              <T>{subtitle}</T>
            </CommonHeader>
          )}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default AboutHero;
