"use client"

import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Users, Rocket, TrendingUp, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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

  const features = [
    {
      icon: Target,
      title: "Vision@2047",
      description: "Positioning India as a global leader in skills, innovation, and entrepreneurship",
      color: "from-blue-900 to-indigo-900",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-900",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Building a future-ready innovation and entrepreneurship ecosystem for national growth",
      color: "from-orange-600 to-red-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Training, mentorship, and global exposure for India's youth to become future leaders",
      color: "from-green-700 to-emerald-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      icon: Rocket,
      title: "Strategic Growth",
      description: "Stronger academia-industry-government partnerships for Aatmanirbhar Bharat",
      color: "from-purple-700 to-violet-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
    },
    {
      icon: TrendingUp,
      title: "Future Skills",
      description: "Equipping workforce with cutting-edge AI, tech, and entrepreneurial capabilities",
      color: "from-cyan-700 to-blue-700",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-700",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Setting new benchmarks in academic-industry collaboration and innovation",
      color: "from-amber-600 to-orange-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center mb-10 sm:mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-5 px-4">
            About SANKALP 2026
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-4">
            SANKALP 2026 unites visionaries from academia, government, industry, and research to design actionable
            frameworks that empower India's youth to innovate and lead towards an Aatmanirbhar Bharat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-2 sm:px-0">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-4 sm:p-6 bg-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:scale-105 group relative overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-t-orange-500 group-hover:border-l-white group-hover:border-r-green-600 group-hover:border-b-orange-500 rounded-lg transition-all duration-500 pointer-events-none"></div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <div className="relative">
                <div
                  className={`mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 ${feature.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={feature.iconColor} size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
