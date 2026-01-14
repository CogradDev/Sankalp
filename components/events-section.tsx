"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Zap, Code, GraduationCap, Clock, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function EventsSection() {
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

  const events = [
    {
      icon: Zap,
      title: "Pre-Summit Events",
      description: "Regional roadshows, webinars, and networking sessions to build momentum across the nation",
      date: "January - February 2026",
      duration: "8 Weeks",
      features: [
        "Regional Innovation Showcases",
        "Industry Connect Sessions",
        "Student Engagement Programs",
        "Expert Webinar Series",
      ],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      icon: Code,
      title: "National Hackathon",
      description:
        "48-hour intense coding marathon focused on solving real-world problems using cutting-edge technology",
      date: "March 10-11, 2026",
      duration: "48 Hours",
      features: [
        "AI & ML Challenges",
        "Social Impact Projects",
        "Industry Problem Statements",
        "Cash Prizes Worth ₹10 Lakhs",
      ],
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
    },
    {
      icon: GraduationCap,
      title: "Workshops & Training",
      description: "Hands-on skill development sessions led by industry experts and research professionals",
      date: "Throughout Summit",
      duration: "Multiple Sessions",
      features: ["Startup Bootcamps", "Technical Skill Workshops", "Leadership Training", "Innovation Methodology"],
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
    },
  ]

  return (
    <section id="events" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 px-4">Events & Activities</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            A comprehensive series of events designed to inspire innovation, foster collaboration, and build skills for
            the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-orange-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-5 sm:p-6">
                <div
                  className={`w-14 h-14 ${event.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <event.icon className={event.iconColor} size={24} strokeWidth={2.5} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Calendar size={14} className="text-orange-600" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <Clock size={14} className="text-green-600" />
                    <span className="font-medium">{event.duration}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  {event.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-orange-500 to-green-600 mt-1.5"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "300ms" }}
        >
          <p className="text-gray-600 mb-4">
            Join us for an unforgettable experience of learning, innovation, and collaboration
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-orange-600 font-semibold">
            <Users size={16} />
            <span>Open to all students, researchers, entrepreneurs, and industry professionals</span>
          </div>
        </div>
      </div>
    </section>
  )
}
