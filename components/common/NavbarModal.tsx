"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import line from "@/public/images/line.png";
import Image from "next/image";
import CommonHeader from "./header/CommonHeader";

import logo from "@/public/images/logo.png";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { T } from "../translated-text";
import CommonButton from "./button/CommonButton";
import IconButton from "./button/IconButton";
import { useScrollToSection } from "./custom/useScrollToSection";
const socialIcons = [
  {
    id: "youtube",
    icon: <FaYoutube size={21} />,
    href: "https://www.youtube.com/channel/UCitUEN9IyvUfndTOYjpV5Jw",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={21} />,
    href: "https://www.linkedin.com/company/goautomate-ai/",
  },
];
const NavbarModal = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="space-y-3 cursor-pointer z-99">
          <Image src={line} alt="menu-line" />
          <Image src={line} alt="menu-line" />
        </div>
      </SheetTrigger>

      <SheetContent
        className="bg-purple !border-0 !max-w-[80%] sm:!max-w-[65%] w-full px-10 lg:px-[102px] pt-[50px] [&>button.absolute.right-4.top-4]:hidden data-[state=open]:animate-[slideInFromRight_5s_ease-out]
data-[state=closed]:animate-[slideOutToRight_5s_ease-in]"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <SheetClose asChild>
          <div className="flex w-full justify-end  cursor-pointer">
            <Image src={line} alt="menu-line" />
          </div>
        </SheetClose>

        <div className=" w-full flex items-start justify-between sm:pt-12">
          <div>
            <CommonHeader size="4xl" className="text-white! pb-4 sm:pb-[35px] ">
              <T>Navigation</T>
            </CommonHeader>
            <div className="flex flex-col gap-2 sm:gap-6">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="text-white! !font-semibold text-xl cursor-pointer"
                >
                  <T>Home</T>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/about"
                  className="text-white! !font-semibold text-xl cursor-pointer"
                >
                  <T>About</T>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <CommonHeader
                  onClick={() => scrollToSection("products")}
                  className="text-white! !font-semibold !text-xl cursor-pointer"
                >
                  <T>Products</T>
                </CommonHeader>
              </SheetClose>
              <SheetClose asChild>
                <CommonHeader
                  onClick={() => scrollToSection("service")}
                  className="text-white! !font-semibold !text-xl cursor-pointer"
                >
                  <T>Services</T>
                </CommonHeader>
              </SheetClose>
              <SheetClose asChild>
                <CommonHeader
                  onClick={() => scrollToSection("case-studies")}
                  className="text-white! !font-semibold !text-xl cursor-pointer"
                >
                  <T>Case Studies</T>
                </CommonHeader>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/news"
                  className="text-white! !font-semibold text-xl cursor-pointer"
                >
                  <T>News</T>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <CommonHeader
                  onClick={() => scrollToSection("contact-us")}
                  className="text-white! !font-semibold !text-xl cursor-pointer"
                >
                  <T>Contact Us</T>
                </CommonHeader>
              </SheetClose>
            </div>
          </div>
          <div className="w-[311px] h-[35px] relative cursor-pointer hidden lg:block">
            <Image
              src={logo}
              alt="Goautomate-logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className=" w-full flex justify-start lg:justify-between  items-baseline-last sm:pt-20">
          <div className=" gap-4 hidden lg:flex">
            {socialIcons.map(({ id, icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={id}
                className="cursor-pointer"
              >
                <IconButton className="!bg-black">{icon}</IconButton>
              </a>
            ))}
          </div>

          <div className=" flex flex-col lg:justify-end lg:items-end w-full lg:w-[230px] mr-5">
            <SheetClose asChild>
              <CommonButton
                size="lg"
                variant="primary"
                className=" !w-full mt-[34px] mb-[7px]"
                onClick={() => scrollToSection("contact-us")}
              >
                <T>Request Demo</T>
              </CommonButton>
            </SheetClose>
            <CommonButton
              size="lg"
              variant="primary"
              className="!bg-gray !w-full !text-[#065691]"
            >
              <a href="https://goautomate.ai/">
                <T>Login</T>
              </a>
            </CommonButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarModal;
