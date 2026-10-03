"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Language = "en" | "fr";
type TranslationCache = Record<string, Record<Language, string>>;

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (text: string) => Promise<string>;
  isLoading: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

const MAX_CACHE_SIZE = 500; // Limit cache entries
const CACHE_KEY = "translation-cache";
const LANG_KEY = "preferred-language";

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const cacheRef = useRef<TranslationCache>({});
  const [isLoading, setIsLoading] = useState(false);

  // Load from localStorage on mount (once)
  useEffect(() => {
    const savedLang = localStorage.getItem(LANG_KEY) as Language;
    const savedCache = localStorage.getItem(CACHE_KEY);

    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLanguageState(savedLang);
    }

    if (savedCache) {
      try {
        cacheRef.current = JSON.parse(savedCache);
      } catch (e) {
        console.error("Failed to parse translation cache:", e);
        cacheRef.current = {};
      }
    }
  }, []);

  // Memoized translate function (won't change between renders)
  const translateText = useCallback(
    async (text: string, targetLang: Language): Promise<string> => {
      const trimmedText = text.trim();

      if (targetLang === "en" || !trimmedText) {
        return trimmedText;
      }

      // Check cache first
      if (cacheRef.current[trimmedText]?.[targetLang]) {
        return cacheRef.current[trimmedText][targetLang];
      }

      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: trimmedText, targetLang }),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Translation API error:", error);
          return trimmedText;
        }

        const data = await response.json();
        const translated = data.translatedText;

        // Update cache with size limit
        const cacheEntries = Object.keys(cacheRef.current);
        if (cacheEntries.length >= MAX_CACHE_SIZE) {
          // Remove oldest entry (first key)
          const oldestKey = cacheEntries[0];
          delete cacheRef.current[oldestKey];
        }

        cacheRef.current = {
          ...cacheRef.current,
          [trimmedText]: {
            ...cacheRef.current[trimmedText],
            [targetLang]: translated,
          },
        };

        // Save to localStorage (debounced in real app, but ok for now)
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheRef.current));

        return translated;
      } catch (error) {
        console.error("Translation error:", error);
        return trimmedText;
      }
    },
    [],
  );

  const setLanguage = useCallback(
    async (newLang: Language) => {
      if (newLang === language) return;

      setIsLoading(true);
      setLanguageState(newLang);
      localStorage.setItem(LANG_KEY, newLang);

      window.dispatchEvent(
        new CustomEvent("languagechange", { detail: { language: newLang } }),
      );

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    },
    [language],
  );

  const translate = useCallback(
    (text: string) => {
      return translateText(text, language);
    },
    [language, translateText],
  );

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage,
        translate,
        isLoading,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
