"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PartnersPage() {
  // Hub & Spoke Network data
  const hubSpokeData = {
    center: {
      name: "Ministry of Education",
      logo: "/ministry-of-education-logo.jpg",
    },
    nodes: [
      { name: "IIT BHU", type: "Hub", position: "top-left", logo: "/iit-bhu-logo.jpg" },
      { name: "BHU Varanasi", type: "Hub", position: "top-right", logo: "/bhu-varanasi-logo.jpg" },
      { name: "IIIT Allahabad", type: "Spoke", position: "bottom-left", logo: "/iiit-allahabad-logo.jpg" },
      { name: "MNNIT Allahabad", type: "Spoke", position: "bottom-center", logo: "/mnnit-logo.jpg" },
      {
        name: "University of Allahabad",
        type: "Spoke",
        position: "bottom-right",
        logo: "/university-of-allahabad-logo.jpg",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/20 to-green-50/20">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-16 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-gradient-to-r from-green-600 to-green-700" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-white font-semibold">Partners & Sponsors</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Our Partners & Sponsors
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Collaborating with leading organizations to drive innovation and excellence
            </p>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />
      </section>

      {/* Partners Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12">
              {/* Tricolor accent line */}
              <div className="flex justify-center gap-1 mb-6">
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <div className="w-1 h-1.5 bg-white border border-gray-300 rounded-full"></div>
                <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight text-balance">
                Our Partners and Sponsors
              </h2>

              {/* Subtitle Description */}
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto font-medium">
                Building India's future through strategic partnerships and innovation
              </p>

              {/* Secondary Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                SANKALP 2026 is strengthened by partnerships with leading national and international organizations
                committed to fostering innovation and entrepreneurship in India.
              </p>
            </div>

            {/* Partners Grid Section */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 mb-12 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Strategic Partners</h3>
              <p className="text-center text-gray-600 mb-8">Nine pillars supporting innovation and excellence</p>

              <div className="space-y-6">
                {/* Row 1: 5 logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                  {[
                    {
                      name: "Ministry of Education",
                      label: "MoE",
                      desc: "Government of India",
                      logo: "/ministry-of-education-logo.jpg",
                    },
                    {
                      name: "IIT BHU Varanasi",
                      label: "Hub",
                      desc: "Indian Institute of Technology",
                      logo: "/iit-bhu-university-logo-blue.jpg",
                    },
                    {
                      name: "BHU Varanasi",
                      label: "Hub",
                      desc: "Banaras Hindu University",
                      logo: "/bhu-logo.png",
                    },
                    {
                      name: "IIIT Allahabad",
                      label: "Spoke",
                      desc: "Indian Institute of Information Technology",
                      logo: "/iiit-allahabad-logo-blue.jpg",
                    },
                    {
                      name: "University of Allahabad",
                      label: "Spoke",
                      desc: "University of Allahabad",
                      logo: "/university-of-allahabad-logo-red.jpg",
                    },
                  ].map((partner, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 group-hover:border-orange-400 transition-colors duration-300 shadow-md p-4">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={120}
                          height={120}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{partner.name}</h4>
                      {partner.label && <p className="text-xs font-medium text-orange-600 mb-1">({partner.label})</p>}
                      <p className="text-xs md:text-sm text-gray-600">{partner.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Row 2: 4 logos */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      name: "CSIR",
                      label: "",
                      desc: "The Innovation Engine of India",
                      logo: "/csir-logo.png",
                    },
                    {
                      name: "Vijnana Bharati",
                      label: "",
                      desc: "Knowledge Partner",
                      logo: "/vijnana-bharati-logo.png",
                    },
                    {
                      name: "Co-grad",
                      label: "",
                      desc: "Building next-generation professionals",
                      logo: "/cograd-logo.png",
                    },
                    {
                      name: "MedhaAI",
                      label: "",
                      desc: "Advancing AI and emerging technologies",
                      logo: "/medha-ai-logo.png",
                    },
                  ].map((partner, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 group-hover:border-orange-400 transition-colors duration-300 shadow-md p-4">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={120}
                          height={120}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{partner.name}</h4>
                      {partner.label && <p className="text-xs font-medium text-orange-600 mb-1">({partner.label})</p>}
                      <p className="text-xs md:text-sm text-gray-600">{partner.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hub & Spoke Network Section */}
            <div className="mb-16">
              {/* Hub & Spoke Network */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
                </div>

                {/* Section Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 relative z-10">
                  Hub & Spoke Network
                </h3>

                {/* Network Diagram */}
                <div className="relative z-10 flex justify-center items-center min-h-[400px] md:min-h-[500px]">
                  {/* SVG Lines connecting nodes */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 600 500"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Lines from center to each node */}
                    {/* Top Left - IIT BHU */}
                    <line x1="300" y1="250" x2="100" y2="100" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
                    {/* Top Right - BHU Varanasi */}
                    <line x1="300" y1="250" x2="500" y2="100" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
                    {/* Bottom Left - IIIT Allahabad */}
                    <line x1="300" y1="250" x2="80" y2="380" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
                    {/* Bottom Center - MNNIT Allahabad */}
                    <line x1="300" y1="250" x2="300" y2="450" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
                    {/* Bottom Right - University of Allahabad */}
                    <line x1="300" y1="250" x2="520" y2="380" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
                  </svg>

                  {/* Center Node - Ministry of Education */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/ministry-of-education-logo.jpg"
                        alt="Ministry of Education"
                        width={80}
                        height={80}
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Top Left Node - IIT BHU (Hub) */}
                  <div className="absolute left-[5%] md:left-[10%] top-[5%] md:top-[10%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/iit-bhu-university-logo-blue.jpg"
                          alt="IIT BHU"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">IIT BHU Varanasi</p>
                        <p className="text-blue-300 text-xs md:text-sm">(Hub)</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Right Node - BHU Varanasi (Hub) */}
                  <div className="absolute right-[5%] md:right-[10%] top-[5%] md:top-[10%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/bhu-logo.png"
                          alt="BHU Varanasi"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">BHU Varanasi</p>
                        <p className="text-blue-300 text-xs md:text-sm">(Hub)</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left Node - IIIT Allahabad (Spoke) */}
                  <div className="absolute left-[2%] md:left-[5%] bottom-[15%] md:bottom-[10%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/iiit-allahabad-logo-blue.jpg"
                          alt="IIIT Allahabad"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">IIIT Allahabad</p>
                        <p className="text-blue-300 text-xs md:text-sm">(Spoke)</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Center Node - MNNIT Allahabad (Spoke) */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[2%] md:bottom-[0%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/mnnit-logo.jpg"
                          alt="MNNIT Allahabad"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">MNNIT Allahabad</p>
                        <p className="text-blue-300 text-xs md:text-sm">(Spoke)</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Node - University of Allahabad (Spoke) */}
                  <div className="absolute right-[2%] md:right-[5%] bottom-[15%] md:bottom-[10%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/university-of-allahabad-logo-red.jpg"
                          alt="University of Allahabad"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                          University of Allahabad
                        </p>
                        <p className="text-blue-300 text-xs md:text-sm">(Spoke)</p>
                      </div>
                    </div>
                  </div>

                  {/* CSIR Node */}
                  <div className="absolute left-[35%] md:left-[40%] top-[50%] md:top-[55%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image src="/csir-logo.png" alt="CSIR" width={50} height={50} className="object-contain" />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">CSIR</p>
                      </div>
                    </div>
                  </div>

                  {/* Vijnana Bharati Node */}
                  <div className="absolute left-[55%] md:left-[60%] top-[50%] md:top-[55%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/vijnana-bharati-logo.png"
                          alt="Vijnana Bharati"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">Vijnana Bharati</p>
                      </div>
                    </div>
                  </div>

                  {/* Co-grad Node */}
                  <div className="absolute left-[75%] md:left-[80%] top-[50%] md:top-[55%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image src="/cograd-logo.png" alt="Co-grad" width={50} height={50} className="object-contain" />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">Co-grad</p>
                      </div>
                    </div>
                  </div>

                  {/* MedhaAI Node */}
                  <div className="absolute left-[50%] md:left-[55%] bottom-[50%] md:bottom-[45%] z-10">
                    <div className="flex flex-col items-center group">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src="/medha-ai-logo.png"
                          alt="MedhaAI"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <p className="text-white font-semibold text-sm md:text-base">MedhaAI</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-8 mt-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">Hub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/60 rounded-full"></div>
                    <span className="text-white/80 text-sm">Spoke</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Hub & Spoke Network Section */}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 border-2 border-dashed border-gray-300 hover:border-orange-500 transition-all duration-300 hover:shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Join us in shaping India's innovation ecosystem. Partner with SANKALP 2026 to connect with top DICs,
                startups, and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-orange-300">
                  Become a Partner
                </button>
                <a
                  href="mailto:info@sankalp2026.com"
                  className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-300 hover:border-orange-500 transition-all duration-300 inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
