"use client";

import { T } from "@/components/translated-text";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../../public/images/quote.svg";
import CommonHeader from "../common/header/CommonHeader";
import CommonSpace from "../common/space/CommonSpace";
import SectionHeader from "../reuseable/SectionHeader";
import { testimonials } from "./testimonial";

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const activeHeight = 500;
  const inactiveHeight = 450;
  const verticalOffset = (activeHeight - inactiveHeight) / 2;

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.swiper
    ) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current as HTMLElement;
      swiperInstance.params.navigation.nextEl = nextRef.current as HTMLElement;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <CommonSpace>
      <div className="w-full max-w-[1606px] mx-auto px-4 md:px-10">
        <SectionHeader
          title=" What Healthcare Teams Are Saying"
          bigTitle="Testimonials"
        />
        <div className="mx-auto mt-10">
          <Swiper
            ref={swiperRef}
            style={{ minHeight: `${activeHeight}px` }}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((t, i) => {
              const isActive = activeIndex === i;

              return (
                <SwiperSlide
                  key={i}
                  className="flex justify-center items-center"
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.swiper.slideNext();
                    }
                  }}
                >
                  <div
                    className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 ease-in-out shadow`}
                    style={{
                      height: `${isActive ? activeHeight : inactiveHeight}px`,
                      backgroundColor: isActive ? "#6B21A8" : "#fff",
                      color: isActive ? "#fff" : "#111827",
                      transform: isActive
                        ? "translateY(0)"
                        : `translateY(${verticalOffset}px)`,
                    }}
                  >
                    {isActive && (
                      <Image
                        src={quote}
                        alt="Quotation mark"
                        className="ml-auto w-6 sm:w-auto"
                      />
                    )}

                    <CommonHeader
                      size="md"
                      className={isActive ? "text-white" : "text-[#353535]"}
                    >
                      <T>{t.quote}</T>
                    </CommonHeader>
                    <div
                      className="border-t pt-4 mt-auto border-gray-200"
                      style={{
                        borderColor: isActive
                          ? "rgba(255,255,255,0.3)"
                          : "#E5E7EB",
                      }}
                    >
                      <CommonHeader
                        size="xl"
                        className={`!font-semibold ${
                          isActive ? "text-white" : "!text-[#353535]"
                        }`}
                      >
                        <T>{t.name}</T>
                      </CommonHeader>
                      <CommonHeader
                        size="sm"
                        className={
                          isActive ? "text-white" : "text-sm !text-[#353535]"
                        }
                      >
                        <T>{t.title}</T>
                      </CommonHeader>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex justify-center mt-6 space-x-4">
            <div
              ref={prevRef}
              className="cursor-pointer w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition"
              aria-label="Previous testimonial"
            >
              &#10094;
            </div>
            <div
              ref={nextRef}
              className="cursor-pointer w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition"
              aria-label="Next testimonial"
            >
              &#10095;
            </div>
          </div>
        </div>
      </div>
    </CommonSpace>
  );
}
