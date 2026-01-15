"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Building2, ArrowRight, Globe, Calendar, Download } from "lucide-react"
import { useState, useEffect } from "react"
import { RegistrationModal } from "@/components/registration-modal"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1jm4hW_SkOEG5UnnrNsNg1h6Fv1f2pwX_", "_blank")
  }

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/FXRS6ptjENbD3zbZ8", "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 pt-20 sm:pt-32 pb-8 sm:pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-5 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-8 pt-2 sm:pt-20">
            <div className={`space-y-2 sm:space-y-4 ${mounted ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight px-2">
                SANKALP{" "}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  2026
                </span>
              </h1>

              <div className="space-y-0.5 sm:space-y-1 px-4 sm:px-6">
                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/95 font-semibold leading-relaxed">
                  Skilling and Nurturing Knowledge for
                </p>
                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/95 font-semibold leading-relaxed">
                  Aatmanirbhar Leadership and Prosperity
                </p>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 ${mounted ? "animate-fade-in-up delay-200" : "opacity-0"}`}
            >
              <button
                onClick={handleLocationClick}
                className="flex items-center justify-center gap-2 bg-white/95 px-4 py-2.5 sm:py-3.5 rounded-lg sm:rounded-2xl shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-sm border-b-4 border-gradient-to-r from-orange-500 via-blue-600 to-green-600 cursor-pointer group"
                type="button"
                aria-label="View MNNIT location on map"
              >
                <div className="flex items-center gap-1.5 pr-2 border-r-2 border-gray-300">
                  <Building2
                    size={16}
                    className="text-blue-900 flex-shrink-0 group-hover:scale-110 transition-transform"
                    strokeWidth={2.5}
                  />
                  <span className="text-xs sm:text-base font-bold text-gray-900">MNNIT Allahabad</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin
                    size={16}
                    className="text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform"
                    strokeWidth={2.5}
                  />
                  <span className="text-xs sm:text-base font-bold text-gray-900">Prayagraj, UP</span>
                </div>
              </button>

              <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 sm:py-3.5 rounded-lg sm:rounded-2xl shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 border-b-4 border-orange-700 group w-full sm:w-auto max-w-sm">
                <Calendar
                  size={16}
                  className="text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                  strokeWidth={2.5}
                />
                <span className="text-xs sm:text-base font-bold text-white whitespace-nowrap">March 24-26, 2026</span>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 px-4 ${mounted ? "animate-fade-in-up delay-300" : "opacity-0"}`}
            >
              <Button
                size="lg"
                onClick={handleDownload}
                className="text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 bg-white text-primary hover:bg-white/90 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 font-bold group rounded-lg sm:rounded-2xl w-full sm:w-auto max-w-xs border-2 border-primary/20"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={18} />
                Download Brochure
              </Button>

              <Button
                size="lg"
                onClick={() => setIsRegisterModalOpen(true)}
                className="text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 font-bold group rounded-lg sm:rounded-2xl w-full sm:w-auto max-w-xs border-0"
              >
                Register for Summit
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
              </Button>
            </div>

            <div
              className={`flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-3 sm:gap-3 lg:gap-8 px-4 ${mounted ? "animate-fade-in-scale delay-400" : "opacity-0"}`}
            >
              {/* Mobile: Partner boxes in one row */}
              <div className="flex lg:hidden flex-row items-stretch justify-center gap-3 w-full max-w-md">
                {/* Left Partner Box - Cograd (Innovation Partner) */}
                <a
                  href="https://cograd.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-xl px-2.5 py-2 border-2 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 flex-1 max-w-[140px] relative overflow-hidden group flex flex-col cursor-pointer"
                  aria-label="Visit Cograd website"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                  <p className="text-[7px] text-green-300 mb-1 uppercase tracking-tight font-bold text-center whitespace-nowrap">
                    Innovation Partner
                  </p>
                  <div className="bg-white/95 rounded-lg p-2 mb-1 flex-1 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Image
                      src="/cograd-logo.png"
                      alt="Cograd Logo"
                      width={50}
                      height={50}
                      className="w-auto h-auto max-w-full max-h-[45px] object-contain"
                    />
                  </div>
                  <p className="text-[9px] font-bold text-white text-center">Cograd</p>
                </a>

                {/* Right Partner Box - Vijnana Bharati (Knowledge Partner) */}
                <a
                  href="https://vijnanabharati.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-xl px-2.5 py-2 border-2 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 flex-1 max-w-[140px] w-full relative overflow-hidden group flex flex-col cursor-pointer"
                  aria-label="Visit Vijnana Bharati website"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  <p className="text-[7px] text-orange-300 mb-1 uppercase tracking-tight font-bold text-center whitespace-nowrap">
                    Knowledge Partner
                  </p>
                  <div className="bg-white/95 rounded-lg p-2 mb-1 flex-1 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Image
                      src="/vijnana-bharati-logo.png"
                      alt="Vijnana Bharati Logo"
                      width={50}
                      height={50}
                      className="w-auto h-auto max-w-full max-h-[45px] object-contain"
                    />
                  </div>
                  <p className="text-[9px] font-bold text-white text-center">Vijnana Bharati</p>
                </a>
              </div>

              {/* Mobile: Organised By box below partners */}
              <div className="lg:hidden bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-xl px-4 py-3 border-2 border-white/30 shadow-2xl w-full max-w-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                <p className="text-[8px] text-orange-300 mb-1.5 uppercase tracking-wider font-bold text-center">
                  Organised by
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-black text-white leading-tight text-center">
                    Design Innovation Centre (DIC)
                  </p>
                  <p className="text-xs font-semibold text-white/95 text-center">MNNIT Allahabad, Prayagraj</p>
                  <div className="flex justify-center">
                    <a
                      href="https://www.mnnit.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-orange-300 hover:text-orange-200 transition-colors font-medium hover:underline"
                      aria-label="Visit MNNIT website"
                    >
                      <Globe size={10} className="flex-shrink-0" />
                      <span>www.mnnit.ac.in</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop: Original horizontal layout - unchanged */}
              <div className="hidden lg:flex flex-row items-stretch justify-center gap-8 w-full">
                {/* Left Partner Box - Cograd (Innovation Partner) */}
                <a
                  href="https://cograd.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl px-3 py-3 border-2 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 max-w-[120px] w-full relative overflow-hidden group flex flex-col cursor-pointer"
                  aria-label="Visit Cograd website"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                  <p className="text-[8px] text-green-300 mb-0.5 uppercase tracking-tight font-bold text-center whitespace-nowrap">
                    Innovation Partner
                  </p>
                  <div className="bg-white/95 rounded-lg p-1.5 mb-0.5 flex-1 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Image
                      src="/cograd-logo.png"
                      alt="Cograd Logo"
                      width={50}
                      height={50}
                      className="w-auto h-auto max-w-full max-h-[45px] object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-bold text-white text-center">Cograd</p>
                </a>

                {/* Center - Organised By Box */}
                <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 border-2 border-white/30 shadow-2xl max-w-sm w-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                  <p className="text-xs text-orange-300 mb-1.5 uppercase tracking-wider font-bold">Organised by</p>
                  <div className="space-y-1">
                    <p className="text-base md:text-lg font-black text-white leading-tight">Design Innovation Centre</p>
                    <p className="text-sm font-semibold text-white/95">DIC</p>
                    <p className="text-sm font-semibold text-white/95">MNNIT Allahabad, Prayagraj</p>
                    <a
                      href="https://www.mnnit.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-orange-300 hover:text-orange-200 transition-colors font-medium mt-1 hover:underline"
                      aria-label="Visit MNNIT website"
                    >
                      <Globe size={12} className="flex-shrink-0" />
                      <span>www.mnnit.ac.in</span>
                    </a>
                  </div>
                </div>

                {/* Right Partner Box - Vijnana Bharati (Knowledge Partner) */}
                <a
                  href="https://vijnanabharati.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl px-3 py-3 border-2 border-white/30 shadow-2xl hover:scale-105 transition-all duration-300 max-w-[120px] w-full relative overflow-hidden group flex flex-col cursor-pointer"
                  aria-label="Visit Vijnana Bharati website"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  <p className="text-[8px] text-orange-300 mb-0.5 uppercase tracking-tight font-bold text-center whitespace-nowrap">
                    Knowledge Partner
                  </p>
                  <div className="bg-white/95 rounded-lg p-1.5 mb-0.5 flex-1 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Image
                      src="/vijnana-bharati-logo.png"
                      alt="Vijnana Bharati Logo"
                      width={50}
                      height={50}
                      className="w-auto h-auto max-w-full max-h-[45px] object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-bold text-white text-center">Vijnana Bharati</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-10 sm:h-14 md:h-20">
            <path
              fill="white"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
      <RegistrationModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
    </>
  )
}
