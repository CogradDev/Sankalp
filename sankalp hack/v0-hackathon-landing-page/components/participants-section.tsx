"use client"

import { GraduationCap, Rocket, Code2, Users, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const participants = [
  {
    icon: GraduationCap,
    title: "College Students",
    description: "Undergraduate and postgraduate innovators",
    color: "orange",
  },
  {
    icon: Rocket,
    title: "Startup Teams",
    description: "Early-stage ventures in EdTech and AI",
    color: "blue",
  },
  {
    icon: Code2,
    title: "Individual Developers",
    description: "Solo hackers with passion for impact",
    color: "orange",
  },
  {
    icon: Users,
    title: "Multidisciplinary Teams",
    description: "Diverse expertise coming together",
    color: "blue",
  },
]

const requirements = [
  "Team size: 2–4 members recommended",
  "Open to all undergraduate & postgraduate students",
  "Individual registrations welcome",
  "Prior hackathon experience not required",
]

export function ParticipantsSection() {
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
    <section ref={sectionRef} className="relative py-16 px-4 overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-1 bg-orange-500 rounded-full" />
            <div className="w-2 h-1 bg-gray-300 rounded-full" />
            <div className="w-6 h-1 bg-green-600 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-balance text-gray-900">
            Who Can <span className="text-orange-500">Participate</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Open to innovators from all backgrounds and skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {participants.map((participant, index) => {
            const Icon = participant.icon
            const colorMap: Record<string, { border: string; bg: string; icon: string }> = {
              orange: { border: "border-orange-500/30", bg: "bg-orange-50", icon: "text-orange-600" },
              blue: { border: "border-blue-500/30", bg: "bg-blue-50", icon: "text-blue-600" },
            }
            const colors = colorMap[participant.color] || colorMap.orange

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-5 text-center transition-all duration-500 hover:scale-105 border ${colors.border} hover:shadow-lg shadow-md ${
                  isVisible ? "fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`h-1 w-6 h-1 mx-auto mb-3 bg-${participant.color === "orange" ? "orange" : "blue"}-500 rounded-full`}
                />

                <div className="flex justify-center mb-3">
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center transition-all duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${colors.icon} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>
                </div>

                <h3 className="text-base font-bold mb-1.5 text-gray-900">{participant.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{participant.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto border border-orange-500/20 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-gray-900">Key Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
