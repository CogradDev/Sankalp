"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Users, ChevronRight, Microscope, FlaskConical, Dna } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutBiotechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-400">About Us</span>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">Department of Biotechnology</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-1 mb-3">
              <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-12 h-1 bg-white border border-gray-300 rounded-full"></div>
              <div className="w-12 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-2">
              Department of Biotechnology
            </h1>
            <p className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto">
              Integrating Life Sciences with Engineering Excellence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Dna className="text-orange-600" size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">About the Department</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Biotechnology at MNNIT Allahabad was established as a new academic unit under Applied Mechanics in 2006
                to integrate life sciences with engineering. An administratively independent Department of Biotechnology
                was established in April 2012. Since its inception, the department has witnessed a consistent rise in
                the students' demand for the subject. The department runs a full-fledged undergraduate (B.Tech.) and
                postgraduate degree course (M. Tech) in Biotechnology. The department has also started a PhD program in
                biotechnology since 2009.
              </p>
            </div>

            {/* Key Features Grid - Compact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:shadow-lg hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <GraduationCap className="text-orange-600" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Programs</h3>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    <span>B.Tech.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    <span>M.Tech.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    <span>PhD (2009)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-lg hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Microscope className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Research</h3>
                </div>
                <p className="text-xs text-gray-600">State-of-the-art labs & cutting-edge research facilities</p>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:shadow-lg hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Growth</h3>
                </div>
                <p className="text-xs text-gray-600">Consistent rise in student demand since 2006</p>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 hover:shadow-lg hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FlaskConical className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Integration</h3>
                </div>
                <p className="text-xs text-gray-600">Life sciences meets engineering excellence</p>
              </Card>
            </div>

            {/* Highlights Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Department Highlights</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Established 2006, independent dept. since 2012</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Full B.Tech. and M.Tech. programs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">PhD program since 2009</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">High student enrollment growth</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Life sciences + engineering integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Advanced research facilities</span>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl border-2 border-gray-100 p-6 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-8 h-0.5 bg-orange-500"></div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center">Vision & Mission</h3>
                <div className="w-8 h-0.5 bg-green-600"></div>
              </div>
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
                To emerge as a center of excellence in biotechnology education and research, contributing to scientific
                advancement and societal development through innovative solutions in healthcare, agriculture, and
                environmental sustainability.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
