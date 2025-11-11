"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHighlightAnimation } from "../hooks/useHighlightAnimation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: "Não é sobre ser virtuoso",
    description:
      "Tocar bem não é sobre impressionar. É sobre emocionar. Você não precisa ser um virtuoso. Precisa controlar o que já sabe e colocar intenção em cada acorde, em cada batida, em cada silêncio.",
    icon: "🎯",
  },
  {
    title: "Pouco tempo? Sem problema",
    description:
      "Com 20 a 30 minutos por dia, é possível evoluir de verdade — desde que você tenha um método certo. Um caminho que mostra o que praticar, como praticar, e por que praticar.",
    icon: "⏰",
  },
  {
    title: "Você já tem o que precisa",
    description:
      "Você não precisa começar do zero. Já sabe tocar. Já tem repertório. O que falta é um método que destrave sua técnica, sua confiança e sua expressão.",
    icon: "✨",
  },
  {
    title: "Sente a diferença na primeira semana",
    description:
      "Não é um curso de teoria. É um sistema de prática e progresso. E o melhor: você sente a diferença já na primeira semana. O som começa a ficar mais limpo, bonito e confiante.",
    icon: "🚀",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const virtuosoHighlightRef = useHighlightAnimation({ delay: 1.6 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".feature-item");
      if (items) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              delay: index * 0.1,
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
      className="py-24 md:py-32 bg-gradient-to-b from-beige-50 to-white relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16 fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Por que N.O.T.A. é Diferente?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A virada de chave: você{" "}
            <span className="relative inline-block">
              <span
                ref={virtuosoHighlightRef}
                className="absolute bottom-0 left-0 h-full w-full -z-10 rounded-sm bg-[#d9d9d9]"
                style={{
                  transformOrigin: "left center",
                  transform: "scaleX(0)",
                }}
              />
              <span className="relative z-10"> não precisa ser virtuoso</span>
            </span>{" "}
            para tocar bem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-beige-100"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <div className="text-5xl mb-4">{feature.icon}</div> */}
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
