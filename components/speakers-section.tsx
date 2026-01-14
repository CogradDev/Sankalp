"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SpeakersSection() {
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

  const speakerCategories = [
    { name: "Keynote Speakers", slots: 4 },
    { name: "Industry Leaders", slots: 4 },
    { name: "Academic Experts", slots: 4 },
  ]

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`max-w-4xl mx-auto text-center mb-8 sm:mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4">
            Distinguished Speakers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Eminent thought leaders and visionaries shaping India's future
          </p>
        </div>

        <Tabs defaultValue="Keynote Speakers" className="max-w-6xl mx-auto">
          <TabsList
            className={`grid w-full grid-cols-1 sm:grid-cols-3 mb-8 sm:mb-10 bg-gray-100 p-1.5 sm:p-2 rounded-2xl gap-1 sm:gap-0 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}
          >
            {speakerCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="text-sm sm:text-base font-bold py-2.5 sm:py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:via-white data-[state=active]:to-green-600 data-[state=active]:text-gray-900"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {speakerCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {Array.from({ length: category.slots }).map((_, index) => (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 hover:scale-105 ${
                      isVisible ? "animate-scale-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 blur-md"></div>

                    <div className="relative p-4 sm:p-6">
                      <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 flex items-center justify-center backdrop-blur-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <User className="text-gray-400 z-10" size={40} strokeWidth={1.5} className="sm:w-14 sm:h-14" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20">
                        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-bold text-[9px] sm:text-[10px] shadow-lg">
                          Announced Soon
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg blur-sm"></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 blur-sm"></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className={`text-center mt-10 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 px-5 py-2.5 rounded-xl border border-orange-200">
            <p className="text-gray-700 font-semibold text-sm">
              Exciting lineup of distinguished speakers to be announced soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
