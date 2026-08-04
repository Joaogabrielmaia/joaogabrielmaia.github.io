"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function OrganicWaveGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-visible">
      {/* Single Organic Wave Layer - Clean, Pure Transparent Floating Lines */}
      <motion.div
        animate={{
          y: [0, -12, 8, 0],
          rotate: [0, 360],
          scale: [0.97, 1.04, 0.98, 0.97],
        }}
        transition={{
          y: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-[140%] h-[140%] max-w-[600px] max-h-[600px] flex items-center justify-center"
      >
        <Image
          src="/organic-wave.png"
          alt="Organic Wave Model"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
