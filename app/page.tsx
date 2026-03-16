import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { ServicesPreviewSection } from "@/components/sections/services-preview"
import { WorkPreviewSection } from "@/components/sections/work-preview"
import { GalleryPreviewSection } from "@/components/sections/gallery-preview"
import { ApproachSection } from "@/components/sections/approach"
import { GlobalPresenceSection } from "@/components/sections/global-presence"
import { ClientsSection } from "@/components/sections/clients"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreviewSection />
        <ServicesPreviewSection />
        <WorkPreviewSection />
        <GalleryPreviewSection />
        <ApproachSection />
        <GlobalPresenceSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
