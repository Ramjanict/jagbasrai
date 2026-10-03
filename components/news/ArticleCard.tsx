import { getYouTubeEmbedUrl, normalizeYouTubeUrl } from "@/help/help";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CommonHeader from "../common/header/CommonHeader";
import { T } from "../translated-text";

interface ArticleCardProps {
  image?: string | StaticImageData;
  date: string;
  title: string;
  video?: string;
  description: string;
  onClick?: () => void;
  link?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  date,
  title,
  video,
  description,
  link,
  onClick,
}) => {
  return (
    <div className="bg-white  flex flex-col justify-between ">
      <div>
        {image ? (
          <div className="relative w-full  h-[300px] sm:h-[400px] md:h-[600px] shadow  cursor-pointer   ">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain px-4"
              />
            </a>
          </div>
        ) : (
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] ">
            <iframe
              src={getYouTubeEmbedUrl(video)}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}
        <div>
          <CommonHeader size="sm" className="mb-2.5 mt-5 !text-[#24C6DA]">
            <T>{date}</T>
          </CommonHeader>
          <CommonHeader
            onClick={() => {
              !video && onClick && onClick();
            }}
            size="2xl"
            className=" hover:underline "
          >
            {video ? (
              <a
                href={normalizeYouTubeUrl(video)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <T>{title}</T>
              </a>
            ) : (
              link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <T>{title}</T>
                </a>
              )
            )}
          </CommonHeader>
        </div>
      </div>

      <div className="">
        <div className="bg-[#24C6DA1F] p-3 rounded-md mt-7.5">
          <CommonHeader size="md" className=" line-clamp-4">
            <T>{description}</T>
          </CommonHeader>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
