"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHighlightAnimation } from "../hooks/useHighlightAnimation";
import { EBOOK_DOWNLOAD_URL } from "../config/links";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef(null);
  const verdadeHighlightRef = useHighlightAnimation({ delay: 1.6 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl pt-14 font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Você já sabe tocar. Agora é hora de{" "}
            <span className="relative inline-block">
              <span
                ref={verdadeHighlightRef}
                className="absolute bottom-0 left-0 h-full w-full -z-10 rounded-sm bg-[#d9d9d9]"
                style={{
                  transformOrigin: "left center",
                  transform: "scaleX(0)",
                }}
              />
              <span className="relative z-10"> tocar de verdade</span>
            </span>
            .
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Se você quer voltar a sentir orgulho ao pegar o violão, tocar com
            confiança na frente dos outros, variar seu repertório e emocionar
            com seu som...
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-black font-semibold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Então você está exatamente no lugar certo.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href={EBOOK_DOWNLOAD_URL}
              download="EBOOK_NOTA.pdf"
              className="bg-black text-white px-10 py-5 rounded-2xl font-semibold text-lg md:text-xl hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Baixar o Ebook Completo
            </motion.a>

            <motion.a
              href="https://api.whatsapp.com/send?phone=5519995689797&text=Ol%C3%A1%2C%20Danyel!%20Quero%20agendar%20uma%20aula%20experimental."
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg md:text-xl hover:bg-beige-50 transition-colors duration-300 shadow-lg hover:shadow-xl border-2 border-black w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Agendar Mentoria
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="relative min-h-[60vh] w-full">
        <Image
          src="/images/danyel_author.png"
          alt="Foto de Danyel Pereira"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />

        <div className="relative z-10 flex min-h-[60vh] w-full items-center">
          <div className="w-full">
            <div className="container mx-auto px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-white"
              >
                <p className="text-sm pt-4 uppercase tracking-[0.6em] text-white/70 mb-6">
                  Sobre o autor
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Um mentor que vive o violão com propósito todos os dias
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-white/85 leading-relaxed mb-8">
                  Danyel Pereira é músico formado em Violão Popular pelo
                  Conservatório Carlos Gomes e estudou na EMESP. Com uma
                  didática prática e humana, tem ajudado violonistas a saírem da
                  estagnação, explorando arranjos, fingerstyle e liberdade
                  musical. Seu método N.O.T.A. nasceu da experiência real em
                  sala de aula — é um caminho criado para que qualquer pessoa
                  possa destravar o violão em 30 dias.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
