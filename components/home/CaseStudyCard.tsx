import { T } from "@/components/translated-text";
import React, { Suspense, useState } from "react";
import CommonButton from "../common/button/CommonButton";
import CommonHeader from "../common/header/CommonHeader";

export interface CaseStudyCardProps {
  description: string;
  video: string;
  thumbnail: string; // Add thumbnail prop
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  description,
  video,
  thumbnail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(video);

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-10 bg-[#FEFDFF] border border-[#FBEEFF] p-6 rounded-2xl text-center shadow-[0_2px_32px_0_rgba(0,0,0,0.05)] h-full ">
        <div className="w-full h-[300px] relative ">
          <Suspense
            fallback={<div className="bg-gray-200 w-full h-full rounded-2xl" />}
          >
            <video
              src={currentVideo}
              muted
              playsInline
              preload="metadata"
              className="object-cover w-full h-full rounded-2xl"
              aria-label="Toronto Office Video"
              poster={thumbnail}
            />
          </Suspense>
          <div className="bg-black/10 absolute inset-0 rounded-2xl"></div>
        </div>

        <CommonHeader className="!font-medium flex-1">
          <T>{description}</T>
        </CommonHeader>

        <CommonButton
          variant="primary"
          className="!px-8 !py-4 !text-xl !font-medium mb-6 mt-auto text-white!"
          onClick={() => setIsModalOpen(true)}
        >
          <T>View</T>
        </CommonButton>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className=" bg-white rounded-2xl w-full max-w-4xl p-6 flex flex-col gap-6 relative ">
            <button
              className="absolute top-1 right-4 text-2xl font-bold cursor-pointer "
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <video
              src={currentVideo}
              controls
              autoPlay
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
