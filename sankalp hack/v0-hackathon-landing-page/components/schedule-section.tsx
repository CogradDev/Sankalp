"use client"

import { Calendar, Clock, Code, Send, Trophy, Zap } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const timeline = [
  {
    icon: Calendar,
    title: "Registration",
    time: "Jan 15 – 31",
    description: "Team registration open",
    expandedDetails: "Teams of 1-4 members can register. All members must be added at registration.",
  },
  {
    icon: Zap,
    title: "Bootcamps",
    time: "Feb 2-3",
    description: "Orientation & Technical Deep Dive",
    expandedDetails: "Feb 2: Orientation, Feb 3: Technical workshops on AI/ML and problem-solving frameworks.",
  },
  {
    icon: Clock,
    title: "Round 1",
    time: "Feb 12-14",
    description: "Idea Validation",
    expandedDetails: "Present your idea and get feedback from mentors. Category lock-in happens here.",
  },
  {
    icon: Code,
    title: "Round 2",
    time: "Feb 26-28",
    description: "Prototype Sprint",
    expandedDetails: "Build and test your prototype. Mentor evaluation affects finale eligibility.",
  },
  {
    icon: Send,
    title: "Round 3",
    time: "Mar 10-12",
    description: "Final Selection",
    expandedDetails: "Submit final prototype and documentation. Top teams selected for Grand Finale.",
  },
  {
    icon: Trophy,
    title: "Grand Finale",
    time: "Mar 24-26",
    description: "@ MNNIT Allahabad",
    expandedDetails: "Live demo, technical defense, and final judging at SANKALP 2026.",
  },
]

export function ScheduleSection() {
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
    <section id="schedule" className="py-16 px-4 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className={`w-8 h-1 bg-orange-500 transition-all duration-700 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />
            <div
              className={`w-6 h-1 bg-gray-300 transition-all duration-700 delay-100 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />
            <div
              className={`w-8 h-1 bg-green-600 transition-all duration-700 delay-200 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />
          </div>
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            Timeline & <span className="text-orange-500">Rounds</span>
          </h2>
          <p className="text-gray-600 text-lg">Your journey from registration to grand finale</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {timeline.map((item, index) => {
            const Icon = item.icon
            const colors = [
              { top: "bg-orange-500", icon: "bg-orange-100", text: "text-orange-700" },
              { top: "bg-blue-600", icon: "bg-blue-100", text: "text-blue-700" },
              { top: "bg-purple-600", icon: "bg-purple-100", text: "text-purple-700" },
              { top: "bg-green-600", icon: "bg-green-100", text: "text-green-700" },
              { top: "bg-pink-600", icon: "bg-pink-100", text: "text-pink-700" },
              { top: "bg-orange-500", icon: "bg-orange-100", text: "text-orange-700" },
            ]
            const color = colors[index]

            return (
              <div
                key={index}
                className={`h-full flex flex-col ${isVisible ? "slide-in-tricolor" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-1 w-full ${color.top} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-tricolor-shimmer" />
                </div>

                <div className="bg-white rounded-b-lg shadow-md p-6 flex-1 flex flex-col border border-gray-100 hover:shadow-xl hover:border-orange-300 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-white to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                  <div
                    className={`w-14 h-14 ${color.icon} rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-md`}
                  >
                    <Icon className={`w-7 h-7 ${color.text} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className={`${color.text} font-semibold text-sm mb-2`}>{item.time}</p>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">{item.description}</p>

                  <div
                    className={`h-1 w-8 ${color.top} rounded-full mt-auto group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className={`text-center ${isVisible ? "fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-4 max-w-3xl mx-auto">
            <p className="text-sm text-gray-800 font-medium">
              <span className="font-bold text-orange-600">Important:</span> Category and team details cannot be changed
              after registration deadline (Jan 31).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
