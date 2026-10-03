"use client";
import { T } from "@/components/translated-text";
import Image from "next/image";
import React from "react";
import women from "../../public/images/women.png";
import { useWindowWidth } from "../common/custom/WindowWidth";
import CommonHeader from "../common/header/CommonHeader";
import CommonSpace from "../common/space/CommonSpace";
import CommonWrapper from "../common/space/CommonWrapper";
import SectionHeader from "../reuseable/SectionHeader";
import CircleDesign from "./CircleDesign";

interface Product {
  title: string;
  description: string;
}

const productsLeft: Product[] = [
  {
    title: "GoAutomateDI",
    description:
      "Built for Diagnostic Imaging to go fully paperless with digital, AI-powered protocoling that boosts efficiency and improves accuracy.",
  },
  {
    title: "GoAutomateRX",
    description:
      "Designed for Pharmacies to automate prescription extraction and streamline integration with existing hospital systems.",
  },
  {
    title: "GoAutomateLAB",
    description:
      "Designed for Laboratory departments to eliminate manual forms and pneumatic tubes by submitting results through a fully automated digital workflow.",
  },
];

const productsRight: Product[] = [
  {
    title: "GoAutomateER",
    description:
      "Purpose-built to automate ER workflows, with access to blood reports, pull prior patient information, and medication details, reducing delays and improving clinical efficiency.",
  },
  {
    title: "GoAutomateCARD",
    description:
      "Designed for Clinical Cardiology to streamline workflows, reduce administrative steps, and improve care coordination.",
  },
  {
    title: "GoAutomateDICOM",
    description:
      "Designed to enhance your PACS by automatically anonymizing DICOM images and routing them through a high-performance, enterprise-grade server.",
  },
];

const ArgenticProducts: React.FC = () => {
  const width = useWindowWidth();
  const radius = width > 768 ? 196 : 150;
  return (
    <section
      className="bg-[rgba(122,32,162,0.06)]  "
      id="products"
      aria-label="GoAutomateMD Agentic AI Products"
    >
      <CommonSpace>
        <CommonWrapper>
          <SectionHeader
            title="Products"
            bigTitle="GoAutomateMD Agentic AI Products"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 pt-6 lg:pt-20 ">
            <div className="flex flex-col justify-between space-y-12 w-full lg:max-w-md lg:text-right">
              {productsLeft.map((item, i) => (
                <div
                  key={item.title}
                  className={`${i === 0 && "lg:translate-x-20"} ${i === 1 && "lg:translate-x-6"} ${i === 2 && "lg:translate-x-8"}`}
                >
                  <CommonHeader size="xl">
                    <T>{item.title}</T>
                  </CommonHeader>
                  <CommonHeader size="md">
                    <T>{item.description}</T>
                  </CommonHeader>
                  <div
                    className={`h-[2px] bg-[#4fd1d9] mt-[21px] ${i === 2 && "lg:translate-x-8 hidden lg:block"}`}
                  ></div>
                </div>
              ))}
            </div>

            <div className="relative flex items-center justify-center my-2 lg:mt-30">
              <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[417px] md:h-[417px]">
                <div>
                  <CircleDesign
                    radius={radius}
                    pointCount={6}
                    circleColor="#7A20A2"
                    pointColor="#24C6DA"
                  />
                </div>

                <div className="absolute rounded-full border-[4px] border-purple w-[150px] h-[150px] md:w-[200px]  md:h-[200px] bg-[#E9E1F3]"></div>

                <div className="z-10 absolute top-5 md:top-9">
                  <div className="w-[150px] h-[150px]  md:w-[200px]  md:h-[200px]  relative">
                    <Image
                      src={women}
                      alt="Female doctor representing AI-powered products"
                      className="rounded-full object-cover z-50 "
                      priority
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                </div>
                {/* <div className="z-50! absolute top-17 md:top-24 w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                  <Image
                    src={women}
                    alt="Female doctor representing AI-powered products"
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="rounded-full object-cover"
                    priority
                  />
                </div> */}
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-12 w-full lg:max-w-md text-left">
              {productsRight.map((item, i) => (
                <div
                  key={item.title}
                  className={`${i === 0 && "lg:-translate-x-20"} ${i === 1 && "lg:-translate-x-6"} ${i === 2 && "lg:-translate-x-8"}`}
                >
                  <CommonHeader size="xl">
                    <T>{item.title}</T>
                  </CommonHeader>
                  <CommonHeader size="md">
                    <T>{item.description}</T>
                  </CommonHeader>

                  <div
                    className={`h-[2px] bg-[#4fd1d9] mt-[21px]  ${i === 2 && "lg:-translate-x-8 hidden lg:block"} `}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </CommonWrapper>
      </CommonSpace>
    </section>
  );
};

export default ArgenticProducts;
