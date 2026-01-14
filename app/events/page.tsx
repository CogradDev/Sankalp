"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Laptop, FileText, Lightbulb, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const programs = [
    {
      title: "TechShakti",
      icon: Laptop,
      description:
        "A pre-convention initiative designed to prepare youth for industry-linked training programs, enabling hands-on exposure to real-world technologies, tools, and innovation-focused processes essential for future readiness.",
      gradient: "from-orange-500 via-orange-400 to-orange-300",
      bgGradient: "from-orange-500/20 via-orange-400/15 to-transparent",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      delay: "delay-100",
    },
    {
      title: "FDP",
      icon: FileText,
      description:
        "A capacity-building program designed to upskill ITI faculty and skilling trainers through digital pedagogy, industry-oriented training methods, and innovation ecosystem practices, while enhancing awareness of IPR and emerging technologies.",
      gradient: "from-blue-500 via-blue-400 to-blue-300",
      bgGradient: "from-blue-500/20 via-blue-400/15 to-transparent",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      delay: "delay-300",
    },
    {
      title: "HACKATHON",
      icon: Lightbulb,
      description:
        "A national-level challenge inviting students from IITs, NITs, IIITs, and technical institutes to develop AI-driven solutions for real societal problems, promoting creativity, teamwork, and innovation for public good.",
      gradient: "from-green-500 via-green-400 to-green-300",
      bgGradient: "from-green-500/20 via-green-400/15 to-transparent",
      iconBg: "bg-gradient-to-br from-green-500 to-green-600",
      delay: "delay-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <ScrollToTop />

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
            <span className="text-orange-600 font-semibold">Pre-events</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-16 h-1 bg-white rounded-full"></div>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Pre-Event Programs</h1>
              <p className="text-base md:text-lg text-gray-300">
                Building Skills, Knowledge, and Innovation for National Development
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid Section */}
        <section className="py-16 pt-20 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {programs.map((program, index) => {
                const Icon = program.icon
                return (
                  <div
                    key={index}
                    className={`group animate-fade-in-up ${program.delay} opacity-0`}
                    style={{ animationFillMode: "forwards" }}
                  >
                    <div className="relative h-full">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Card Content */}
                      <div className="relative h-full bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        {/* Icon Circle - positioned above card */}
                        <div className="flex justify-center -mt-12 mb-6">
                          <div
                            className={`w-24 h-24 rounded-full ${program.iconBg} shadow-xl flex items-center justify-center border-4 border-white group-hover:scale-110 transition-transform duration-500`}
                          >
                            <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="px-6 pb-8 pt-2">
                          <h3
                            className={`text-2xl lg:text-3xl font-bold text-center mb-4 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}
                          >
                            {program.title}
                          </h3>
                          <p className="text-gray-700 text-center leading-relaxed text-sm lg:text-base">
                            {program.description}
                          </p>
                        </div>

                        {/* Bottom Accent Line */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* AI For All Workshop Section */}
        <section className="py-16 pb-24 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="animate-fade-in-up delay-700 opacity-0" style={{ animationFillMode: "forwards" }}>
              {/* Outer Container with Glow Effect */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-[2.5rem] blur-2xl" />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-[2.5rem] shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-400/10 to-transparent rounded-tl-full" />

                  {/* Content */}
                  <div className="relative px-8 py-12 lg:px-16 lg:py-16">
                    <div className="text-center max-w-4xl mx-auto">
                      {/* Title */}
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        AI FOR ALL – Hands-on Workshop
                      </h2>

                      {/* Divider */}
                      <div className="flex justify-center mb-8">
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full" />
                      </div>

                      {/* Description */}
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        An engaging, beginner-friendly workshop introducing participants to practical AI tools. Through
                        guided activities, attendees learn how AI enhances productivity, decision-making, and
                        innovation—empowering everyone to use AI responsibly for personal, academic, and professional
                        growth.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Gradient Accent */}
                  <div className="h-2 bg-gradient-to-r from-orange-500 via-purple-500 to-green-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
