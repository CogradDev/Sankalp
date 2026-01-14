"use client"

import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { ArrowRight } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

interface HeroSectionProps {
  onRegisterClick?: () => void
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const scrollToProblems = () => {
    const element = document.getElementById("problem-statements")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 pb-8 sm:pb-12 px-6 sm:px-8 md:px-4 bg-gradient-to-br from-[#0f1f4f] via-[#1a2f6e] to-[#0d1a40]"
    >
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a8a]/30 to-[#0f1f4f]/60" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-full text-sm border border-white/30 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 shadow-lg mt-8">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-gray-900 font-semibold">SANKALP 2026 AI HACKATHON</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] text-balance animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0 tracking-tight px-2 sm:px-0">
          <span className="text-white">Sankalp Innovation</span>
          <br />
          <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Challenge 2026
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white max-w-3xl mx-auto text-pretty animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0 leading-snug px-2 sm:px-0">
          Building AI Solutions for Real-World India
        </p>

        <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0 px-2 sm:px-0">
          A <span className="text-orange-400 font-semibold">national-level AI and innovation challenge</span> hosted at{" "}
          <span className="font-semibold text-white">MNNIT Allahabad, Prayagraj </span> during{" "}
          <span className="text-orange-400 font-semibold">SANKALP 2026</span>. In Association with{" "}
          <span className="text-orange-400 font-semibold">Medha AI</span>.
        </p>

        <div className="flex items-center justify-center animate-[fadeInUp_1s_ease-out_0.7s_forwards] opacity-0 pt-4">
          <div className="inline-flex flex-col items-center gap-2 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 shadow-lg relative">
            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-t-2xl" />
            <span className="text-sm font-semibold text-gray-900 pt-2">
              POWERED BY <span className="text-orange-600">MEDHA AI</span>
            </span>
            <span className="text-xs text-gray-700">Technology & Innovation Partner</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-[slideInUp_1s_ease-out_0.8s_forwards] opacity-0 w-full px-2 sm:px-0">
          <Button
            size="lg"
            onClick={onRegisterClick}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white text-base font-semibold px-10 py-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            Register Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToProblems}
            className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-base font-semibold px-10 py-7 bg-transparent rounded-xl transition-all duration-300 hover:scale-105"
          >
            View Problem Statements
          </Button>
        </div>

        <div className="pt-16 animate-[scaleIn_1s_ease-out_1s_forwards] opacity-0">
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}
