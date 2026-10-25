import { Geist, Geist_Mono, Syne, Pinyon_Script, Anton } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const syne = Syne({ variable: "--font-display", subsets: ["latin"], weight: ["500", "700", "800"], display: "swap" });
const anton = Anton({ variable: "--font-condensed", subsets: ["latin"], weight: "400", display: "swap" });
const pinyon = Pinyon_Script({ variable: "--font-script", subsets: ["latin"], weight: "400", display: "swap" });

export const fontClasses = [geistSans, geistMono, syne, anton, pinyon].map((f) => f.variable).join(" ");
