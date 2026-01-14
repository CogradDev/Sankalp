"use client"

import { Card } from "@/components/ui/card"
import { Building2, School, GitBranch, Workflow } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HubSpokeNetworkSection() {
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

  const hubs = [
    {
      name: "IIT BHU",
      location: "Varanasi",
      type: "Hub",
      icon: Building2,
      logo: "/images/untitled-20design.png",
    },
    {
      name: "BHU",
      location: "Varanasi",
      type: "Hub",
      icon: Building2,
      logo: "/bhu-logo.png",
    },
  ]

  const spokes = [
    {
      name: "MNNIT Allahabad",
      type: "Spoke",
      icon: School,
      logo: "/images/untitled-20design-20-283-29.png",
    },
    {
      name: "IIIT Allahabad",
      type: "Spoke",
      icon: School,
      logo: "/images/untitled-20design-20-284-29.png",
    },
    {
      name: "University of Allahabad",
      type: "Spoke",
      icon: School,
      logo: "/images/untitled-20design-20-282-29.png",
    },
  ]

  return (
    <section
      className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex justify-center gap-2 mb-3">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">Hub & Spoke Network</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A collaborative ecosystem connecting premier institutions to drive innovation and research excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Hubs Section */}
            <div className="space-y-4">
              <div className="text-center lg:text-right mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg text-xs md:text-sm">
                  <Building2 size={16} />
                  <span className="font-bold">Innovation Hubs</span>
                </div>
              </div>

              {hubs.map((hub, index) => (
                <Card
                  key={hub.name}
                  className={`group relative overflow-hidden hover:shadow-lg transition-all duration-500 border-2 border-orange-100 hover:border-orange-400 hover:scale-105 bg-white ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="p-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
                        <div className="relative w-full h-full rounded-xl bg-white p-2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-orange-100 group-hover:border-orange-300 overflow-hidden">
                          <Image
                            src={hub.logo || "/placeholder.svg"}
                            alt={`${hub.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-black text-gray-900 mb-0.5">{hub.name}</h4>
                        <p className="text-gray-600 font-semibold text-xs mb-1.5">{hub.location}</p>
                        <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold rounded-full shadow-md">
                          {hub.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                </Card>
              ))}
            </div>

            {/* Center Network Diagram - Reduced size significantly */}
            <div className="flex justify-center items-center py-4">
              <div className="relative">
                {/* Animated background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 border-3 border-orange-200 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 border-3 border-green-200 rounded-full animate-ping opacity-20"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Main network icon container */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-400 to-green-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

                  <div className="relative w-28 h-28 rounded-full bg-white shadow-xl border-3 border-white flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-full animate-spin-slow"></div>

                    {/* Network icon with multiple layers */}
                    <div className="relative z-10 flex flex-col items-center gap-1">
                      <Workflow className="w-10 h-10 text-orange-600 drop-shadow-lg" strokeWidth={2} />
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Connection lines visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GitBranch className="w-16 h-16 text-slate-300 opacity-50" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-600 via-amber-600 to-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                    Collaborative Network
                  </span>
                </div>
              </div>
            </div>

            {/* Spokes Section */}
            <div className="space-y-4">
              <div className="text-center lg:text-left mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg text-xs md:text-sm">
                  <School size={16} />
                  <span className="font-bold">Partner Institutions</span>
                </div>
              </div>

              {spokes.map((spoke, index) => (
                <Card
                  key={spoke.name}
                  className={`group relative overflow-hidden hover:shadow-lg transition-all duration-500 border-2 border-green-100 hover:border-green-400 hover:scale-105 bg-white ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="p-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
                        <div className="relative w-full h-full rounded-xl bg-white p-2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-green-100 group-hover:border-green-300 overflow-hidden">
                          <Image
                            src={spoke.logo || "/placeholder.svg"}
                            alt={`${spoke.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-black text-gray-900 mb-1.5">{spoke.name}</h4>
                        <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                          {spoke.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
