"use client";
import CommonButton from "@/components/common/button/CommonButton";
import CommonHeader from "@/components/common/header/CommonHeader";
import { T } from "@/components/translated-text";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const inputStyle = {
  input: "w-full border border-[#F2D5FF] bg-white outline-none p-2 rounded-md",
  error: "text-red-600 text-xs mt-1",
};

const contactSchema = z.object({
  FNAME: z.string().min(2, "Name must be at least 2 characters"),
  EMAIL: z.string().email("Invalid email address"),
  TELLUSMORE: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
  if (!siteKey) {
    throw new Error("RECAPTCHA site key is missing in .env.local");
  }

  const onSubmit = async (data: ContactFormValues) => {
    if (!recaptchaValue) {
      toast.error("Please verify that you are not a robot.");
      return;
    }

    setStatus("sending");

    const params = new URLSearchParams({
      FNAME: data.FNAME,
      EMAIL: data.EMAIL,
      TELLUSMORE: data.TELLUSMORE || "",
      c: "?", // JSONP callback
    });

    const url = `https://goautomatemd.us9.list-manage.com/subscribe/post-json?u=f359cdb0ebaf25bbcb558e88c&id=d7ae462945&${params.toString()}`;

    try {
      // JSONP request via fetch with no-cors (Mailchimp requires JSONP)
      await fetch(url, { method: "GET", mode: "no-cors" });

      setStatus("success");
      toast.success("Thank you! Your subscription was successful.");
      reset();
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
    } catch (error) {
      setStatus("error");
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white px-10 py-5 rounded-[18px] border border-[#F7E6FF] space-y-5"
    >
      <CommonHeader size="xl" className="!font-semibold">
        <T>Learn More:</T>
      </CommonHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <CommonHeader size="md" className="mb-1.5">
            <T>Name</T>
          </CommonHeader>
          <input
            type="text"
            placeholder="Name"
            {...register("FNAME")}
            className={inputStyle.input}
          />
          {errors.FNAME && (
            <p className={inputStyle.error}>
              <T>{errors.FNAME.message || " "}</T>
            </p>
          )}
        </div>

        <div>
          <CommonHeader size="md" className="mb-1.5">
            <T>Email Address</T>
          </CommonHeader>
          <input
            type="email"
            placeholder="Email Address"
            {...register("EMAIL")}
            className={inputStyle.input}
          />
          {errors.EMAIL && (
            <p className={inputStyle.error}>
              <T>{errors.EMAIL.message || " "}</T>
            </p>
          )}
        </div>
      </div>
      <div>
        <CommonHeader size="md" className="mb-1.5">
          <T>Message</T>
        </CommonHeader>
        <textarea
          placeholder="Message"
          rows={4}
          {...register("TELLUSMORE")}
          className={inputStyle.input}
        />
      </div>

      {/* Google reCAPTCHA */}
      <div className="mt-2">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleRecaptchaChange}
          ref={recaptchaRef}
        />
      </div>

      <CommonButton
        disabled={status === "sending"}
        type="submit"
        variant="primary"
      >
        <T>{status === "sending" ? "Sending..." : "Send Message"}</T>
      </CommonButton>
    </form>
  );
};

export default ContactForm;
