"use client"

import { Trophy, Award, Medal, Target, Users, Zap } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const prizes = [
  {
    icon: Trophy,
    place: "1st Place",
    rank: "Winner",
    amount: "₹50,000",
    description: "Best Innovation",
    color: "from-yellow-500 via-yellow-400 to-amber-500",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-[0_0_30px_rgba(234,179,8,0.3)]",
  },
  {
    icon: Award,
    place: "2nd Place",
    rank: "Runner Up",
    amount: "₹30,000",
    description: "Outstanding Solution",
    color: "from-slate-400 via-gray-300 to-slate-400",
    iconColor: "text-slate-300",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-[0_0_30px_rgba(148,163,184,0.3)]",
  },
  {
    icon: Medal,
    place: "3rd Place",
    rank: "2nd Runner Up",
    amount: "₹20,000",
    description: "Exceptional Effort",
    color: "from-orange-600 via-orange-500 to-amber-600",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
  },
]

const perks = [
  {
    icon: Target,
    title: "Mentorship",
    description: "Expert guidance from industry leaders",
  },
  {
    icon: Users,
    title: "Incubation",
    description: "Startup acceleration opportunities",
  },
  {
    icon: Zap,
    title: "Recognition",
    description: "National-level certification",
  },
]

export function PrizesSection() {
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

  return (
    <section id="prizes" className="py-16 px-4 relative overflow-hidden bg-white" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className={`w-6 h-1 bg-orange-500 rounded-full transition-all duration-700 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />
            <div
              className={`w-2 h-1 bg-gray-300 rounded-full transition-all duration-700 delay-100 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />
            <div
              className={`w-6 h-1 bg-green-600 rounded-full transition-all duration-700 delay-200 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-3 tracking-tight text-gray-900">
            Total Prize Pool: <span className="text-orange-500">₹1,00,000</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compete for exciting cash prizes and exclusive opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
          {prizes.map((prize, index) => {
            const Icon = prize.icon
            const isWinner = index === 0
            const colorMap: Record<string, string> = {
              gold: "border-l-4 border-yellow-500",
              silver: "border-l-4 border-slate-400",
              bronze: "border-l-4 border-orange-500",
            }
            const bgMap: Record<string, string> = {
              gold: "bg-yellow-50",
              silver: "bg-slate-50",
              bronze: "bg-orange-50",
            }
            const iconBgMap: Record<string, string> = {
              gold: "bg-yellow-100",
              silver: "bg-slate-100",
              bronze: "bg-orange-100",
            }

            const prizeKey = isWinner ? "gold" : index === 1 ? "silver" : "bronze"

            return (
              <div
                key={index}
                className={`relative ${isVisible ? `slide-in-tricolor delay-${(index + 2) * 100}` : "opacity-0"} ${
                  isWinner ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"
                }`}
              >
                <div
                  className={`relative bg-white rounded-2xl p-6 ${isWinner ? "md:py-8" : "md:py-6"} ${
                    colorMap[prizeKey]
                  } border shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-3 transition-all duration-700 group overflow-visible`}
                  style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />

                  {isWinner && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-xs font-bold text-white z-20 whitespace-nowrap shadow-lg group-hover:scale-110 transition-transform duration-300">
                      🏆 WINNER
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-20 h-20 ${isWinner ? "md:w-24 md:h-24" : ""} ${iconBgMap[prizeKey]} rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-xl`}
                      >
                        <Icon
                          className={`w-10 h-10 ${isWinner ? "md:w-12 md:h-12" : ""} ${
                            isWinner ? "text-yellow-600" : index === 1 ? "text-slate-600" : "text-orange-600"
                          } group-hover:scale-110 transition-transform duration-500`}
                        />
                      </div>
                    </div>

                    <div className="text-center mb-2">
                      <h3
                        className={`${isWinner ? "text-2xl" : "text-xl"} font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300`}
                      >
                        {prize.place}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium">{prize.description}</p>
                    </div>

                    <div className="text-center my-4">
                      <p
                        className={`${isWinner ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"} font-black text-orange-600 group-hover:scale-110 transition-transform duration-500`}
                      >
                        {prize.amount}
                      </p>
                    </div>

                    <div className="h-px bg-gray-300 opacity-30 my-3" />

                    <div className="text-center">
                      <p className="text-xs text-gray-600">Cash Prize + Benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`mb-8 ${isVisible ? "fade-in-up delay-500" : "opacity-0"}`}>
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Additional Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {perks.map((perk, index) => {
              const Icon = perk.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{perk.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={`text-center ${isVisible ? "fade-in-up delay-600" : "opacity-0"}`}>
          <div className="bg-white rounded-2xl p-4 max-w-3xl mx-auto border border-gray-200">
            <p className="text-sm text-gray-700 leading-relaxed">
              Winners from any challenge track are eligible. Exceptional projects may receive{" "}
              <span className="text-orange-600 font-semibold">incubation support</span> and{" "}
              <span className="text-orange-600 font-semibold">mentorship opportunities</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
