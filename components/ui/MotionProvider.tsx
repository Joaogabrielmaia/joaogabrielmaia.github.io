"use client";

import { MotionConfig } from "framer-motion";

/** Respeita `prefers-reduced-motion`: com a preferência ligada, framer-motion desliga animações de transform. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
