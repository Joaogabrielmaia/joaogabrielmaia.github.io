"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, CheckCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "./ui/Icons";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  award?: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  tags: string[];
  features: string[];
  metrics?: string[];
  demoUrl?: string;
  githubUrl?: string;
  isHero?: boolean;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const imageList = project.images && project.images.length > 0 ? project.images : [project.image];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F0F10]/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-neutral-200/90 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Top Banner Image & Carousel */}
          <div className="relative w-full h-56 sm:h-80 bg-neutral-950 overflow-hidden group/carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full"
              >
                <Image
                  src={imageList[currentImageIndex]}
                  alt={`${project.title} - Visualização ${currentImageIndex + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors focus:outline-none z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Carousel Controls (Show if multiple images exist) */}
            {imageList.length > 1 && (
              <>
                {/* Counter Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#B8FF2C] font-mono text-xs font-bold border border-white/10 z-20">
                  {currentImageIndex + 1} / {imageList.length}
                </div>

                {/* Left Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black hover:text-[#B8FF2C] transition-all border border-white/10 shadow-lg z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black hover:text-[#B8FF2C] transition-all border border-white/10 shadow-lg z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  {imageList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? "w-6 bg-[#B8FF2C]"
                          : "w-2 bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Banner Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6 z-10">
              {project.award && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#B8FF2C] text-[#0F0F10] mb-2 shadow-sm">
                  <Award className="w-4 h-4" />
                  {project.award}
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Extended Description */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                Visão Geral do Projeto
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
                Principais Funcionalidades & Arquitetura
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/60"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-800 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#0F0F10] text-[#FAFAFA]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B8FF2C] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Indicadores & Métricas Chave
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="text-xs text-neutral-300 font-medium">
                      • {metric}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Actions (Render if URL exists) */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="p-6 border-t border-neutral-200 bg-neutral-50/80 flex flex-wrap items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-900 border border-neutral-300 font-semibold text-xs hover:bg-neutral-100 transition-colors shadow-2xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  Ver Código no GitHub
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F0F10] text-[#FAFAFA] font-semibold text-xs hover:bg-black transition-colors shadow-md border border-neutral-800"
                >
                  <span>Acessar Demo</span>
                  <ExternalLink className="w-4 h-4 text-[#B8FF2C]" />
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
