"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PartnersSection } from "@/components/partners-section"
import { RegistrationModal } from "@/components/registration-modal"

export default function PartnersPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onRegisterClick={() => setIsRegisterModalOpen(true)} />
      <main className="pt-24">
        <PartnersSection />
      </main>
      <Footer />

      <RegistrationModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
    </div>
  )
}
