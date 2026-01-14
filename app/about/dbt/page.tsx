"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Microscope, Leaf, Flag as Flask, Dna, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutDBTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
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
            <div className="flex justify-center gap-1 mb-4">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center mb-3">
              Department of Biotechnology
            </h1>
            <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Advancing Life Sciences and Biomedical Research
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 bg-white shadow-xl border-2 border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Department of Biotechnology at MNNIT Allahabad is committed to excellence in biotechnology
                  education, research, and innovation. Established to address the growing importance of biological
                  sciences in modern technology, the department offers comprehensive programs that integrate molecular
                  biology, genetic engineering, bioinformatics, and bioprocess engineering.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-12">
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600">
                    <Microscope className="text-green-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Research</h3>
                    <p className="text-gray-700">
                      Cutting-edge research in genomics, proteomics, drug discovery, and bioinformatics with
                      state-of-the-art laboratory facilities.
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600">
                    <Dna className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Genetic Engineering</h3>
                    <p className="text-gray-700">
                      Focus on recombinant DNA technology, gene therapy, and molecular diagnostics for medical and
                      agricultural applications.
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500">
                    <Flask className="text-orange-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Bioprocess Technology</h3>
                    <p className="text-gray-700">
                      Industrial biotechnology applications including biofuels, bioremediation, and sustainable
                      bioprocessing solutions.
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-600">
                    <Leaf className="text-purple-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Biotech</h3>
                    <p className="text-gray-700">
                      Research in environmental sustainability, waste management, and development of eco-friendly
                      biotechnological solutions.
                    </p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Academic Programs & Research Focus</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>B.Tech and M.Tech programs in Biotechnology and Bioinformatics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Ph.D. programs in various specialized areas of biotechnology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Funded research projects from DST, DBT, CSIR, and other national agencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Collaborations with pharmaceutical and biotech industries for R&D</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>Strong focus on computational biology and systems biology approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span>International collaborations for joint research and student exchange programs</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
