"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
interface GA4ConsentProps {
  gaId: string; // Your GA4 measurement ID
  hasAnalyticsConsent: boolean; // From cookie consent
}

export default function GA4Consent({
  gaId,
  hasAnalyticsConsent,
}: GA4ConsentProps) {
  useEffect(() => {
    if (!gaId) return;

    if (!window.dataLayer) window.dataLayer = [];

    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag("consent", "default", {
      analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
      ad_storage: "denied",
    });
  }, [gaId, hasAnalyticsConsent]);

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
