"use client";

import thumbnails1 from "@/public/images/1.jpg";
import thumbnails2 from "@/public/images/2.jpg";
import thumbnails3 from "@/public/images/3.jpg";
import { motion } from "framer-motion";
import CommonSpace from "../common/space/CommonSpace";
import CommonWrapper from "../common/space/CommonWrapper";
import SectionHeader from "../reuseable/SectionHeader";
import CaseStudyCard, { CaseStudyCardProps } from "./CaseStudyCard";
const studies: CaseStudyCardProps[] = [
  {
    description: "Reduce diagnostic imaging time from 10 days to less than 5",
    video: "/video/Case-Study-1.mp4",
    thumbnail: thumbnails2.src,
  },
  {
    description:
      "Linking HL7 orders with physician reports, eliminating this tedious step",
    video: "/video/Case-Study-2.mp4",
    thumbnail: thumbnails3.src,
  },
  {
    description:
      "Providing researchers with anonymized diagnostic images faster",
    video: "/video/Case-Study-3.mp4",
    thumbnail: thumbnails1.src,
  },
];
const CaseStudies = () => {
  return (
    <div className="bg-[#F7F2FA]" id="case-studies">
      <CommonWrapper>
        <CommonSpace>
          <SectionHeader title="Clinical Impact" bigTitle="Case Studies" />

          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-16 pt-12">
            {studies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <CaseStudyCard
                  description={study.description}
                  video={study.video}
                  thumbnail={study.thumbnail}
                />
              </motion.div>
            ))}
          </div>
        </CommonSpace>
      </CommonWrapper>
    </div>
  );
};

export default CaseStudies;
