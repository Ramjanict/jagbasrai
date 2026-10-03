// lib/cookie-consent.ts

export const CONSENT_COOKIE_NAME = "site_cookie_consent";
export const CONSENT_VERSION = "v1";

export interface ConsentState {
  essential: boolean;
  analytics: boolean;
  consentGiven: boolean;
  timestamp: number;
  version: string;
}

export function getDefaultConsent(): ConsentState {
  return {
    essential: true,
    analytics: false,
    consentGiven: false,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
}

export function serializeConsent(consent: ConsentState): string {
  return encodeURIComponent(JSON.stringify(consent));
}

export function parseConsent(cookie: string): ConsentState | null {
  try {
    return JSON.parse(decodeURIComponent(cookie));
  } catch {
    return null;
  }
}
