"use client";

import { T } from "@/components/translated-text";
import { motion } from "framer-motion";
import Image from "next/image";
import check from "../../public/images/check.svg";
import doctorImage from "../../public/images/man.png";
import CommonBorder from "../common/custom/CommonBorder";
import CommonHeader from "../common/header/CommonHeader";
import CommonSpace from "../common/space/CommonSpace";
import CommonWrapper from "../common/space/CommonWrapper";
import Dot from "../reuseable/Dot";
import SectionHeader from "../reuseable/SectionHeader";

const focusAreas = [
  {
    title: "Intelligent Automation",
    description:
      "Streamlining clinical and administrative workflows to eliminate manual, repetitive tasks and reduce errors.",
  },
  {
    title: "System Integration & Interoperability",
    description:
      "Connecting healthcare platforms, EHRs, labs, and medical systems for seamless data exchange and continuity of care.",
  },
  {
    title: "Agentic AI & Predictive Insights",
    description:
      "Using advanced AI agents to automate decision support, forecasting, and process optimization.",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernizing legacy healthcare operations with adaptable, cloud-based automation solutions.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Enabling faster processes, reduced delays, and better capacity utilization across healthcare networks.",
  },
  {
    title: "Data Quality, Compliance & Governance",
    description:
      "Streamlining clinical and administrative workflows to eliminate manual, repetitive tasks and reduce errors.",
  },
  {
    title: "Patient-Centered Outcomes",
    description:
      "Streamlining clinical and administrative workflows to eliminate manual, repetitive tasks and reduce errors.",
  },
];

const stats = [
  { value: "1M+", label: "DICOM images processed" },
  { value: "500K", label: "Data extracted from faxed requisitions" },
  { value: "1.5M+", label: "Patient population supported by GoAutomateMD" },
  {
    value: "100+",
    label:
      "Hours saved by frontline staff every week, meaning less paperwork and more time with patients.",
  },
];

// Animation variants
const containerVariants: import("framer-motion").Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // time gap between each item drop
    },
  },
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: ["easeOut"],
    },
  },
};

const HealthcareDesign = () => {
  return (
    <CommonWrapper className="">
      <CommonSpace>
        <SectionHeader title="Overview" bigTitle="Key Areas of Focus" />

        <div className="w-full flex flex-col lg:flex-row items-stretch  gap-16 pt-6">
          <motion.div
            className="w-full lg:w-2/3 space-y-1.5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CommonBorder size="md" className="bg-[#FBFAFD] space-y-5 h-full">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-1.5"
                >
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={check}
                      alt="Checkmark icon"
                      className="mt-1 object-cover"
                      width={20}
                      height={20}
                    />
                  </motion.div>
                  <div>
                    <CommonHeader size="xl" className="!font-semibold">
                      <T>{area.title}</T>
                    </CommonHeader>
                    <CommonHeader size="md">
                      <T>{area.description}</T>
                    </CommonHeader>
                  </div>
                </motion.div>
              ))}
            </CommonBorder>
          </motion.div>

          <div className="w-full lg:w-1/3 flex items-center relative z-10 h-[400px] lg:h-[500px]">
            <div className="bg-purple w-[50%] h-full absolute top-0 right-0 rounded-r-2xl" />
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full z-20 relative"
            >
              <Image
                src={doctorImage}
                alt="Smiling doctor representing AI-powered hospital automation"
                priority
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </div>
        </div>

        <div className=" sm:pt-20 w-full  sm:w-[80%] mx-auto">
          <CommonHeader
            size="2xl"
            className=" text-center !text-2xl !leading-8 pb-7.5"
          >
            <T>
              We are passionate about empowering health organizations to become
              as efficient as possible.
            </T>
          </CommonHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 auto-rows-fr">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full h-full"
              >
                <CommonBorder
                  size="xs"
                  className="text-center border border-[#D0FAFF] !shadow-[0_1px_24px_0_rgba(0,0,0,0.04)] flex flex-col justify-between h-full"
                >
                  <div className="w-full flex justify-between">
                    <Dot size="h-1.5 w-1.5" color="!bg-purple" />
                    <Dot size="h-1.5 w-1.5" color="!bg-purple" />
                  </div>

                  <div className="w-full flex justify-center flex-col items-center gap-4 py-6 grow">
                    <CommonHeader size="4xl" className="!text-purple ">
                      {stat.value}
                    </CommonHeader>
                    <CommonHeader
                      size="md"
                      className="!font-semibold !text-center"
                    >
                      <T>{stat.label}</T>
                    </CommonHeader>
                  </div>

                  <div className="w-full flex justify-between font-geist">
                    <Dot size="h-1.5 w-1.5" color="!bg-purple" />
                    <Dot size="h-1.5 w-1.5" color="!bg-purple" />
                  </div>
                </CommonBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </CommonSpace>
    </CommonWrapper>
  );
};

export default HealthcareDesign;
