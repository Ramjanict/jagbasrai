"use client";

import { useTranslation } from "@/lib/translation-context.";
import { ElementType, useEffect, useRef, useState } from "react";

interface TranslatedTextProps {
  children: string;
  as?: ElementType;
  className?: string;
}

export function T({
  children,
  as: Component = "span",
  className = "",
}: TranslatedTextProps) {
  const { language, translate } = useTranslation();
  const [translated, setTranslated] = useState(children);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const performTranslation = async () => {
      if (language === "en") {
        setTranslated(children);
        return;
      }

      try {
        const result = await translate(children);
        if (mountedRef.current) {
          setTranslated(result);
        }
      } catch (error) {
        console.error("Translation failed for:", children, error);
        if (mountedRef.current) {
          setTranslated(children);
        }
      }
    };

    performTranslation();

    return () => {
      mountedRef.current = false;
    };
  }, [children, language]); // Removed 'translate' dependency

  return (
    <Component className={`${className} transition-opacity`}>
      {translated}
    </Component>
  );
}
