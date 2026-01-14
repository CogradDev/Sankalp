"use client"

import { Card } from "@/components/ui/card"
import { Target, Users, Lightbulb, Network, Building } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VisionSection() {
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

  const objectives = [
    {
      icon: Target,
      title: "Ecosystem Development",
      description: "A future-ready skills & innovation ecosystem",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Training, mentorship & global exposure",
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      icon: Lightbulb,
      title: "Indigenous Innovation",
      description: "Encouraging innovation rooted in India's strengths",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      icon: Network,
      title: "Strategic Collaboration",
      description: "Stronger academia-industry-government partnerships",
      gradient: "from-purple-600 to-violet-700",
    },
    {
      icon: Building,
      title: "Policy & Frameworks",
      description: "Building models for a self-reliant India",
      gradient: "from-pink-600 to-rose-700",
    },
  ]

  return (
    <section id="vision" className="py-12 sm:py-14 md:py-16 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-8 sm:mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-3">
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-12 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
            Vision 2047
          </h2>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 border-2 border-slate-700 shadow-2xl">
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed">
                To position India as a global leader in skills, innovation, and entrepreneurship by 2047 — empowering
                its youth, industries, and institutions to achieve technological sovereignty, sustainable development,
                and Aatmanirbhar prosperity
              </p>
            </div>
          </div>
        </div>

        <div className={`mb-6 sm:mb-8 text-center ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">Key Objectives</h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Five strategic pillars driving India towards self-reliance and global leadership
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {objectives.map((objective, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:scale-105 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${objective.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-1 transition-opacity">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                ></div>
              </div>

              <div className="relative p-3.5 sm:p-4">
                <div className="mb-2 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <objective.icon
                    size={24}
                    strokeWidth={2}
                    className="text-gray-700 group-hover:text-white transition-colors sm:w-7 sm:h-7"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-black text-gray-900 group-hover:text-white mb-1 sm:mb-1.5 transition-colors leading-tight">
                  {objective.title}
                </h3>
                <p className="text-xs text-gray-600 group-hover:text-white/90 leading-snug transition-colors">
                  {objective.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
