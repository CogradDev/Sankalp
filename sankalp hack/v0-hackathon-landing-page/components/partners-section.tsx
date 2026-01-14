"use client"

import Image from "next/image"
import { Building2, Network } from "lucide-react"

export function PartnersSection() {
  // Row 1: Ministry of Education, IIT BHU, BHU Varanasi, IIIT Allahabad, University of Allahabad
  // Row 2: CSIR, Vijnana Bharti, Cograd, Medha AI

  const partnersRow1 = [
    {
      name: "Ministry of Education",
      logo: "/images/launch-20event-20of.png",
    },
    {
      name: "IIT BHU",
      logo: "/images/launch-20event-20of-20-288-29.png",
    },
    {
      name: "BHU Varanasi",
      logo: "/images/launch-20event-20of-20-287-29.jpeg",
    },
    {
      name: "IIIT Allahabad",
      logo: "/images/launch-20event-20of-20-286-29.png",
    },
    {
      name: "University of Allahabad",
      logo: "/images/launch-20event-20of-20-285-29.jpeg",
    },
  ]

  const partnersRow2 = [
    {
      name: "CSIR",
      logo: "/images/launch-20event-20of-20-284-29.png",
    },
    {
      name: "Vijnana Bharti",
      logo: "/images/launch-20event-20of-20-283-29.png",
    },
    {
      name: "Cograd",
      logo: "/images/launch-20event-20of-20-282-29.png",
    },
    {
      name: "Medha AI",
      logo: "/images/launch-20event-20of-20-281-29.png",
    },
  ]

  const innovationHubs = [
    {
      name: "IIT BHU",
      location: "Varanasi",
      logo: "/images/launch-20event-20of-20-288-29.png",
    },
    {
      name: "BHU",
      location: "Varanasi",
      logo: "/images/launch-20event-20of-20-287-29.jpeg",
    },
  ]

  const partnerInstitutions = [
    {
      name: "MNNIT Allahabad",
      logo: "/images/untitled-20design-20-283-29.png",
    },
    {
      name: "IIIT Allahabad",
      logo: "/images/launch-20event-20of-20-286-29.png",
    },
    {
      name: "University of Allahabad",
      logo: "/images/launch-20event-20of-20-285-29.jpeg",
    },
  ]

  return (
    <div className="py-20 bg-gray-50">
      {/* Our Partners & Sponsors Section */}
      <section className="container mx-auto px-4 mb-32">
        <div className="flex justify-center mb-6">
          <div className="flex gap-2">
            <div className="w-16 h-1 bg-[#FF9933] rounded-full" />
            <div className="w-16 h-1 bg-white rounded-full border border-gray-200" />
            <div className="w-16 h-1 bg-[#138808] rounded-full" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Our Partners <span className="text-slate-900">&</span> Sponsors
        </h1>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Building India's future through strategic partnerships and innovation
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
          {partnersRow1.map((partner, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative bg-white rounded-full w-32 h-32 md:w-40 md:h-40 shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF9933]/0 via-white/0 to-[#138808]/0 group-hover:from-[#FF9933]/10 group-hover:to-[#138808]/10 transition-all duration-500" />
                <div className="absolute inset-2 bg-white rounded-full z-[5]" />
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={90}
                  height={90}
                  className="relative z-10 object-contain rounded-full"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-gray-700 max-w-[140px] mx-auto">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {partnersRow2.map((partner, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${(index + 5) * 0.1}s both`,
              }}
            >
              <div className="relative bg-white rounded-full w-32 h-32 md:w-40 md:h-40 shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF9933]/0 via-white/0 to-[#138808]/0 group-hover:from-[#FF9933]/10 group-hover:to-[#138808]/10 transition-all duration-500" />
                <div className="absolute inset-2 bg-white rounded-full z-[5]" />
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={90}
                  height={90}
                  className="relative z-10 object-contain rounded-full"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-gray-700 max-w-[140px] mx-auto">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hub & Spoke Network Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="flex gap-2">
            <div className="w-16 h-1 bg-[#FF9933] rounded-full" />
            <div className="w-16 h-1 bg-white rounded-full border border-gray-200" />
            <div className="w-16 h-1 bg-[#138808] rounded-full" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-950">Hub & Spoke Network</h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          A collaborative ecosystem connecting premier institutions to drive innovation and research excellence
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {/* Innovation Hubs */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start mb-8">
              <span className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Building2 size={20} />
                Innovation Hubs
              </span>
            </div>

            {innovationHubs.map((hub, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-foreground ${
                  index === 1 ? "border-2 border-[#FF9933]" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-md overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <Image
                        src={hub.logo || "/placeholder.svg"}
                        alt={hub.name}
                        width={60}
                        height={60}
                        className="object-contain bg-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1 text-slate-900">{hub.name}</h3>
                    <p className="text-gray-600">{hub.location}</p>
                  </div>
                  <span className="bg-[#FF5722] text-white px-4 py-1 rounded-full text-sm font-semibold">Hub</span>
                </div>
              </div>
            ))}
          </div>

          {/* Collaborative Network Center */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/20 to-[#138808]/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-orange-50 to-green-50 rounded-full p-12 shadow-xl">
                <Network size={80} className="text-[#FF9933]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-[#FF9933] rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    />
                    <div
                      className="w-2 h-2 bg-[#138808] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 bg-[#FF9933] rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 bg-[#FF5722] text-white px-6 py-2 rounded-full font-semibold shadow-lg">
              Collaborative Network
            </span>
          </div>

          {/* Partner Institutions */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-end mb-8">
              <span className="inline-flex items-center gap-2 bg-[#0F9D58] text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                <Building2 size={20} />
                Partner Institutions
              </span>
            </div>

            {partnerInstitutions.map((institution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-md overflow-hidden">
                    <div className="bg-white rounded-xl">
                      <Image
                        src={institution.logo || "/placeholder.svg"}
                        alt={institution.name}
                        width={60}
                        height={60}
                        className="object-contain bg-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1 text-slate-900">{institution.name}</h3>
                  </div>
                  <span className="bg-[#0F9D58] text-white px-4 py-1 rounded-full text-sm font-semibold">Spoke</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
