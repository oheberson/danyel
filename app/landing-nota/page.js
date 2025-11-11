'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import MethodSection from '@/components/MethodSection'
import FeaturesSection from '@/components/FeaturesSection'
import JourneySection from '@/components/JourneySection'
import CTASection from '@/components/CTASection'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function NotaLandingPage() {
  useEffect(() => {
    // Initialize GSAP scroll animations
    gsap.utils.toArray('.fade-in-up').forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <MethodSection />
      <FeaturesSection />
      <JourneySection />
      <CTASection />
    </main>
  )
}

