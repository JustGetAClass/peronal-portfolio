import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { Timeline } from '@/components/sections/Timeline'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-x-hidden">
      {/* Fixed background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-cyan" />
        <div className="orb orb-purple" />
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <MarqueeSection />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
