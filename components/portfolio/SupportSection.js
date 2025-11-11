"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, MonitorSmartphone } from "lucide-react";

const formats = [
  {
    title: "Aula experimental gratuita",
    description:
      "Entenda seus objetivos, conheça a metodologia na prática e já saia com uma visão clara das próximas etapas.",
    icon: TrendingUp,
  },
  {
    title: "Presencial ou online",
    description:
      "Atendo em Campinas/SP, em estúdio ou a domicílio, além de sessões online com a mesma qualidade e suporte.",
    icon: MapPin,
  },
  {
    title: "Acompanhamento semanal",
    description:
      "Encontros de 60 minutos + suporte via WhatsApp para ajustes entre uma aula e outra, para ajustes e feedback prático.",
    icon: MonitorSmartphone,
  },
];

export function SupportSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Como funciona a mentoria
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Uma jornada estruturada com feedback constante e materiais
            exclusivos para evoluir com consistência.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {formats.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige-100 text-gray-900">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
