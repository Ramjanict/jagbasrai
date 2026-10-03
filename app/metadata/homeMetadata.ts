import type { Metadata } from "next";

export const homeMetadata: Metadata = {
  metadataBase: new URL("https://jagbasrai.vercel.app"),

  title: "GoAutomateMD – Intelligent Healthcare Automation",

  description:
    "GoAutomateMD is transforming healthcare with intelligent automation and seamless system integration. Powered by Argentic AI.",

  verification: {
    google: "RBGXMzimScWZuVmycc0lcF5IugeRjb-gzyZpydpfjoE",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "GoAutomateMD – Intelligent Healthcare Automation",
    description:
      "GoAutomateMD is transforming healthcare with intelligent automation and seamless system integration. Powered by Argentic AI.",
    url: "https://jagbasrai.vercel.app/",
    siteName: "GoAutomateMD",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GoAutomateMD – Intelligent Healthcare Automation",
    description:
      "GoAutomateMD is transforming healthcare with intelligent automation and seamless system integration. Powered by Argentic AI.",
    images: ["/seo-image.png"],
  },
};
