"use client"

import { Card } from "@/components/ui/card"
import { Award, Globe, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function OrganizersSection() {
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
    <section id="organizers" className="py-12 sm:py-16 bg-white overflow-hidden relative" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-slate-100 text-slate-600 rounded-full border border-slate-200">
            Summit Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Organised By
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className={`max-w-6xl mx-auto ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <Card className="relative overflow-hidden border-0 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-3xl bg-white group">
            {/* Animated accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[400px]">
              {/* Left Column: Logo and Info Buttons */}
              <div className="bg-gradient-to-br from-slate-50 to-white relative flex flex-col items-center justify-center p-8 sm:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/30 via-transparent to-transparent"></div>

                <div className="relative group-hover:scale-105 transition-transform duration-500 ease-out mb-8">
                  <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full"></div>
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center p-6 border border-slate-200/50">
                    <Image
                      src="/images/untitled-20design-20-289-29.png"
                      alt="MNNIT Allahabad"
                      width={180}
                      height={180}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="w-full max-w-sm space-y-4 relative z-10">
                  {/* Website Button */}
                  <a
                    href="https://www.mnnit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer group/btn"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover/btn:bg-green-500 transition-colors duration-300">
                      <Globe className="w-6 h-6 text-green-600 group-hover/btn:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 mb-1">Website</div>
                      <div className="text-sm text-slate-600 truncate">www.mnnit.ac.in</div>
                    </div>
                  </a>

                  {/* Location Button */}
                  <a
                    href="https://maps.app.goo.gl/qmkf99bS2jY3apRw9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer group/btn"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover/btn:bg-orange-500 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-orange-600 group-hover/btn:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 mb-1">Location</div>
                      <div className="text-sm text-slate-600">Prayagraj, Uttar Pradesh</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Descriptive Content */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-5 text-orange-600 font-bold uppercase tracking-wider text-xs">
                  <Award className="w-4 h-4" />
                  <span>Institute of National Importance</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-5 leading-tight">
                  Design Innovation Centre
                  <br />
                  Motilal Nehru National Institute of Technology Allahabad
                </h3>

                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Located in the historic city of{" "}
                  <span className="font-semibold text-slate-900">Prayagraj, Uttar Pradesh</span>, MNNIT Allahabad stands
                  as a premier technical institution committed to nurturing innovation, fostering research, and
                  developing world-class engineers to lead India's technological transformation.
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-green-700">Est. 1961</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs font-medium text-orange-700">NIT Category</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-white to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>
        </div>
      </div>
    </section>
  )
}
