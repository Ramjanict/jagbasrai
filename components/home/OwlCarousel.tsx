"use client";
import image1 from "@/public/images/caro1.png";
import image2 from "@/public/images/caro2.png";
import image5 from "@/public/images/halton.svg";
import image4 from "@/public/images/ok.png";
import image3 from "@/public/images/que.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import SectionHeader from "../reuseable/SectionHeader";

const images = [image1, image2, image3, image4, image5];

const OwlCarousel = () => {
  const controls = useAnimation();

  const startAnimation = useCallback(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    startAnimation();
  };

  return (
    <div className="bg-white" aria-label="Trusted Healthcare Partners">
      <SectionHeader title="Healthcare Teams Who Trust Us" />

      <div className="relative overflow-hidden py-12">
        <motion.div
          className="flex gap-16 w-max"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="list"
        >
          {[...images, ...images].map((image, idx) => (
            <div
              key={idx}
              className="relative w-[220px] h-[80px] flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OwlCarousel;
