"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb, Zap, Brain } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function SupportNetworkSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const partners = [
    {
      name: "Vijnana Bharati",
      role: "Knowledge Partner",
      logo: "/vijnana-bharati-logo.png",
      icon: Lightbulb,
      gradient: "from-orange-500 to-red-600",
      scale: 1.1,
      objectFit: "contain" as const,
      url: "https://vijnanabharati.org/",
    },
    {
      name: "CoGrad",
      role: "Execution Partner",
      logo: "/cograd-logo.png",
      icon: Zap,
      gradient: "from-blue-600 to-indigo-700",
      scale: 1.2,
      objectFit: "contain" as const,
      url: "https://cograd.in/",
    },
    {
      name: "Medha AI",
      role: "Innovation & AI Partner",
      logo: "/medha-ai-logo.png",
      icon: Brain,
      gradient: "from-purple-600 to-pink-600",
      scale: 4.0,
      objectFit: "contain" as const,
      url: "https://medha.cograd.in/",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center mb-10 sm:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-4">
            Support Network
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">
            Strategic partners powering India's innovation ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-0">
          {partners.map((partner, index) => (
            <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card
                className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-2 border-gray-100 hover:border-transparent hover:scale-105 cursor-pointer ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="p-1.5 sm:p-2 bg-gray-100 group-hover:bg-white/20 rounded-lg transition-colors">
                      <partner.icon
                        size={16}
                        className="text-gray-700 group-hover:text-white transition-colors sm:w-5 sm:h-5"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-600 group-hover:text-white/90 transition-colors">
                      {partner.role}
                    </span>
                  </div>

                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} rounded-full blur-lg sm:blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}
                      ></div>
                      <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden p-4 sm:p-6">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={192}
                          height={192}
                          className="object-contain w-full h-full"
                          style={{ transform: `scale(${partner.scale})` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partner name */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 group-hover:text-white text-center transition-colors leading-tight">
                    {partner.name}
                  </h3>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
