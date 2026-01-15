import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import dynamic from "next/dynamic"

// Lazy load components that are below the fold for better initial load performance
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const SegmentsSection = dynamic(() => import("@/components/segments-section").then(mod => ({ default: mod.SegmentsSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const OrganizersSection = dynamic(() => import("@/components/organizers-section").then(mod => ({ default: mod.OrganizersSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const PartnersSection = dynamic(() => import("@/components/partners-section").then(mod => ({ default: mod.PartnersSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const HubSpokeNetworkSection = dynamic(() => import("@/components/hub-spoke-network-section").then(mod => ({ default: mod.HubSpokeNetworkSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const KeyImpactsSection = dynamic(() => import("@/components/key-impacts-section").then(mod => ({ default: mod.KeyImpactsSection })), {
  loading: () => <div className="min-h-[400px]" />,
})

const CallToAction = dynamic(() => import("@/components/call-to-action").then(mod => ({ default: mod.CallToAction })), {
  loading: () => <div className="min-h-[200px]" />,
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[200px]" />,
})

// ScrollToTop is a client component, lazy load it
const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then(mod => ({ default: mod.ScrollToTop })))

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
