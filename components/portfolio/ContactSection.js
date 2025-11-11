"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="bg-black py-20 text-white md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            {/* <PhoneCall className="h-6 w-6" aria-hidden="true" /> */}
            <Image
              src="/whatsapp.svg"
              alt=""
              width={25}
              height={25}
              aria-hidden="true"
              className="h-6 w-6"
            />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Agende sua aula experimental gratuita
          </h2>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            Vamos mapear seus objetivos, montar um plano de estudo personalizado
            e iniciar uma jornada consistente no violão. Atendimento em
            Campinas/SP e online.
          </p>

          <div className="mt-10 flex flex-col items-center gap-14 md:gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://api.whatsapp.com/send?phone=5519995689797&text=Ol%C3%A1%2C%20Danyel!%20Quero%20agendar%20uma%20aula%20experimental."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Entrar em contato
            </Link>
            <p className="text-sm text-white/60">
              WhatsApp: (19) 99568-9797 • Instagram:{" "}
              <span className="font-medium text-white">@danyel.ps</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
