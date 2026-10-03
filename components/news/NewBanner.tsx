"use client";
import banner from "@/public/images/newsBanner.jpg";
import Image from "next/image";
import CommonButton from "../common/button/CommonButton";
import { useScrollToSection } from "../common/custom/useScrollToSection";
import CommonHeader from "../common/header/CommonHeader";
import CommonWrapper from "../common/space/CommonWrapper";
import { T } from "../translated-text";
const NewBanner = () => {
  const { scrollToSection } = useScrollToSection();
  return (
    <CommonWrapper className="sm:py-20">
      <div className=" relative h-[473px] w-full rounded-xl overflow-hidden ">
        <Image
          src={banner}
          alt="banner"
          fill
          className="w-full h-full object-cover "
          priority
        />

        <div className="absolute inset-0  bg-[linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))]" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-12">
          <CommonHeader size="4xl" className="text-white!">
            <T>Discover how</T>
            <span className="text-[#1DC5DA]">
              <T>GoAutomateMD</T>
            </span>
            <T>can transform your healthcare organization.</T>
          </CommonHeader>
          <CommonButton
            onClick={() => scrollToSection("contact-us")}
            variant="primary"
            size="lg"
            className="!px-7.5"
          >
            <T>Request Demo</T>
          </CommonButton>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default NewBanner;
