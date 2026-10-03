"use client";
import blog3 from "@/public/images/blog1.png";
import blog2 from "@/public/images/blog2.png";
import blog1 from "@/public/images/blog3.png";
import blog5 from "@/public/images/fin-health.png";
import blog4 from "@/public/images/Image-News-Mag2.png";
import { StaticImageData } from "next/image";
import React from "react";
import CommonSpace from "../common/space/CommonSpace";
import CommonWrapper from "../common/space/CommonWrapper";
import SectionHeader from "../reuseable/SectionHeader";
import ArticleCard from "./ArticleCard";

export interface Article {
  image?: string | StaticImageData;
  date: string;
  video?: string;
  link?: string;
  title: string;
  description: string;
}
const articles: Article[] = [
  {
    image: blog5,
    date: "November 1, 2024",
    title: "GoAutomate brings AI, financial-sector tech know-how to healthcare",
    description: `TORONTO – GoAutomate is developing AI-based solutions that are designed to improve workflow in diagnostic imaging departments, which often get bogged down with faxes and paper-based processes. They’re also slowed down by mistakes in documents that are sent electronically. All of these documents regularly contain missing or incorrect data, and staff must fill in the blanks and fix the incorrect information – a time-consuming and tedious process.


    Correcting DI requisitions can lead to delays in getting patients into the imaging suite. “Our goal is to reduce patient booking times from two-to-three weeks to one or two days, improving overall patient care,” said Jag Basrai, chief executive officer of GoAutomate.ai..

`,
    link: "https://www.canhealth.com/2024/11/01/goautomate-brings-ai-financial-sector-tech-know-how-to-healthcare/",
  },
  {
    image: blog4,
    date: "November 1, 2025",
    title:
      "Digital workflow solutions speed up imaging bookings at Royal Victoria",
    description: `BARRIE, ONT. – Last year, the Royal Victoria Regional Health Centre, in Barrie, Ont., received 175,000 requisitions for diagnostic exams – a substantial number, and one that’s expected to surge in the quickly growing community just north of Toronto.

    Problem is, scheduling those exams requires a lot of people working together, and it will be difficult in an era of budget constraints and personnel shortages to hire more staff to handle the expected growth.
    
    Add to that a second challenge: the process of scheduling DI exams currently revolves around paper..

`,
    link: "https://drive.google.com/file/d/1cfCkJ4eg0etMPMie_H3wHkSJS7MWSu_t/view",
  },
  {
    image: blog1,
    date: "January 31, 2024",
    title: "Digital DI referrals improves workflow for staff, radiologists",
    description: `After years of chasing an inefficient, tedious and time-consuming paper trail, diagnostic imaging (DI) departments at two Ontario hospitals are axing the fax and turning to more efficient digital workflows for requisitions and referrals


      Orillia Soldiers Memorial Hospital (OSMH) went live with Novari Health’s Medical Imaging Requisition Management (MIRM) platform in November 2023, creating an end-to-end digital process for requisition management across all medical imaging services that was kick-started with a push to adopt the province’s Ocean eReferral Network in the spring.
  
      
`,
    link: "https://www.canhealth.com/2024/01/31/digital-di-referrals-improves-workflow-for-staff-radiologists/",
  },
  {
    date: "January 31, 2024",
    title: "GoAutomateMD Requisition Management Platform.",
    video: "https://www.youtube.com/watch?v=zjYBxuMhnOY",
    description:
      "Check out the GoAutomate requisition management system in action.",
  },

  {
    image: blog3,
    date: "December 07, 2023",
    title:
      "Oak Valley Health partners with GoAutomate for electronic referral information management solution",
    description: `Markham, ON (December 7, 2023) - Oak Valley Health has partnered with GoAutomate to implement their state-of-the-art electronic referral (e-referral) information management solution to streamline diagnostic imaging services. The collaboration seeks to leverage GoAutomate's expertise in digitizing and automating health care processes to refine the intake of requisitions. The e-referral solution will offer a seamless exchange of information from client to provider while bolstering communication pathways across Oak Valley Health's internal departments and external partners.

`,
    link: "https://www.oakvalleyhealth.ca/wp-content/uploads/2023/12/Oak-Valley-Health-GoAutomate-press-release-FINAL.pdf",
  },

  {
    image: blog2,
    date: "June 14, 2023",
    title: "GoAutomate CTO is a Start-up Innovator of the Year",
    description: `TORONTO – The winners of the annual Digital Health Canada Awards were announced during the e-Health 2023 Conference and Tradeshow held in Toronto, May 28 – 30. The e-Health event is co-hosted each year by Canada Health Infoway, Canadian Institute for Health Information, and Digital Health Canada.


    The awards are offered annually in six categories – Digital Health Executive of the Year; Digital Health Leader of the Year; Clinical Innovator of the Year; Community Care Leader of the Year; Emerging Leader of the Year; and StartUp Innovator of the Year – and the Steven Huesing Scholarship.
    
    `,
    link: "https://www.canhealth.com/2023/06/14/digital-health-canada-announces-award-winners/",
  },
  {
    video: "https://www.youtu.be/uIEWg4XbNjs",
    date: "November 17, 2022",
    title: "How to automate your requisitions into PACS - GoAutomateMD",
    description:
      "GoAutomateMD can integrate with your existing hospital systems, leveraging investments that your healthcare organization has already made in technology. We work seamlessly and transparently with your staff, without the need to disrupt existing processes.",
  },
  {
    video: "https://www.youtu.be/2K0eFbraAVI",
    date: "November 17, 2022",
    title: "GoAutomateMD Patient Care Platform",
    description:
      "GoAutomateMD helps streamline and automate processes within the healthcare environment. We work to digitize paper based processes& streamline existing processes via leveraging adaptive AI & machine learning. By doing so, we free up your staff - so",
  },
  {
    video: "https://www.youtu.be/zhuHzcaq27k",
    date: "November 16, 2021",
    title: "GoAutomate Healthcare - PACS Workflow Demo.",
    description:
      "GoAutomate brings innovation to the healthcare industry through the automation of laborious yet critical tasks. In this video we demonstrate how GoAutomate can be used to bring efficiencies to PACS processes.",
  },
  {
    video: "https://www.youtu.be/LeiugUf1T-0",
    date: "November 16, 2021",
    title: "GoAutomate 2.0 - Product Overview and Demo",
    description:
      "GoAutomate 2.0 brings many additional capabilities and ease of use to the healthcare industry through the automation of laborious yet critical tasks across core healthcare systems. In this video we provide an overview of GoAutomate 2.0 and its capabilities.",
  },
];

const ArticleGrid: React.FC = () => {
  return (
    <CommonSpace>
      <h1 className="sr-only">News</h1>
      <CommonWrapper>
        <SectionHeader title="News" />
        <div className=" pt-7.5">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </CommonWrapper>
    </CommonSpace>
  );
};

export default ArticleGrid;
