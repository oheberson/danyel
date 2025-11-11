"use client";

import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section className="bg-white pt-20 pb-10 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">
              sobre o mentor
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Música que respeita sua história e seus objetivos
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Tenho mais de uma década de atuação como educador musical, e
              instrumentista. Meu trabalho iniciou simplesmente reproduzindo o
              que eu sabia e se transformou em um método autoral de ensino, onde
              cada encontro é construído a partir da escuta e das referências do
              aluno.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Reúno influências de MPB, Jazz e música contemporânea para
              explicar harmonia sem jargões, destravando a percepção musical e a
              autoria. O objetivo é que você crie repertório, não apenas repita
              acordes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pastel-lavender/40 to-pastel-blue/30 p-10 shadow-lg shadow-pastel-blue/20"
          >
            <div className="space-y-6 text-left">
              <blockquote className="text-xl font-semibold text-gray-900">
                “O violão é uma extensão da sua voz. Quando você entende o que
                está tocando, cada nota tem significado.”
              </blockquote>
              <p className="text-base text-gray-700">
                As aulas valorizam repertório autoral, improvisação e arranjos
                personalizados. Você aprende a conectar técnica e emoção,
                desenvolvendo um som que é só seu.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
