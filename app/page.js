import { AudienceSection } from '@/components/portfolio/AudienceSection'
import { ContactSection } from '@/components/portfolio/ContactSection'
import { FeaturedMethodSection } from '@/components/portfolio/FeaturedMethodSection'
import { PortfolioHero } from '@/components/portfolio/PortfolioHero'
import { StorySection } from '@/components/portfolio/StorySection'
import { SupportSection } from '@/components/portfolio/SupportSection'
import { TeachingApproachSection } from '@/components/portfolio/TeachingApproachSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <PortfolioHero />
      <StorySection />
      <AudienceSection />
      <TeachingApproachSection />
      <SupportSection />
      <FeaturedMethodSection />
      <ContactSection />
    </main>
  )
}
