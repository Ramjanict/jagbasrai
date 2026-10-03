import CommonSpace from "@/components/common/space/CommonSpace";
import CommonWrapper from "@/components/common/space/CommonWrapper";
import SectionHeader from "@/components/reuseable/SectionHeader";

import React from "react";
import ContactForm from "./ContactForm";
import OfficeCard from "./OfficeCard";
const ContactUs: React.FC = () => {
  return (
    <section
      className="bg-[rgba(255,230,253,0.15)]"
      id="contact-us"
      aria-labelledby="contact-us-heading"
    >
      <CommonWrapper>
        <CommonSpace>
          <div className="">
            <div className="flex flex-col xl:flex-row justify-between gap-10 sm:gap-20  xl:gap-[295PX]">
              <div className="w-full xl:w-1/2 flex flex-col gap-4">
                <SectionHeader bigTitle="Contact Us" title="Our Offices" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-7.5 gap-6">
                  <OfficeCard
                    country="Canada"
                    address="Suite 14 - 75 Horner Ave, Toronto, Ont. M8Z4X5"
                    phone="416.479.0800"
                    email="hello@goautomatedmd.com"
                  />
                  <OfficeCard
                    country="UAE"
                    address="Dubai International Finance Center Dubai, UAE"
                    phone="416.479.0800"
                    email="hello@goautomatedmd.com"
                  />
                  <OfficeCard
                    country="USA"
                    address="Suite 24715 - 8 The Green Dover, DE, 19901"
                    phone="877.469.3565"
                    email="hello@goautomatedmd.com"
                  />
                </div>

                <ContactForm />
              </div>

              <div className="w-full xl:w-1/2 flex flex-col   gap-7.5">
                <div className="relative w-full h-[342px] xl:h-[250px] ">
                  <video
                    src="/images/Toronto.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="object-cover w-full h-full rounded-2xl"
                    aria-label="Toronto Office Video"
                  />
                  <div className="bg-black/10  absolute inset-0 rounded-2xl"></div>
                </div>
                <div className="relative w-full h-[342px] xl:h-[250px]">
                  <video
                    src="/images/UAE.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="object-cover w-full h-full  rounded-2xl"
                    aria-label="UAE Office Video"
                  />
                  <div className="bg-black/10  absolute inset-0 rounded-2xl"></div>
                </div>{" "}
                <div className="relative w-full h-[342px] xl:h-[250px]">
                  <video
                    src="/video/Delaware.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="object-cover w-full h-full  rounded-2xl"
                    aria-label="USA Office Video"
                  />
                  <div className="bg-black/10  absolute inset-0 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </CommonSpace>
      </CommonWrapper>
    </section>
  );
};

export default ContactUs;
