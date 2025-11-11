"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Book } from "lucide-react";
import Image from "next/image";
import { useHighlightAnimation } from "../hooks/useHighlightAnimation";
import { EBOOK_DOWNLOAD_URL } from "../config/links";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef(null);
  const notaRef = useRef(null);
  const subtitleRef = useRef(null);
  const guitarRef = useRef(null);
  const ctaRef = useRef(null);
  const [isStickyCTA, setIsStickyCTA] = useState(false);
  const destravarHighlightRef = useHighlightAnimation({ delay: 1.6 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate guitar image
      if (guitarRef.current) {
        gsap.fromTo(
          guitarRef.current,
          {
            opacity: 0,
            scale: 0.9,
            x: 50,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      // Animate N.O.T.A. letters individually
      const letters = notaRef.current?.querySelectorAll(".nota-letter");
      if (letters) {
        gsap.fromTo(
          letters,
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.1,
            delay: 0.5,
          }
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 1.2,
          }
        );
      }

      // Animate CTA
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.6,
          }
        );
      }
    });

    let stickyTrigger;

    if (heroRef.current) {
      stickyTrigger = ScrollTrigger.create({
        trigger: heroRef.current,
        start: "bottom top+=80",
        onLeave: () => setIsStickyCTA(true),
        onEnterBack: () => setIsStickyCTA(false),
      });
    }

    return () => {
      ctx.revert();
      stickyTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] lg:min-h-screen flex items-center bg-gradient-to-br from-pastel-blue via-beige-50 to-pastel-lavender overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/20 via-pastel-blue/30 to-pastel-lavender/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(248,232,232,0.4),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(232,240,248,0.3),transparent_60%)] pointer-events-none" />

      {/* Two-column grid layout */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[calc(100vh-10rem)]">
          {/* Left Column: Text and CTA */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* N.O.T.A. Acronym */}
              <div
                ref={notaRef}
                className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-6"
              >
                {["N", ".", "O", ".", "T", ".", "A"].map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`nota-letter text-6xl md:text-6xl lg:text-7xl font-bold ${
                      letter === "." ? "text-pastel-grey" : "text-black"
                    }`}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Subtitle */}
              <motion.h1
                ref={subtitleRef}
                className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light leading-tight mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                30 Dias para{" "}
                <span className="relative inline-block">
                  <span
                    ref={destravarHighlightRef}
                    className="absolute bottom-0 left-0 h-full w-full -z-10 rounded-sm bg-[#d9d9d9]"
                    style={{
                      transformOrigin: "left center",
                      transform: "scaleX(0)",
                    }}
                  />
                  <span className="relative z-10"> Destravar </span>
                </span>{" "}
                no Violão
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Use o Método N.O.T.A. para sair da estagnação e tocar com
                liberdade real
              </motion.p>

              {/* CTA Button */}
              <motion.div
                ref={ctaRef}
                className="mt-8 flex justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <motion.a
                  href={EBOOK_DOWNLOAD_URL}
                  download="EBOOK_NOTA.pdf"
                  className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-semibold text-base md:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Baixar o Ebook Completo
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Guitar Image */}
          <div
            ref={guitarRef}
            className="relative h-full flex items-start lg:items-center justify-center lg:justify-end overflow-hidden"
          >
            <div className="relative w-full h-[40vh] lg:h-full lg:max-h-[80vh] flex items-start lg:items-center justify-center overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200/70 sm:h-80 sm:w-80 md:h-[36rem] md:w-[36rem] lg:h-[36rem] lg:w-[36rem] -z-10"
              />
              <Image
                src="/images/minified_guitar.png"
                alt="Acoustic Guitar"
                width={600}
                height={800}
                className="relative z-10 w-full h-[200%] lg:h-full object-contain object-top lg:object-center scale-120 md:scale-100"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isStickyCTA && (
          <motion.a
            key="floating-cta"
            href={EBOOK_DOWNLOAD_URL}
            download="EBOOK_NOTA.pdf"
            aria-label="Baixar o Ebook Completo"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            <Book aria-hidden="true" className="h-5 w-5" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Decorative scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
