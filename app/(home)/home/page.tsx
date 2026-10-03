import ArgenticProducts from "@/components/home/ArgenticProducts";
import CaseStudies from "@/components/home/CaseStudies";
import ContactUs from "@/components/home/contact/ContactUs";
import HealthcareDesign from "@/components/home/HealthcareDesign";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import TestimonialSection from "@/components/home/TestimonialSection";
import Script from "next/script";

export default function Homepage() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GoAutomateMD",
    url: "https://jagbasrai.vercel.app/",
    logo: "https://jagbasrai.vercel.app/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/goautomate-ai/",
      "https://www.youtube.com/channel/UCitUEN9IyvUfndTOYjpV5Jw",
    ],
  };

  return (
    <>
      <Script
        id="organization-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationLd),
        }}
      />

      <Hero />
      <HealthcareDesign />
      <ArgenticProducts />
      <Service />
      <CaseStudies />
      <TestimonialSection />
      <ContactUs />
    </>
  );
}
