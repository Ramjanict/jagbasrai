"use client";
import { motion } from "framer-motion";
import image1 from "../../public/images/c1.png";
import image2 from "../../public/images/c2.png";
import image3 from "../../public/images/c3.png";
import image4 from "../../public/images/c4.png";
import image5 from "../../public/images/c5.png";
import image6 from "../../public/images/c6.png";
import image8 from "../../public/images/c8.png";
import image7 from "../../public/images/emr.png";

import CommonSpace from "../common/space/CommonSpace";
import CommonWrapper from "../common/space/CommonWrapper";
import SectionHeader from "../reuseable/SectionHeader";
import ServiceCard from "../reuseable/ServiceCard";

const serviceData = [
  { image: image6, title: "HL7(v2 & V3)" },
  { image: image5, title: "HL7 FHIR" },
  { image: image4, title: "Cerner" },
  { image: image3, title: "Epic" },
  { image: image8, title: "Meditech" },
  { image: image7, title: "EMR Integration" },
  { image: image2, title: "PACS/DICOM" },
  { image: image1, title: "Scheduling System" },
];

const Service = () => {
  return (
    <div id="service">
      <CommonWrapper>
        <CommonSpace>
          <SectionHeader
            title="Our Services"
            bigTitle="Integration with Top Healthcare Services"
            description="Seamlessly connect with the industry's most trusted hospitals, clinics, and healthcare providers. Our platform ensures smooth data flow, reduced administrative burden, and enhanced collaboration, so care teams can consistently deliver exceptional patient outcomes."
          />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pt-20">
            {serviceData.map((item, index) => (
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
                <ServiceCard image={item?.image?.src} title={item.title} />
              </motion.div>
            ))}
          </div>
        </CommonSpace>
      </CommonWrapper>
    </div>
  );
};

export default Service;
