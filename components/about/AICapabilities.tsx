"use client";
import anonymization from "@/public/images/anonymization.png";
import audio from "@/public/images/audio.png";
import clinical from "@/public/images/clinical.jpg";
import large from "@/public/images/large.png";
import natural from "@/public/images/natural.png";
import optical from "@/public/images/optical.png";
import patient from "@/public/images/patient.png";
import predictive from "@/public/images/predictive.png";
import prescription from "@/public/images/prescription.png";
import vision from "@/public/images/vision.png";
import Image, { StaticImageData } from "next/image";
import Masonry from "react-masonry-css";
import CommonHeader from "../common/header/CommonHeader";
import { T } from "../translated-text";
interface AICard {
  title: string;
  description: string;
  image?: string | StaticImageData;
  height?: string;
  gradient?: string;
  isHover?: boolean;
}

const aiFeatures: AICard[] = [
  {
    title: "Computer Vision",
    description:
      "Vision models intelligently scan medical documents and images, flag potential issues, and assist with diagnosis, helping both clinicians and AI tools to process information accurately and efficiently.",
    image: vision,
    height: "h-[280px]",
    gradient:
      "bg-[linear-gradient(102deg,rgba(0,0,0,0.4)_31.78%,rgba(0,0,0,0.4)_58.71%)]",
    isHover: false,
  },
  {
    title: "Audio Models",
    description:
      "Advanced audio transcription technologies based on trained model language pipelines analyze voice recordings, enabling seamless communication between healthcare providers and patients.",
    image: audio,
    height: "h-[180px]",
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
    isHover: false,
  },
  {
    title: "Prescription Extraction Models",
    description:
      "Our models automatically extract comprehensive information from prescriptions, including dosages, patient details, and medical instructions.",
    height: "h-[250px]",
    image: prescription,
    isHover: true,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Optical Character Recognition (OCR)",
    description:
      "Purpose-built for healthcare, our OCR scans prescriptions, labels, and clinical documents with unmatched accuracy and speed.",
    height: "h-[260px]",
    image: optical,
    isHover: true,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Large Language Models",
    description:
      "Large Language Models trained on a hospital’s own data deliver highly accurate outputs, aligning seamlessly with existing workflows.",
    height: "h-[188px]",
    image: large,
    isHover: true,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Predictive Analysis",
    description:
      "Predictive Analysis uses large-scale medical data to identify trends, anticipate risks, and optimize resource allocation.",
    height: "h-[380px]",
    image: predictive,
    isHover: false,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Anonymization Engine",
    description:
      "Our Anonymization Engine extracts sensitive personal identifiers from DICOM images and medical records, ensuring data security and compliance.",
    height: "h-[165px]",
    image: anonymization,
    isHover: false,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Clinical Note Summarization",
    description:
      "AI-powered tools distill lengthy medical notes into concise, structured summaries, enabling faster decision-making.",
    height: "h-[531px]",
    image: clinical,
    isHover: false,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Patient Summary Extraction",
    description:
      "Harnesses AI to pinpoint and extract critical information from patient records, creating comprehensive summaries for care teams.",
    height: "h-[284px]",
    image: patient,
    isHover: true,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
  {
    title: "Natural Language Processing",
    description:
      "Natural Language Processing with advanced medical entity recognition simplifies interactions with unstructured clinical data.",
    height: "h-[165px]",
    image: natural,
    isHover: true,
    gradient:
      "bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const AICapabilities = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4 "
    >
      {aiFeatures.map((feature, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden z-0 ${feature.height}  ${feature.isHover ? "bg-[#EAF8FA] border-[1.45px] border-[#ABDBE3] group" : ""} `}
        >
          {feature.image && (
            <div
              className={`mb-4 rounded-lg overflow-hidden h-full transition-opacity duration-300 ${
                feature.isHover
                  ? "opacity-0 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-0"
              }`}
            >
              <Image
                src={feature.image}
                alt={`Feature: ${feature.title}`}
                fill
                className="object-cover"
                priority={feature.isHover}
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
          )}

          <div
            className={`absolute ${feature.isHover ? "top-0" : " bottom-0"}  z-50 p-6`}
          >
            <CommonHeader
              size="2xl"
              className={`mb-2 !transition-colors !duration-500 ${
                feature.isHover
                  ? "!text-[#212121] group-hover:text-white!"
                  : "text-white!"
              }`}
            >
              <T>{feature.title}</T>
            </CommonHeader>
            <CommonHeader
              className={`!font-semibold !transition-colors !duration-500 ${
                feature.isHover
                  ? "!text-[#3F3F3F] group-hover:text-white!"
                  : "text-white!"
              }`}
            >
              <T>{feature.description}</T>
            </CommonHeader>
          </div>
          <div
            className={`absolute inset-0 ${
              feature.isHover
                ? "group-hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]"
                : feature.gradient
            }`}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default AICapabilities;
