"use client";

import { motion } from "framer-motion";
import { Guitar } from "lucide-react";

const audience = [
  {
    title: "Iniciante Absoluto",
    description:
      "Comece com clareza. Aprenda os fundamentos sem pressa, com exercícios pensados para fortalecer ritmo, mãos e confiança.",
    amplitude: 6,
  },
  {
    title: "Retomador",
    description:
      "Estruture o que você já sabe, elimine hábitos que travam sua evolução e recupere o entusiasmo para tocar sempre.",
    amplitude: 12,
  },
  {
    title: "Intermediário",
    description:
      "Aprofunde harmonias, fingerstyle e interpretação musical com repertório que conversa com sua identidade artística.",
    amplitude: 24,
  },
];

const buildWavePath = (amplitude = 6, baseline = 12, width = 96) => {
  const mid = width / 2;
  return `M0 ${baseline} Q ${width * 0.25} ${
    baseline - amplitude
  } ${mid} ${baseline} T ${width} ${baseline}`;
};

function GuitarString({ amplitude }) {
  const relaxed = buildWavePath(amplitude * 0.45);
  const plucked = buildWavePath(amplitude * 0.8);

  return (
    <motion.svg
      width="96"
      height="24"
      viewBox="0 0 96 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
      className="text-pastel-blue-900"
    >
      <motion.path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
        d={relaxed}
        animate={{
          d: [relaxed, plucked, relaxed],
        }}
        transition={{
          duration: 1 + amplitude * 0.04,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

export function AudienceSection() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pastel-blue/40">
            <Guitar
              className="h-8 w-8 text-pastel-blue-900"
              aria-hidden="true"
            />
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-gray-900 md:text-4xl">
            Violão para diferentes jornadas
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Cada aula é adaptada ao seu ritmo e repertório favorito, com uma
            metodologia que combina técnica, teoria e musicalidade aplicada.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {audience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm shadow-gray-100/50 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <GuitarString amplitude={item.amplitude} />
              </div>
              <p className="mt-4 text-base text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
