"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const struggles = [
  {
    title: "De novo essa música",
    description:
      "Quando alguém pede pra você tocar, a mesma sequência de quatro músicas aparece. Parece que seu repertório está preso.",
  },
  {
    title: "Toco ela sempre do mesmo jeito",
    description:
      "A batida, a dinâmica e o clima nunca mudam. Você sente que a música até sai “certinha”, mas fica igual toda vez.",
  },
  {
    title: "Sempre erro na mesma parte",
    description:
      "Existe um compasso, uma troca ou uma síncope que emperra. Mesmo depois de horas praticando, o tropeço continua lá.",
  },
  {
    title: "Não estou transmitindo emoção",
    description:
      "O som sai, mas não emociona. Falta aquele brilho que faz as pessoas pararem para ouvir – e isso machuca quem ama tocar.",
  },
  {
    title: "Sem cifra não consigo",
    description:
      "Se a cifra some, o medo aparece. Você até conhece a música, mas parece que o violão não responde sem o papel ou o celular.",
  },
  {
    title: "Estudo, mas não evoluo",
    description:
      "Você treina toda semana, anota tudo, segue vídeos… e mesmo assim sente que permanece no mesmo ponto.",
  },
];

export default function ProblemSection() {
  const [unlockedIndex, setUnlockedIndex] = useState(-1);
  const [pluckedIndex, setPluckedIndex] = useState(null);
  const pluckTimeoutRef = useRef(null);

  const handlePluck = (index) => {
    if (index > unlockedIndex + 1) return;

    if (pluckTimeoutRef.current) {
      window.clearTimeout(pluckTimeoutRef.current);
    }

    setPluckedIndex(index);
    pluckTimeoutRef.current = window.setTimeout(
      () => setPluckedIndex(null),
      350
    );

    if (index === unlockedIndex + 1 && unlockedIndex < struggles.length - 1) {
      setUnlockedIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    return () => {
      if (pluckTimeoutRef.current) {
        window.clearTimeout(pluckTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-beige-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            A Dor que Ninguém Vê
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Você pega o violão. Toca. E até sente um certo prazer — mas, lá no
            fundo, vem aquele incômodo
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {struggles.map((struggle, index) => {
            const isUnlocked = index <= unlockedIndex;
            const isReady = index === unlockedIndex + 1;
            const isActive = isReady;

            return (
              <motion.div
                key={struggle.title}
                className={`relative rounded-3xl border bg-white/85 px-6 py-6 transition-all duration-500 ${
                  isUnlocked
                    ? "border-black/10 shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                    : "border-black/5 shadow-[0_12px_24px_rgba(15,23,42,0.05)]"
                } ${
                  isReady || isUnlocked
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
                onClick={() => handlePluck(index)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <motion.span
                  className={`pointer-events-none absolute left-[-12px] right-[-12px] top-1/2 block h-[3px] rounded-full ${
                    isUnlocked
                      ? "bg-gradient-to-r from-[#ccd1d6] via-[#f8fbff] to-[#c3c8cd] shadow-[0_4px_12px_rgba(15,23,42,0.18)]"
                      : "bg-gradient-to-r from-[#ccd1d6]/35 via-[#f8fbff]/30 to-[#c3c8cd]/35"
                  }`}
                  style={{ transformOrigin: "right center" }}
                  animate={
                    isUnlocked
                      ? { scaleX: 0 }
                      : pluckedIndex === index && isReady
                      ? { scaleY: 0.35 }
                      : { scaleX: 1, scaleY: 1 }
                  }
                  transition={{
                    scaleX: { duration: 0.45, ease: "easeInOut" },
                    scaleY: { type: "spring", stiffness: 630, damping: 22 },
                  }}
                />

                {isReady && (
                  <motion.span
                    className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 flex h-4 w-4 items-center justify-center"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [0.75, 1.1, 0.75],
                    }}
                    transition={{
                      duration: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="h-4 w-4 rounded-full bg-black" />
                  </motion.span>
                )}

                <div className="relative">
                  <h3
                    className={`text-lg md:text-xl font-semibold italic transition-colors duration-400 ${
                      isUnlocked
                        ? "text-gray-900"
                        : isReady
                        ? "text-black"
                        : "text-transparent"
                    }`}
                  >
                    "{struggle.title}"
                  </h3>

                  <AnimatePresence initial={false}>
                    {isUnlocked && (
                      <motion.p
                        key="description"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="mt-3 text-base md:text-lg leading-relaxed text-gray-700"
                      >
                        {struggle.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
