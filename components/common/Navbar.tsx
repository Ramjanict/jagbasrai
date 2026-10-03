"use client";

import { T } from "@/components/translated-text";
import { useTranslation } from "@/lib/translation-context.";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import CommonButton from "./button/CommonButton";
import IconButton from "./button/IconButton";
import CommonDropdown from "./custom/CommonDropdown";
import { useScrollToSection } from "./custom/useScrollToSection";
import { socialIcons } from "./Footer";
import CommonHeader from "./header/CommonHeader";
import NavbarModal from "./NavbarModal";
import CommonWrapper from "./space/CommonWrapper";

const languages = [
  { label: "English (EN)", code: "en" },
  { label: "French (FR)", code: "fr" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", scrollTo: "products" },
  { label: "Services", scrollTo: "service" },
  { label: "Case Studies", scrollTo: "case-studies" },
  { label: "News", href: "/news" },
  { label: "Contact Us", scrollTo: "contact-us" },
];

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const { language, setLanguage } = useTranslation();

  useEffect(() => {
    setSelectedLanguage(language === "en" ? "EN" : "FR");
  }, [language]);

  const handleLanguageChange = (lang: "en" | "fr") => {
    setSelectedLanguage(lang === "en" ? "EN" : "FR");
    setLanguage(lang);
  };

  const { scrollToSection } = useScrollToSection();
  const pathname = usePathname() || "/";
  const isHome = ["/", "/home"].includes(pathname);

  return (
    <div
      className={`${
        isHome ? "bg-[rgba(58,23,108,0.7)]" : "bg-purple"
      } backdrop-blur-[10px] p-4 sticky top-0 z-20`}
    >
      <CommonWrapper className="flex justify-between">
        <div className="flex items-center gap-[45px]">
          <Link
            href={"/"}
            className="w-[150px] h-[35px] sm:w-[311px] relative cursor-pointer"
          >
            <Image
              src={logo}
              alt="logo"
              fill
              sizes="(max-width: 768px) 150px, 311px"
              className="object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) =>
              link.href ? (
                <Link key={link.label} href={link.href}>
                  <CommonHeader
                    size="md"
                    className="!text-white cursor-pointer"
                  >
                    <T>{link.label}</T>
                  </CommonHeader>
                </Link>
              ) : (
                <CommonHeader
                  key={link.label}
                  onClick={() => scrollToSection(link.scrollTo!)}
                  size="md"
                  className="!text-white cursor-pointer"
                >
                  <T>{link.label}</T>
                </CommonHeader>
              )
            )}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[15px]">
            <div className="gap-4 hidden 2xl:flex">
              {socialIcons.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={id}
                >
                  <IconButton className="!bg-black">{icon}</IconButton>
                </a>
              ))}
            </div>

            <CommonDropdown
              trigger={
                <div className="px-2 py-1.5 bg-white/12 rounded-md text-white flex items-center gap-1 cursor-pointer hover:bg-white/20 transition-colors">
                  {selectedLanguage}
                  <SlArrowDown size={16} />
                </div>
              }
              items={languages.map((lang) => ({
                label: lang.label,
                value: lang.code,
                onClick: () => handleLanguageChange(lang.code as "en" | "fr"),
              }))}
            />
          </div>

          <CommonButton
            variant="primary"
            size="lg"
            className="ml-1.5 hidden 2xl:block"
            onClick={() => scrollToSection("contact-us")}
          >
            <T>Request Demo</T>
          </CommonButton>

          <NavbarModal />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Navbar;
