"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export const useScrollToSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback(
    (id: string) => {
      if (pathname === "/" || pathname === "/home") {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${id}`);
      }
    },
    [pathname, router]
  );

  return { scrollToSection };
};
