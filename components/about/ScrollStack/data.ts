import bgImage1 from "@/public/images/about1.png";
import bgImage2 from "@/public/images/about2.png";
import bgImage3 from "@/public/images/about3.png";

export const projects = [
  {
    title: "Features",
    tag: "Powerful Automation",
    description:
      "GoAutomateMD is a powerful automation and workflow engine that drives measurable operational gains, resulting in faster workflows, fewer errors, and more time for patients. It integrates seamlessly across existing EMR and HIS systems, digitizing paper workflows through advanced OCR, and removing data silos. AI-driven prioritization and live analytics deliver real-time insights into scheduling and resource allocation. With GoAutomateMD, staff spend less time processing information and more time delivering care.",
    features: [
      {
        title: "Eliminate Tedious Tasks",
        description: "Paper-based workflows with seamless automation.",
      },
      {
        title: "Digitize Incoming Documents",
        description:
          "Convert faxes and scanned files instantly into digital data with Optical Character Recognition (OCR).",
      },
      {
        title: "AI-powered Prioritization",
        description:
          "Use intelligent automation to optimize scheduling and allocate resources more efficiently.",
      },
      {
        title: "Automate Protocols",
        description:
          "AI Protocoling enables end-to-end automation and streamlines how staff work.",
      },
    ],
    backgroundImage: bgImage1.src,
  },
  {
    title: "Features",
    tag: "Interoperability and Optimization",
    description:
      "GoAutomateMD empowers true interoperability by enhancing your existing workflows, not replacing them. Our end-to-end solution integrates seamlessly with your current systems like Epic, Cerner, Meditech, and PACS, eliminating duplicate data entry and minimizing disruption. Set-up is effortless, working quietly in the background while freeing staff to focus on patient care. With built-in reporting and AI-driven analytics, GoAutomateMD predicts patient volumes and staffing needs, helping hospitals optimize resources, cut costs, and deliver outcomes without adding complexity.",
    features: [
      {
        title: "Integration with Hospital Information Systems",
        description:
          "Integrate with EPIC, Cerner and MEDITECH via HL7 V2/3 and FHIR.",
      },
      {
        title: "Integration with PACS and RIS environments",
        description:
          "GoAutomateMD can integrate with your PACS via DICOM 3 and RIS via HL7 or APIs",
      },
      {
        title: "DICOM Routing and Modality Worklist Servers",
        description:
          "GoAutomateMD conforms to DICOM 3 and can integrate with all major PACS environments.",
      },
      {
        title: "Connect disparate systems like faxes with digital systems",
        description:
          "Integrate and send data into an EHR that typically has to be manually entered.",
      },
    ],
    backgroundImage: bgImage2.src,
  },
  {
    title: "Features",
    tag: "Ease of Installation & Minimal Learning Curve",
    description:
      "GoAutomateMD works seamlessly with your existing systems: no rip-and-replace, no disruption. It automates manual tasks through AI and machine learning, quietly operating in the background to boost efficiency. With built-in analytics and reporting, it identifies workflow gaps, predicts patient volumes, and optimizes staffing levels. The result: smarter operations, reduced costs, and more time for your staff to focus on patient care.",
    features: [
      {
        title: "Available as on-premises, SaaS or hybrid",
        description: "On-Premise, SaaS or Hybrid, pick what you prefer",
      },
      {
        title: "Highly customized to meet the needs of staff",
        description: "Highly customized, a system that meets your staff needs",
      },
      {
        title: "Minimal change management, increased user adoption",
        description:
          "Align a system to the front line staff and increase adoption and usage of the system.",
      },
      {
        title:
          "Can be launched quickly with drag-and-drop setup and agile iteration",
        description:
          "Create an agile application that iterates to ensure it meets your needs quickly and efficiently.",
      },
    ],
    backgroundImage: bgImage3.src,
  },
];
