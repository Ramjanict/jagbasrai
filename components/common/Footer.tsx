"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/colorLoago.png";

import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import IconButton from "./button/IconButton";
import CommonHeader from "./header/CommonHeader";

import Link from "next/link";
import location from "../../public/images/location.svg";
import message from "../../public/images/message.svg";
import phone from "../../public/images/phone.svg";
import Dot from "../reuseable/Dot";
import { T } from "../translated-text";
import { useScrollToSection } from "./custom/useScrollToSection";
import CommonWrapper from "./space/CommonWrapper";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export const socialIcons = [
  {
    id: "linkedin",
    icon: <FaLinkedin size={21} />,
    href: "https://www.linkedin.com/company/goautomate-ai/",
  },
  {
    id: "youtube",
    icon: <FaYoutube size={21} />,
    href: "https://www.youtube.com/channel/UCitUEN9IyvUfndTOYjpV5Jw",
  },
];

// ----------------------------
// ZOD + FORM SETUP
// ----------------------------
const subscribeSchema = z.object({
  EMAIL: z.string().email("Invalid email"),
});

type SubscribeValues = z.infer<typeof subscribeSchema>;

const Footer: React.FC = () => {
  const { scrollToSection } = useScrollToSection();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeValues>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubscribe = async (data: SubscribeValues) => {
    setLoading(true);

    try {
      const params = new URLSearchParams({
        EMAIL: data.EMAIL,
        c: "?",
      });

      const url = `https://goautomatemd.us9.list-manage.com/subscribe/post-json?u=f359cdb0ebaf25bbcb558e88c&id=d7ae462945&${params.toString()}`;

      // Mailchimp requires GET + no-cors for JSONP
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
      });

      toast.success("Thank you for subscribing!");
      reset();
    } catch (err) {
      toast.error("Subscription failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <footer className="bg-gray pt-20 pb-5 !z-99 ">
      <CommonWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          <div className="flex flex-col gap-8">
            <div className=" relative h-[42px] w-sm:w-[374px] px-2">
              <Image
                src={logo}
                alt="GoAutomate logo"
                className=" object-contain"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 374px"
              />
            </div>

            <div className="flex gap-4">
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
          </div>

          <div className="space-y-7.5">
            <CommonHeader size="2xl">
              <T>Quick Links</T>{" "}
            </CommonHeader>

            <div className="space-y-7.5">
              <CommonHeader size="xl">
                <Link href="/about" passHref>
                  <T>About Us</T>
                </Link>
              </CommonHeader>

              <CommonHeader
                className="cursor-pointer"
                onClick={() => scrollToSection("products")}
                size="xl"
              >
                <T>Products</T>
              </CommonHeader>
              <CommonHeader
                className="cursor-pointer"
                onClick={() => scrollToSection("service")}
                size="xl"
              >
                <T>Services</T>
              </CommonHeader>
              <CommonHeader
                className="cursor-pointer"
                onClick={() => scrollToSection("case-studies")}
                size="xl"
              >
                <T>Case Studies</T>
              </CommonHeader>

              <CommonHeader className="cursor-pointer" size="xl">
                <Link href="/news" passHref>
                  <T>News</T>
                </Link>
              </CommonHeader>

              <CommonHeader
                onClick={() => scrollToSection("contact-us")}
                size="xl"
                className="cursor-pointer"
              >
                <T>Contact Us</T>
              </CommonHeader>
            </div>
          </div>

          <div className="space-y-5.5">
            <CommonHeader size="2xl">
              <T>Contact Us</T>
            </CommonHeader>
            <div className="flex items-start gap-2">
              <div className=" relative w-8 h-8 mt-1">
                <Image
                  src={location}
                  alt="location"
                  className=" object-contain"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 374px"
                />
              </div>

              <CommonHeader size="xl">
                <T>Canada:</T> <br />
                <T>Suite 14 - 75 Horner Ave,</T>
                <br />
                <T>Toronto, Ont, M8Z4X5</T>
              </CommonHeader>
            </div>
            <div className="flex items-start gap-2">
              <div className=" relative w-8 h-8 ">
                <Image
                  src={message}
                  alt="location"
                  className=" object-contain "
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 374px"
                />
              </div>

              <CommonHeader size="xl">
                <T>hello@goautomatemd.com</T>
              </CommonHeader>
            </div>
            <div className="flex items-start  gap-2">
              <div className=" relative w-8 h-8">
                <Image
                  src={phone}
                  alt="location"
                  className=" object-contain"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 374px"
                />
              </div>

              <CommonHeader size="xl">
                <T>416.479.0800</T>
              </CommonHeader>
            </div>
          </div>

          <div>
            <CommonHeader size="2xl" className="mb-5">
              <T>Subscribe to Newsletter</T>
            </CommonHeader>

            <form
              onSubmit={handleSubmit(onSubscribe)}
              className="flex min-w-[340px] w-full "
            >
              <input
                type="email"
                placeholder="Your email"
                {...register("EMAIL")}
                className="w-full outline-none rounded-l-[10px] px-5 py-4 flex-1 text-xl leading-8 !bg-white  text-black shadow-[inset_0_7.987px_15.975px_0_rgba(255,255,255,0.02),inset_0_1.331px_1.331px_0_rgba(255,255,255,0.05)] border-[1.33px] border-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-r-[10px] px-8 py-4 text-white! bg-purple shadow-[inset_0_6px_12px_0_rgba(255,255,255,0.20),inset_0_1px_1px_0_rgba(255,255,255,0.32)] cursor-pointer"
              >
                <T>{loading ? "Subscribing..." : "Subscribe"}</T>
              </button>
            </form>

            {errors.EMAIL && (
              <p className="text-red-500 text-sm mt-2">
                <T>{errors.EMAIL.message || ""}</T>
              </p>
            )}
          </div>
        </div>

        <div className=" w-full flex justify-center sm:justify-end pt-10">
          <div className="flex flex-col sm:flex-row  items-center gap-6">
            <CommonHeader size="md" className="!text-[#353535]">
              <T> © 2025 GoAutomate Inc. All Rights Reserved</T>
            </CommonHeader>
            <div className="flex items-center gap-1 ">
              <Dot />
              <CommonHeader size="md" className="flex items-center ">
                <Link href="/privacy" passHref>
                  <T>Privacy Policy</T>
                </Link>
              </CommonHeader>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;
