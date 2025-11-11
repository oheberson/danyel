"use client";

import { motion } from "framer-motion";
import { Brain, FileHeadphone, AudioWaveform } from "lucide-react";

const pillars = [
  {
    title: "Técnica com intenção",
    description:
      "Desenvolva coordenação, digitação e expressão com exercícios que se conectam diretamente ao repertório que você ama tocar.",
    icon: Brain,
  },
  {
    title: "Harmonia descomplicada",
    description:
      "Traga recursos do Jazz e da MPB para deixar seus acordes mais interessantes, entendendo a lógica por trás da música.",
    icon: AudioWaveform,
  },
  {
    title: "Suporte integral",
    description:
      "Receba materiais exclusivos em PDF, áudio e vídeo para praticar em casa com segurança e ter feedback constante.",
    icon: FileHeadphone,
  },
];

export function TeachingApproachSection() {
  return (
    <section className="bg-gradient-to-b from-white to-pastel-blue/20 py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Um método que une teoria, prática e musicalidade
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            A mentoria vai além de decorar cifras. Construímos percepção,
            repertório autoral e confiança artística em cada etapa da jornada.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg shadow-pastel-blue/20 ring-1 ring-pastel-blue/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pastel-blue/40 text-pastel-blue-900">
                <pillar.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
