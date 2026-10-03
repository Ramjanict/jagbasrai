import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ToastProvider } from "@/components/ToastProvider";
import type { Metadata } from "next";
import { Geist, Lato } from "next/font/google";
import localFont from "next/font/local";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

import CookieBanner from "@/components/CookieBanner";
import GA4Consent from "@/components/GA4Consent";
import {
  CONSENT_COOKIE_NAME,
  getDefaultConsent,
  parseConsent,
} from "@/lib/cookie-consent";

import { TranslationProvider } from "@/lib/translation-context.";
import { cookies } from "next/headers";
import { homeMetadata } from "./metadata/homeMetadata";

const lato = Lato({
  variable: "--font-base",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const helvetica = localFont({
  src: "../public/fonts/Helvetica-Bold.ttf",
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = homeMetadata;
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const consentCookie = cookieStore.get(CONSENT_COOKIE_NAME);

  const consent = consentCookie?.value
    ? parseConsent(consentCookie.value)
    : null;

  const safeConsent = consent ?? getDefaultConsent();

  const showBanner = !safeConsent.consentGiven;

  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${geist.variable} ${helvetica.variable} antialiased`}
        suppressHydrationWarning
      >
        <TranslationProvider>
          <Navbar />
          {children}
          <ToastProvider />
          <Footer />
          {showBanner && <CookieBanner initialConsent={safeConsent} />}
          <GA4Consent
            gaId={process.env.NEXT_PUBLIC_GA_ID!}
            hasAnalyticsConsent={!!safeConsent.analytics}
          />
        </TranslationProvider>
      </body>
    </html>
  );
}
