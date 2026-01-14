"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PartnersSection() {
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

  const partnersRow1 = [
    {
      name: "Ministry of Education",
      logo: "/ministry-of-education-original.png",
      url: "https://www.education.gov.in/",
      scale: 1.0,
    },
    {
      name: "IIT BHU Varanasi (Hub)",
      logo: "/iit-bhu-original.png",
      url: "https://www.iitbhu.ac.in/",
      scale: 1.0,
    },
    {
      name: "BHU Varanasi (Hub)",
      logo: "/bhu-logo.png",
      url: "https://www.bhu.ac.in/",
      scale: 1.0,
    },
    {
      name: "IIIT Allahabad (Spoke)",
      logo: "/iiit-allahabad-original.png",
      url: "https://www.iiita.ac.in/",
      scale: 1.0,
    },
    {
      name: "University of Allahabad (Spoke)",
      logo: "/university-allahabad-original.png",
      url: "https://www.allduniv.ac.in/",
      scale: 1.0,
    },
  ]

  const partnersRow2 = [
    {
      name: "CSIR - The Innovation Engine of India",
      logo: "/csir-logo.png",
      url: "https://www.csir.res.in/",
      scale: 1.0,
    },
    {
      name: "Vijnana Bharati",
      logo: "/vijnana-bharati-logo.png",
      url: "https://vijnanabharati.org/",
      scale: 1.1,
    },
    {
      name: "CoGrad",
      logo: "/cograd-logo.png",
      url: "https://cograd.in/",
      scale: 1.2,
    },
    {
      name: "Medha AI",
      logo: "/medha-ai-logo.png",
      url: "https://medha.cograd.in/",
      scale: 4.0, // Increased MedhaAI logo scale to maximum 4.0 for clear visibility
    },
  ]

  return (
    <section
      id="partners"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-4">
            Our Partners &amp; Sponsors
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">
            Building India's future through strategic partnerships and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 px-4 py-4 max-w-7xl mx-auto">
          {partnersRow1.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex justify-center ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-green-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse-slow"></div>
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden p-6 sm:p-8 border-2 border-gray-100 group-hover:border-orange-200">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={192}
                      height={192}
                      className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ transform: `scale(${partner.scale})` }}
                    />
                  </div>
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping-slow"></div>
                  </div>
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
                  <div className="bg-gray-900 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {partner.name}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 py-4 max-w-5xl mx-auto">
          {partnersRow2.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex justify-center ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(partnersRow1.length + index) * 100}ms` }}
            >
              <div className="relative w-full">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-green-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse-slow"></div>
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden p-6 sm:p-8 border-2 border-gray-100 group-hover:border-orange-200">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={192}
                      height={192}
                      className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ transform: `scale(${partner.scale})` }}
                    />
                  </div>
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping-slow"></div>
                  </div>
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
                  <div className="bg-gray-900 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {partner.name}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-200 rounded-full border border-gray-300"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
