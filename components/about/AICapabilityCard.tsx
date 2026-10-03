"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface AICapabilityCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  gradient?: string;
  className?: string;
}

const AICapabilityCard: React.FC<AICapabilityCardProps> = ({
  title,
  description,
  icon,
  image,
  gradient = "from-purple-500/10 via-purple-300/5 to-transparent",
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative p-6 rounded-3xl bg-gradient-to-br ${gradient} border border-white/10 
        shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-xl overflow-hidden ${className}`}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-10 absolute inset-0 rounded-3xl"
          priority={false}
        />
      )}
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        {icon && <div className="text-4xl text-purple-500">{icon}</div>}
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AICapabilityCard;
