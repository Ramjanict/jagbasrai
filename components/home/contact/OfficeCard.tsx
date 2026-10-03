import CommonHeader from "@/components/common/header/CommonHeader";
import { T } from "@/components/translated-text";
import location from "@/public/images/color-location.svg";
import Image from "next/image";
import React from "react";

interface OfficeCardProps {
  address: string;
  phone: string;
  email: string;
  country: string;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  address,
  phone,
  email,
  country,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className=" relative w-8 h-8 mt-1">
        <Image
          src={location}
          alt="Location icon"
          fill
          sizes="32px"
          className="object-contain"
          priority
        />
      </div>
      <div className=" space-y-1">
        <CommonHeader size="xl">
          <T>{country}</T>
        </CommonHeader>

        <address className="not-italic text-md text-base leading-6 font-normal text-black">
          {address}
        </address>
        <CommonHeader size="md">
          <T>{phone}</T>
        </CommonHeader>
        <CommonHeader size="md">
          <T>{email}</T>
        </CommonHeader>
      </div>
    </div>
  );
};

export default OfficeCard;
