"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"

export default function ProgramSchedulePage() {
  const [activeDay, setActiveDay] = useState(0)

  const schedule = [
    {
      day: "Day 1",
      theme: "Knowledge",
      date: "March 24, 2026",
      color: "from-blue-600 to-indigo-700",
      tabColor: "bg-blue-600",
      events: [
        { time: "10:00 AM - 11:00 AM", title: "Inauguration Ceremony", venue: "Main Auditorium" },
        { time: "11:00 AM - 11:30 AM", title: "Sankalp Talk", venue: "Hall A" },
        { time: "11:30 AM - 12:00 PM", title: "Sankalp Nayi Soch", venue: "Hall B" },
        { time: "12:00 PM - 12:30 PM", title: "Sankalp Talk", venue: "Hall A" },
        { time: "12:30 PM - 01:00 PM", title: "Sankalp Samvaad", venue: "Main Auditorium" },
        { time: "01:30 PM - 02:30 PM", title: "Lunch Break", venue: "Dining Hall" },
        { time: "02:30 PM - 03:00 PM", title: "Sankalp Nayi Soch", venue: "Hall B" },
        { time: "03:00 PM - 03:30 PM", title: "Sankalp Talks", venue: "Hall A" },
        { time: "03:30 PM - 04:30 PM", title: "Sankalp Samvaad", venue: "Main Auditorium" },
        { time: "04:30 PM Onwards", title: "Sankalp Navachar Pavilion", venue: "Exhibition Area" },
        { time: "07:00 PM Onwards", title: "Sankalp Srijan (Starlight Event)", venue: "Open Ground" },
      ],
    },
    {
      day: "Day 2",
      theme: "Skill",
      date: "March 25, 2026",
      color: "from-orange-600 to-red-600",
      tabColor: "bg-orange-600",
      events: [
        { time: "10:00 AM - 11:30 AM", title: "Workshop: AI for All", venue: "Computer Labs" },
        { time: "11:30 AM - 12:00 PM", title: "Sankalp Nayi Soch", venue: "Hall B" },
        { time: "12:00 PM - 12:30 PM", title: "Sankalp Talk", venue: "Hall A" },
        { time: "12:30 PM - 01:00 PM", title: "Sankalp Samvaad", venue: "Main Auditorium" },
        { time: "01:30 PM - 02:30 PM", title: "Lunch Break", venue: "Dining Hall" },
        { time: "02:30 PM - 03:00 PM", title: "Sankalp Nayi Soch", venue: "Hall B" },
        { time: "03:00 PM - 03:30 PM", title: "Sankalp Talks", venue: "Hall A" },
        { time: "03:30 PM - 04:30 PM", title: "Sankalp Samvaad", venue: "Main Auditorium" },
        { time: "04:30 PM Onwards", title: "Sankalp Navachar Pavilion", venue: "Exhibition Area" },
        { time: "07:00 PM Onwards", title: "Sankalp Srijan (Starlight Event)", venue: "Open Ground" },
      ],
    },
    {
      day: "Day 3",
      theme: "Leadership",
      date: "March 26, 2026",
      color: "from-green-600 to-emerald-700",
      tabColor: "bg-green-600",
      events: [
        { time: "10:00 AM - 11:30 AM", title: "Workshop: AI for All", venue: "Computer Labs" },
        { time: "11:30 AM - 12:00 PM", title: "Sankalp Nayi Soch", venue: "Hall B" },
        { time: "12:00 PM - 12:30 PM", title: "Sankalp Talk", venue: "Hall A" },
        { time: "12:30 PM - 01:00 PM", title: "Sankalp Samvaad", venue: "Main Auditorium" },
        { time: "01:30 PM - 02:30 PM", title: "Lunch Break", venue: "Dining Hall" },
        { time: "02:30 PM - 03:00 PM", title: "Sankalp Nayi Soch", venue: "Hall B" },
        { time: "03:00 PM - 03:30 PM", title: "Sankalp Talks", venue: "Hall A" },
        { time: "03:30 PM - 04:30 PM", title: "Sankalp Samvaad", venue: "Main Auditorium" },
        { time: "04:30 PM Onwards", title: "Valedictory Session", venue: "Main Auditorium" },
        { time: "07:00 PM Onwards", title: "Sankalp Srijan (Starlight Event)", venue: "Open Ground" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <ScrollToTop />

      <div className="pt-24">
        {/* Tricolor Accent Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">Program Schedule</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-16 h-1 bg-white rounded-full"></div>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Program Schedule (Tentative) </h1>
              <p className="text-base md:text-lg text-gray-300">
                A meticulously planned three-day journey through knowledge, skill, and leadership development
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-8 flex-wrap">
              {schedule.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-md ${
                    activeDay === index ? `${day.tabColor} scale-105 shadow-lg` : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  <div className="text-sm md:text-base whitespace-nowrap">{day.day}</div>
                  <div className="text-xs opacity-90">{day.theme}</div>
                </button>
              ))}
            </div>

            <Card className="p-4 md:p-6 bg-white border border-gray-200 shadow-lg">
              <div
                className={`bg-gradient-to-r ${schedule[activeDay].color} p-4 md:p-5 rounded-lg md:rounded-xl text-white mb-5 md:mb-6`}
              >
                <div className="flex items-center justify-between flex-wrap gap-2 md:gap-3">
                  <div>
                    <h2 className="text-lg md:text-xl font-black mb-1">{schedule[activeDay].day}</h2>
                    <p className="text-sm md:text-base font-bold opacity-90">{schedule[activeDay].theme}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="md:w-5 md:h-5" />
                    <span className="font-bold text-xs md:text-sm">{schedule[activeDay].date}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                {schedule[activeDay].events.map((event, idx) => (
                  <div
                    key={idx}
                    className="relative pl-5 border-l-2 border-orange-200 hover:border-orange-500 transition-all duration-300 group"
                  >
                    <div className="absolute left-[-5px] top-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white shadow group-hover:scale-125 transition-transform"></div>

                    <div className="bg-gradient-to-r from-orange-50/60 to-white p-2.5 md:p-3 rounded-lg border border-gray-100 group-hover:border-orange-300 group-hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <Clock size={14} className="md:w-4 md:h-4 text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs md:text-sm font-bold text-gray-600 mb-0.5">{event.time}</p>
                          <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="md:w-3.5 md:h-3.5 text-gray-400 flex-shrink-0" />
                            <p className="text-xs text-gray-600">{event.venue}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
