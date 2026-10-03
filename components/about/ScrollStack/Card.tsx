"use client";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSpace from "@/components/common/space/CommonSpace";
import CommonWrapper from "@/components/common/space/CommonWrapper";
import SectionHeader from "@/components/reuseable/SectionHeader";
import { T } from "@/components/translated-text";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { AiOutlineMinus } from "react-icons/ai";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  tag?: string;
  title: string;
  description: string;
  features: FeatureItem[];
  backgroundImage?: string | StaticImageData;
}

const AICard: React.FC<FeatureSectionProps> = ({
  tag = "Features",
  title,
  description,
  features,
  backgroundImage,
}) => {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className={`sticky top-20 flex h-screen w-full items-center justify-center`}
    >
      <motion.div className="relative flex h-full w-full origin-top flex-col ">
        <section
          className=" w-full h-full  bg-cover bg-center text-white"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 101.33%)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
          }}
        >
          <CommonSpace>
            <CommonWrapper className=" flex items-start gap-3">
              <div className=" w-full md:w-1/3 text-white!">
                <SectionHeader
                  className="text-white!"
                  title={title}
                  bigTitle={tag}
                  bigClassName="!text-[#FAFAFA]"
                />
              </div>

              <div className="relative flex w-full md:w-2/3 pl-3">
                <div className="absolute left-0 top-0 h-[750px] w-[1px] bg-white/50"></div>

                {/* Content */}
                <div className="flex-1">
                  <CommonHeader
                    size="md"
                    className="!text-[#FAFAFA] border-b border-white/30 pb-12"
                  >
                    <T>{description}</T>
                  </CommonHeader>
                  <CommonHeader size="xl" className="text-white!/80 mb-10 mt-2">
                    <T> Features</T>
                  </CommonHeader>

                  <div className="space-y-4">
                    {features.map((item, i) => (
                      <div
                        key={i}
                        className="border-b border-white/30 pb-4.5 last:border-0"
                      >
                        <div className="flex items-start gap-[2px]  ">
                          <span className="text-white text-2xl">
                            <AiOutlineMinus />
                          </span>

                          <CommonHeader className="text-white! !font-bold">
                            <T>{`${item.title}:`}</T>

                            <span className="text-white!/80">
                              <T>{item.description}</T>
                            </span>
                          </CommonHeader>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CommonWrapper>
          </CommonSpace>
        </section>
      </motion.div>
    </div>
  );
};

export default AICard;
