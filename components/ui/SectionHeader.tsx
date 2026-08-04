"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0F0F10] text-[#FAFAFA] mb-4 border border-neutral-800 shadow-sm ${centered ? "mx-auto" : ""}`}>
        <span className="w-2 h-2 rounded-full bg-[#B8FF2C] animate-pulse" />
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F0F10]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
}
