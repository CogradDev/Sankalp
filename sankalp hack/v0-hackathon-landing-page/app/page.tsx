"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemStatementsSection } from "@/components/problem-statements-section"
import { ScheduleSection } from "@/components/schedule-section"
import { PrizesSection } from "@/components/prizes-section"
import { JudgingSection } from "@/components/judging-section"
import { ParticipantsSection } from "@/components/participants-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { RegistrationModal } from "@/components/registration-modal"

export default function Home() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Navbar onRegisterClick={() => setIsRegistrationModalOpen(true)} />
      <HeroSection onRegisterClick={() => setIsRegistrationModalOpen(true)} />
      <ProblemStatementsSection onRegisterClick={() => setIsRegistrationModalOpen(true)} />
      <ScheduleSection />
      <PrizesSection />
      <JudgingSection />
      <ParticipantsSection />
      <AboutSection />
      <FaqSection />
      <Footer />
      <ScrollToTop />
      <RegistrationModal open={isRegistrationModalOpen} onOpenChange={setIsRegistrationModalOpen} />
    </main>
  )
}
