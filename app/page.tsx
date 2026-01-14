import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SegmentsSection } from "@/components/segments-section"
import { OrganizersSection } from "@/components/organizers-section"
import { PartnersSection } from "@/components/partners-section"
import { HubSpokeNetworkSection } from "@/components/hub-spoke-network-section"
import { KeyImpactsSection } from "@/components/key-impacts-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SegmentsSection />
      <OrganizersSection />
      <PartnersSection />
      <HubSpokeNetworkSection />
      <KeyImpactsSection />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
