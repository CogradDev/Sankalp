"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HubSpokeNetworkSection } from "@/components/hub-spoke-network-section"
import { Building2, Target, Users, TrendingUp, ChevronRight, Lightbulb, Rocket, Award, Network } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutDICPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-400">About Us</span>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">About DIC</span>
          </div>
        </div>

        {/* Hero Section - Reduced padding and size for compact design */}
        <section className="container mx-auto px-4 py-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-1 mb-3">
              <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-12 h-1 bg-white border border-gray-300 rounded-full"></div>
              <div className="w-12 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-2">
              Design Innovation Centre (DIC)
            </h1>
            <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto">
              National Innovation Hub | Ministry of Education Initiative
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Card */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-white to-orange-50 shadow-lg border-l-4 border-orange-500 mb-8">
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  <span className="font-bold text-orange-600">National Initiative for Design Innovation (NIDI)</span>{" "}
                  was launched by the Government of India under the Ministry of Education in March 2014 as a flagship
                  program under the Twelfth Five-Year Plan. The initiative aims to establish a robust innovation
                  ecosystem across India by promoting design thinking, creative problem-solving, and technological
                  advancement in educational institutions.
                </p>
                <p>
                  <span className="font-bold text-green-600">Design Innovation Centres (DICs)</span> are the
                  cornerstones of NIDI, established through a Hub & Spoke model where leading institutions of national
                  repute serve as mentors while synergizing with partner institutes. Currently, 20 DICs operate with 64
                  Spokes across the country, co-located in prestigious institutions including IITs, NITs, Central
                  Universities, and State Universities.
                </p>
              </div>
            </Card>

            {/* NIDI & DIC Overview */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-white shadow-md border-l-4 border-orange-500">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  NIDI Vision & Objectives
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Promote a culture of innovation and creative problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Strengthen R&D in design with focus on societal challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Devise innovative solutions suited to Indian context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Catalyze interdisciplinary research and innovation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white shadow-md border-l-4 border-green-600">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  DIC Network Structure
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>
                      <span className="font-semibold">20 DICs</span> established across India
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>
                      <span className="font-semibold">64 Spokes</span> facilitating regional collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>Hub & Spoke model ensuring mentorship and knowledge transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>Located in IITs, NITs, Central and State Universities</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Key Features Grid - Compact 2x2 grid with modern design */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="group p-5 bg-white border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Design Education</h3>
                  <p className="text-xs text-gray-600">Spreading design thinking culture</p>
                </div>
              </Card>

              <Card className="group p-5 bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">R&D Catalyst</h3>
                  <p className="text-xs text-gray-600">Propelling innovation research</p>
                </div>
              </Card>

              <Card className="group p-5 bg-white border-2 border-gray-100 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Community Building</h3>
                  <p className="text-xs text-gray-600">Students, faculty, industry leaders</p>
                </div>
              </Card>

              <Card className="group p-5 bg-white border-2 border-gray-100 hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Social Impact</h3>
                  <p className="text-xs text-gray-600">Addressing real-world problems</p>
                </div>
              </Card>
            </div>

            {/* Key Initiatives - Compact two-column layout */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-md border-l-4 border-orange-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-orange-100 rounded-xl">
                    <Lightbulb className="text-orange-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">Innovation Culture</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Design thinking workshops and bootcamps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Innovation hackathons and competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span>Creative problem-solving for societal challenges</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white shadow-md border-l-4 border-green-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-green-100 rounded-xl">
                    <Rocket className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">Startup Ecosystem</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>Incubation and entrepreneurship support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>Mentorship from experienced innovators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                    <span>Investor networking and funding pathways</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white shadow-md border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Award className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">Research & IPR</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>Patent filing assistance and guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>Intellectual property protection support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                    <span>Technology transfer and commercialization</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white shadow-md border-l-4 border-purple-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <Network className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">Network Collaboration</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Inter-institutional knowledge sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Industry-academia partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>Regional innovation hub development</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Hub & Spoke Network Section */}
        <HubSpokeNetworkSection />
      </main>

      <Footer />
    </div>
  )
}
