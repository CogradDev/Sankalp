"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutMNNITPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Tricolor Accent Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-400">About Us</span>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">About MNNIT</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-slate-900 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-16 h-1 bg-white rounded-full"></div>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
                Host Institute: Motilal Nehru National Institute of Technology (MNNIT) Allahabad
              </h1>
              <p className="text-base md:text-lg text-gray-300">
                Institute of National Importance | Established 1961-62
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Image */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-justify">
                  MNNIT-Allahabad, established in 1961-62 and recently celebrated its Diamond Jubilee, is one of the
                  National Institutes of Technology and an Institute of National Importance in India. The Institute is
                  situated in a holy city, Prayagraj. Prayagraj is a sacred city where three rivers, the 'Ganges,'
                  'Yamuna,' and the invisible 'Saraswati' (mythical) meet and continue their journey further.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Motilal Nehru National Institute of Technology Allahabad is an Institute with a total commitment to
                  quality and excellence in academic pursuits. It was established as one of the seventeen Regional
                  Engineering Colleges of India in 1961 as a joint enterprise of the Government of India and Uttar
                  Pradesh. It was an associated college of the University of Allahabad, India's third oldest university.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Card className="relative overflow-hidden border-2 border-gray-100 shadow-xl">
                  <img
                    src="/images/1535368937php8iaug3.jpeg"
                    alt="MNNIT Main Building"
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </div>
            </div>

            {/* Continued Content */}
            <Card className="p-8 md:p-12 bg-white shadow-xl border-2 border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  The Institute began by offering Bachelor's Degree Programs in Civil, Electrical, and Mechanical
                  Engineering. It was the first in the country to start an undergraduate program in Computer Science &
                  Engineering in 1976-77. Subsequently, in 1982-83, undergraduate programs in Electronics Engineering
                  and Production & Industrial Engineering were started. The first Master's Program of the Institute was
                  introduced by the Mechanical Engineering Department in the year 1966.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  The Institute now offers B.Tech., M.Tech., Ph.D. Programs, MCA, MBA, M.Sc.
                </p>
                <div className="text-center mt-8">
                  <a
                    href="https://www.mnnit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    For more detail: Visit Official Website
                    <ChevronRight size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
