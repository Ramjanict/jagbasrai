"use client";

import { ConsentState, serializeConsent } from "@/lib/cookie-consent";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { T } from "./translated-text";

interface BannerProps {
  initialConsent: ConsentState;
}
const CookieBanner = ({ initialConsent }: BannerProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const setConsent = (analytics: boolean) => {
    const newConsent: ConsentState = {
      ...initialConsent,
      analytics,
      consentGiven: true,
      timestamp: Date.now(),
    };

    document.cookie = `site_cookie_consent=${serializeConsent(
      newConsent
    )}; path=/; max-age=31536000; SameSite=Lax`;

    setIsProcessing(false);
    router.refresh();
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg flex flex-col md:flex-row items-center justify-between z-50 gap-2 md:gap-4">
      <p className="flex-1 text-sm md:text-base">
        <T>
          We use cookies to enhance your experience and for analytics.You can
          accept or reject analytics cookies.
        </T>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setIsProcessing(true);
            setConsent(true);
          }}
          disabled={isProcessing}
          className="bg-sky px-4 py-2 rounded text-white cursor-pointer"
        >
          <T>Accept</T>
        </button>
        <button
          onClick={() => {
            setIsProcessing(true);
            setConsent(false);
          }}
          disabled={isProcessing}
          className="bg-purple px-4 py-2 rounded text-white cursor-pointer"
        >
          <T>Reject</T>
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
