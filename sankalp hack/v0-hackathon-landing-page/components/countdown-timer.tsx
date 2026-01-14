"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const targetDate = new Date("2026-01-30T23:59:59").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  if (!mounted) return null

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-2xl opacity-30" />

      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-3xl mx-auto border-t-4 border-t-primary shadow-lg">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-primary" />
          <p className="text-sm md:text-base font-semibold text-gray-600 tracking-wide uppercase">
            Registration Ends In
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Days", value: timeLeft.days, max: 365 },
            { label: "Hours", value: timeLeft.hours, max: 24 },
            { label: "Minutes", value: timeLeft.minutes, max: 60 },
            { label: "Seconds", value: timeLeft.seconds, max: 60 },
          ].map((item, index) => (
            <div key={item.label} className="relative group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 md:p-4 border border-gray-200 group-hover:border-primary/30 transition-all duration-300 hover:shadow-md transform group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-1 tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>

                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">{item.label}</div>

                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 rounded-full"
                    style={{
                      width: `${(item.value / item.max) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
