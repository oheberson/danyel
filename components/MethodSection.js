'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const notaSteps = [
  {
    letter: 'N',
    title: 'Nível Real',
    description: 'Antes de tudo, você precisa entender onde está e o que está te travando. Avalie sua fluidez, ritmo e troca de acordes. Identifique falhas invisíveis e quebre padrões que te impedem de avançar.',
    color: 'from-pastel-blue to-pastel-green',
  },
  {
    letter: 'O',
    title: 'Organização de Rotina',
    description: 'Saber o que estudar não adianta se você não souber como organizar isso no seu dia. Crie uma rotina simples e funcional (20 a 30 min por dia). Monte um plano de estudos semanal sem sobrecarga.',
    color: 'from-pastel-yellow to-pastel-pink',
  },
  {
    letter: 'T',
    title: 'Técnica com Propósito',
    description: 'Aqui você aprende a treinar do jeito certo. Nada de exercícios aleatórios. Tudo que você fizer vai ter um objetivo claro: melhorar troca de acordes, aumentar fluidez, dominar batidas com variação.',
    color: 'from-pastel-lavender to-pastel-blue',
  },
  {
    letter: 'A',
    title: 'Aplicação Musical',
    description: 'De nada adianta treinar se você não aplica. Essa etapa é onde tudo se transforma em música real. Escolha músicas que combinem com seu nível, aprenda a variar arranjos e pratique com emoção.',
    color: 'from-pastel-pink to-pastel-lavender',
  },
]

export default function MethodSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.method-card')
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 80,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.15,
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
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
            O Método N.O.T.A.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um sistema criado especialmente pra quem já toca, mas se sente travado — e quer destravar o som, a técnica e a emoção ao tocar, com apenas 20 a 30 minutos por dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {notaSteps.map((step, index) => (
            <motion.div
              key={step.letter}
              className={`method-card bg-gradient-to-br ${step.color} rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {step.letter}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-base md:text-lg font-medium">
                {step.description}
              </p>
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
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            <strong className="text-black">Um sistema que funciona.</strong> Porque tem lógica. Começa corrigindo o que está te travando, organiza seu estudo de forma leve e eficiente, foca em técnica com resultado visível, e aplica tudo em músicas reais.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
