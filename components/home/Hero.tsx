"use client";
import { T } from "@/components/translated-text";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CommonHeader from "../common/header/CommonHeader";
import CommonWrapper from "../common/space/CommonWrapper";
import Dot from "../reuseable/Dot";

const headerSlides = [
  `Imagine running your hospital without a single sheet of paper. Now you can, faster and simpler than ever, driven by intelligent automation.`,
  `Turn data into decisions using intelligent dashboards and automated workflows that reduce delays and free clinicians to care for patients.`,
  `Scale your operations by letting AI handle the logistics. We route and prioritize every request so your clinicians can do what they do best.`,
];

const fixedCardTitles = ["Enhance Patient Access", "Reduce Clinical Pressure"];

const cardDescriptionsBySlide = [
  [
    "Smart heatmaps route requests to the most available sites, optimized by real-time demand, not just distance.",
    "Eliminate the need for staff to enter data into your hospital or clinical system.",
  ],
  [
    "Automated triage surfaces the right service at the right time, reducing no-shows and wait times.",
    "Integrated forms and autopopulated records reduce duplicated admin work for clinical teams.",
  ],
  [
    "Predictive scheduling and dynamic routing increase utilization without overloading staff.",
    "Background automation and AI assistants cut admin tasks so clinicians spend more time with patients.",
  ],
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const slidesCount = headerSlides.length;

  const goNext = () => setIndex((i) => (i + 1) % slidesCount);
  const goPrev = () => setIndex((i) => (i - 1 + slidesCount) % slidesCount);

  useEffect(() => {
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full lg:h-screen flex flex-col justify-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(46,33,105,0.35) 0%, rgba(6,0,34,0.88) 100%),linear-gradient(0deg, rgba(122,32,162,0.6) 0%, rgba(122,32,162,0.6) 100%)`,
        }}
      ></div>

      <CommonWrapper>
        <div className="relative z-10 flex flex-col gap-6 lg:gap-12">
          <div className="max-w-[1073px] overflow-hidden" aria-hidden={false}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${slidesCount * 100}%`,
                transform: `translateX(-${(index * 100) / slidesCount}%)`,
              }}
            >
              {headerSlides.map((text, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 px-4 sm:px-6"
                  style={{ width: `${100 / slidesCount}%` }}
                >
                  <CommonHeader size="5xl" className="">
                    <T>{text}</T>
                  </CommonHeader>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between items-center lg:items-baseline-last gap-6 lg:gap-12 ">
            <div className="w-full flex-col lg:flex-row  flex gap-6">
              {fixedCardTitles.map((title, idx) => (
                <div
                  key={idx}
                  className=" lg:min-w-[500px] rounded-xl bg-[rgba(255,255,255,0.11)] backdrop-blur-[5px] p-6 flex flex-col justify-between gap-4"
                >
                  <div className="flex justify-between">
                    <Dot size="h-1.5 w-1.5" color="!bg-white" />
                    <Dot size="h-1.5 w-1.5" color="!bg-white" />
                  </div>

                  <div>
                    <CommonHeader size="2xl" className="text-white! mb-2 ">
                      <T>{title}</T>
                    </CommonHeader>

                    <div className="relative min-h-20">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${index}-${idx}`}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="absolute top-0 left-0 w-full"
                        >
                          <CommonHeader
                            size="xl"
                            className="!font-normal !text-[#C6B8D8] leading-relaxed text-sm sm:text-base"
                          >
                            <T>{cardDescriptionsBySlide[index][idx]}</T>
                          </CommonHeader>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Dot size="h-1.5 w-1.5" color="!bg-white" />
                    <Dot size="h-1.5 w-1.5" color="!bg-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pb-6 lg:pb-0 ">
              <button
                onClick={goPrev}
                className="border-2 border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.11)] backdrop-blur-[25px]
                cursor-pointer text-white 
                rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center 
                hover:scale-110 transition-all duration-200"
                aria-label="Previous"
              >
                <FaArrowLeft className="text-xl md:text-2xl" />
              </button>

              <button
                onClick={goNext}
                className="border-2 border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.11)] backdrop-blur-[25px]
                cursor-pointer text-white 
                rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center 
                hover:scale-110 transition-all duration-200"
                aria-label="Next"
              >
                <FaArrowRight className="text-xl md:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Hero;
