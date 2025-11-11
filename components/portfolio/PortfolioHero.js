"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.instagram.com/danyel.ps",
    label: "Instagram de Danyel",
    icon: Instagram,
  },
  {
    href: "https://maps.app.goo.gl/tBHJcsr4mpQiD2sR7",
    label: "Local de aulas de Danyel",
    icon: MapPin,
  },
  {
    href: "https://api.whatsapp.com/send?phone=5519995689797&text=Ol%C3%A1%2C%20Danyel!%20Quero%20agendar%20uma%20aula%20experimental.",
    label: "Conversar pelo WhatsApp com Danyel",
    svg: "/whatsapp.svg",
  },
];

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#050608] text-white">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#10131a] blur-[120px]" />
        <div className="absolute right-10 top-1/3 h-80 w-80 rounded-full bg-[#1d202a] opacity-80 blur-[140px]" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-[#0f121c] blur-[160px]" />
      </div>

      <header className="relative z-10 flex items-center justify-center px-6 py-8 md:px-12">
        {/* <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70"
        >
          Danyel Pereira
        </motion.span> */}
      </header>

      <div className="relative mt-4 md:mt-0 z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-8 px-6 pb-20 md:px-12 lg:flex-row lg:items-center lg:gap-24">
        {/* Copy */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-[#f97316]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#f97316]"
          >
            Violão com propósito
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.1] tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            DANYEL PEREIRA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-white/70 sm:text-lg md:text-xl lg:text-left"
          >
            Aprenda violão de verdade.
            <br />
            Do zero ao seu repertório favorito com um método claro e
            personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Link
              href="https://api.whatsapp.com/send?phone=5519995689797&text=Ol%C3%A1%2C%20Danyel!%20Quero%20agendar%20uma%20aula%20experimental."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-lg transition hover:bg-[#fb8c2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
            >
              Agende sua Aula Experimental Grátis
            </Link>
            <Link
              href="/landing-nota"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
            >
              Conheça o Método N.O.T.A.
            </Link>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative h-[320px] w-[520px] sm:h-[360px] sm:w-[600px] md:h-[380px] md:w-[660px] lg:h-[420px] lg:w-[720px]">
            <div className="absolute inset-4 md:-translate-x-10 md:translate-y-4 rounded-[2.75rem] border border-white/30" />
            <div className="absolute inset-10 rounded-[2.25rem]" />
            <Image
              src="/images/danyel_author.png"
              alt="Retrato de Danyel Pereira com violão"
              fill
              priority
              sizes="(min-width: 1024px) 720px, (min-width: 768px) 660px, 520px"
              className="relative z-10 rounded-[2rem] object-contain object-center shadow-[0_35px_70px_-30px_rgba(0,0,0,0.7)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Socials */}
      <motion.ul
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pointer-events-auto absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
      >
        {socialLinks.map((social) => (
          <li key={social.label}>
            <Link
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#f97316]/70 hover:bg-[#f97316]/10 hover:text-[#f97316]"
              aria-label={social.label}
            >
              {social.icon ? (
                <social.icon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Image
                  src={social.svg ?? ""}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              )}
            </Link>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed inset-x-0 top-4 z-40 flex items-center justify-center gap-3 px-4 lg:hidden"
      >
        <div className="flex rounded-full gap-3 border border-white/10 bg-black/60 backdrop-blur-md px-5 py-2 shadow-lg shadow-black/40">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:text-[#f97316]"
              aria-label={social.label}
            >
              {social.icon ? (
                <social.icon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Image
                  src={social.svg ?? ""}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
