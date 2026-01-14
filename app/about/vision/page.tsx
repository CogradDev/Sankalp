"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VisionSection } from "@/components/vision-section"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function VisionObjectivesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Tricolor Accent Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-400">About Us</span>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">Vision & Objectives</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-slate-900 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-16 h-1 bg-white rounded-full"></div>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Vision & Objectives</h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Shaping India's Future Through Skills, Innovation & Entrepreneurship
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <VisionSection />
      </main>

      <Footer />
    </div>
  )
}
