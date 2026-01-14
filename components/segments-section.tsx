"use client"

import { Card } from "@/components/ui/card"
import { Mic, MessageSquare, Users2, Lightbulb, Palette } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SegmentsSection() {
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

  const segments = [
    {
      icon: Mic,
      title: "Sankalp Talk",
      description: "Powerful talks by eminent personalities sharing leadership lessons and visionary perspectives",
      details:
        "Inspiring keynotes from industry leaders, academics, and changemakers who have shaped India's innovation landscape.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: MessageSquare,
      title: "Sankalp Nayi Soch",
      description: "Live interviews featuring innovators who inspire students to think boldly and build solutions",
      details: "Candid conversations with entrepreneurs and visionaries exploring their journey from ideas to impact.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Users2,
      title: "Sankalp Samvaad",
      description: "Panel discussions with national leaders exploring India's future in skills and technology",
      details:
        "Expert panels discussing policy, innovation ecosystems, and opportunities for India's youth in emerging sectors.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Lightbulb,
      title: "Sankalp Navachar",
      description: "Startup showcase featuring groundbreaking ideas and technologies by emerging entrepreneurs",
      details:
        "Live pitches and demos from student-led startups solving real-world problems with innovative technology.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Palette,
      title: "Sankalp Srijan",
      description: "Creative showcases highlighting artistic innovations and cultural expressions",
      details:
        "Exhibitions of design thinking, digital art, cultural performances, and creative technology applications.",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ]

  return (
    <section
      id="segments"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2 sm:mb-3">
            SANKALP 2026 Segments
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Engaging formats designed to inspire, educate, and foster innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {segments.map((segment, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-white border ${segment.borderColor} hover:border-orange-500 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 sm:p-5 min-h-[200px] sm:min-h-[220px] flex flex-col">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${segment.bgColor} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${segment.iconColor}`}
                >
                  <segment.icon size={20} strokeWidth={2.5} className="sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {segment.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm mb-2 line-clamp-3 group-hover:hidden transition-all duration-300">
                  {segment.description}
                </p>

                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm font-medium hidden group-hover:block transition-all duration-300">
                  {segment.details}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
