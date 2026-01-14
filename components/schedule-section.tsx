"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ScheduleSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeDay, setActiveDay] = useState(0)
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

  const schedule = [
    {
      day: "Day 1",
      theme: "Knowledge",
      date: "March 17, 2026",
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
      date: "March 18, 2026",
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
      date: "March 19, 2026",
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
    <section id="agenda" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center mb-8 sm:mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">Complete Agenda</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">
            A meticulously planned three-day journey through knowledge, skill, and leadership
          </p>
        </div>

        <div
          className={`flex justify-start sm:justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 overflow-x-auto pb-2 px-4 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
        >
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-shrink-0 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 ${
                activeDay === index
                  ? `${day.tabColor} shadow-xl scale-105 sm:scale-110`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              <div className="text-sm sm:text-base md:text-lg whitespace-nowrap">{day.day}</div>
              <div className="text-[10px] sm:text-xs opacity-90">{day.theme}</div>
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <Card
            className={`p-4 sm:p-6 md:p-8 bg-white border-2 border-gray-100 shadow-2xl ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            <div
              className={`bg-gradient-to-r ${schedule[activeDay].color} p-4 sm:p-6 rounded-xl sm:rounded-2xl text-white mb-4 sm:mb-6`}
            >
              <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-2">{schedule[activeDay].day}</h3>
                  <p className="text-base sm:text-lg md:text-xl font-bold opacity-90">{schedule[activeDay].theme}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="sm:w-6 sm:h-6" />
                  <span className="font-bold text-xs sm:text-sm md:text-base">{schedule[activeDay].date}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
              {schedule[activeDay].events.map((event, idx) => (
                <div
                  key={idx}
                  className="flex gap-2 sm:gap-4 p-3 sm:p-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-lg sm:rounded-xl transition-all duration-300 group border border-gray-100 hover:border-orange-200 hover:shadow-md"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Clock
                      size={16}
                      className="text-orange-600 group-hover:scale-110 sm:group-hover:scale-125 transition-transform sm:w-5 sm:h-5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-gray-600 mb-1 truncate sm:whitespace-normal">
                      {event.time}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">
                      {event.title}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-gray-400 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                      <p className="text-[10px] sm:text-xs text-gray-500 truncate">{event.venue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
