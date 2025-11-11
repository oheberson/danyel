"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const weeks = [
  {
    week: "Semana 1",
    title: "Diagnóstico e Organização",
    description:
      'Descubra onde você está e monte sua rotina. Faça o exercício "Raio-X do Meu Som" e anote seus pontos fracos. Monte seu plano semanal com base no que você precisa melhorar.',
    result:
      "Maior consciência dos seus erros, menos ansiedade ao praticar, um plano claro na mão.",
  },
  {
    week: "Semana 2",
    title: "Técnica com Propósito",
    description:
      "Corrija os vícios que mais te atrapalham. Escolha 1 ou 2 exercícios específicos por dia. Trabalhe com foco no ritmo, limpeza e fluidez.",
    result:
      "Troca de acordes mais rápida, menos erros em batidas, mão mais solta.",
  },
  {
    week: "Semana 3",
    title: "Expressividade e Variação",
    description:
      'Sai do som "igual sempre" e traz vida pro que você toca. Treine novas batidas, dinâmicas, variações de acordes. Pratique tocar sentindo mais a música.',
    result:
      'Seu som mais interessante, mais prazer ao tocar, músicas soando mais "musicais".',
  },
  {
    week: "Semana 4",
    title: "Confiança ao Tocar",
    description:
      "Toque com segurança e emoção, sem medo ou tensão. Escolha 2 músicas que você gosta e domina. Toque pra alguém como se fosse uma pequena apresentação.",
    result:
      "Mais liberdade ao tocar, menos medo de errar, reações positivas de quem ouvir.",
  },
];

export default function JourneySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".journey-item");
      if (items) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: index * 0.15,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-32 bg-gradient-to-b from-white via-beige-50 to-pastel-blue relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,240,248,0.2),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-16 fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            30 Dias para Tocar com Emoção e Confiança
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um plano prático para sair da estagnação e começar a tocar com mais
            fluidez, confiança e emoção — mesmo que você tenha pouco tempo
            disponível.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {weeks.map((week, index) => (
            <motion.div
              key={index}
              className="journey-item bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-beige-200"
              whileHover={{ scale: 1.02, shadow: "xl" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      {week.week}
                    </h3>
                    <span className="text-lg font-semibold text-gray-600">
                      {week.title}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                    {week.description}
                  </p>
                  <div className="bg-beige-50 rounded-xl p-4 border-l-4 border-black">
                    <p className="text-gray-800 font-medium">
                      <strong className="text-black">
                        Você já vai sentir:
                      </strong>{" "}
                      {week.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Em 30 dias com o método N.O.T.A., você pode esperar:{" "}
            <strong className="text-black">
              um som mais limpo, fluido e bonito
            </strong>
            , mais segurança pra tocar com outras pessoas e para outras pessoas,
            repertório mais variado e interessante, e o principal:{" "}
            <strong className="text-black">
              mais prazer e orgulho de tocar
            </strong>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
