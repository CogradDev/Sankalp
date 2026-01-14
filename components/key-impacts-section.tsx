"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Lightbulb, Target, Rocket, Award, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function KeyImpactsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ visitors: 0, speakers: 0, innovations: 0, institutions: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const duration = 2000
          const steps = 60
          const interval = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            setCounts({
              visitors: Math.floor((10000 * step) / steps),
              speakers: Math.floor((50 * step) / steps),
              innovations: Math.floor((100 * step) / steps),
              institutions: Math.floor((30 * step) / steps),
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const impacts = [
    {
      icon: Target,
      title: "Future-Ready Workforce",
      description: "Empowering youth with cutting-edge skills for tomorrow's challenges",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Rocket,
      title: "Innovation Catalyst",
      description: "Accelerating startup ecosystem and breakthrough research initiatives",
      gradient: "from-orange-500 to-amber-500",
      lightGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: Award,
      title: "Excellence in Education",
      description: "Strengthening academia-industry partnerships for world-class learning",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Zap,
      title: "National Transformation",
      description: "Driving India's Aatmanirbhar Bharat mission towards global leadership",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-50 to-emerald-50",
    },
  ]

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative"
      ref={sectionRef}
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">Key Impacts</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4">
            Driving transformative change across India's innovation landscape
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
        >
          <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Globe className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              </div>
              <p className="text-3xl sm:text-4xl font-black mb-1.5 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-br from-green-600 to-emerald-600">
                {counts.visitors.toLocaleString()}+
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">Visitors</p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Users className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              </div>
              <p className="text-3xl sm:text-4xl font-black mb-1.5 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-amber-600">
                {counts.speakers}+
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">Speakers</p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Lightbulb className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              </div>
              <p className="text-3xl sm:text-4xl font-black mb-1.5 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-600">
                {counts.innovations}+
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">Innovations</p>
            </div>
          </Card>

          <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <TrendingUp className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              </div>
              <p className="text-3xl sm:text-4xl font-black mb-1.5 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-cyan-600">
                {counts.institutions}+
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">Institutions</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
              ></div>

              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${impact.gradient}`}></div>

              <div className="relative p-6 sm:p-8 h-full flex flex-col">
                <div
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${impact.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-md`}
                >
                  <impact.icon className="text-white w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight group-hover:text-slate-700 transition-colors duration-500">
                  {impact.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {impact.description}
                </p>

                <div className="mt-auto">
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${impact.gradient} rounded-full group-hover:w-full transition-all duration-700`}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
