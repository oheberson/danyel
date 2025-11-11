"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useHighlightAnimation } from "@/hooks/useHighlightAnimation";

export function FeaturedMethodSection() {
  const highlightRef = useHighlightAnimation({ delay: 0.2 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pastel-blue/40 via-white to-pastel-lavender/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_65%)]" />
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">
            destaque
          </p>
          <h2 className="mt-6 text-3xl font-semibold text-gray-900 md:text-4xl">
            Método{" "}
            <span className="relative inline-block">
              <span
                ref={highlightRef}
                className="absolute inset-x-0 bottom-0 top-2 -z-10 rounded-md bg-white/80"
                style={{
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                }}
              />
              <span className="relative">N.O.T.A.</span>
            </span>{" "}
            para destravar seu violão
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Um programa focado em destravar a técnica, otimizar a prática e
            criar liberdade musical em 30 dias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/landing-nota"
            className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Conhecer o método
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
