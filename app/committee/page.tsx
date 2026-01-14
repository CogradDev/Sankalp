"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Award, ChevronRight } from "lucide-react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"

export default function CommitteePage() {
  const [activeTab, setActiveTab] = useState<"organizing" | "advisory">("organizing")

  const leadershipTeam = [
    {
      name: "Prof. R.S. Verma",
      designation: "Patron", // Removed "Chief" from designation
      institution: "Director, MNNIT Allahabad",
      featured: true,
    },
    {
      name: "Prof. Manisha Sachan",
      designation: "Chairman",
      institution: "Head, Department of Biotechnology",
      featured: true,
    },
    {
      name: "Prof. Shivesh Sharma",
      designation: "Convener",
      institution: "Dean (R&C), MNNIT Allahabad",
      featured: true,
    },
  ]

  const coreCommittee = [
    {
      name: "Prof. Mohd. Zaheer Khan Yusafzai",
      designation: "Coordinator, DIC-IIT (BHU)",
      institution: "Indian Institute of Technology, BHU",
    },
    {
      name: "Prof. Manish Arora",
      designation: "Coordinator, DIC-BHU",
      institution: "Banaras Hindu University",
    },
    {
      name: "Prof. Shivesh Sharma",
      designation: "Coordinator, DIC-MNNIT Allahabad",
      institution: "Motilal Nehru National Institute of Technology",
    },
    {
      name: "Dr. Suneel Yadav",
      designation: "Coordinator, DIC-IIIT Allahabad",
      subDesignation: "Co-convener Sankalp 2026",
      institution: "Indian Institute of Information Technology, Allahabad",
    },
    {
      name: "Dr. Awadh Bihari Yadav",
      designation: "Coordinator, DIC-University of Allahabad",
      institution: "University of Allahabad",
    },
  ]

  const organizingCoordinators = [
    {
      name: "Prof. Arun Prakash",
      department: "Electronics and Communication Engineering",
    },
    {
      name: "Dr. Anubhav Rawat",
      department: "Applied Mechanics",
    },
    {
      name: "Prof. Tripti Singh",
      department: "Training and Placement",
    },
    {
      name: "Dr. Ramji Dwivedi",
      department: "Training and Placement",
    },
    {
      name: "Dr. Ambak kr. Rai",
      department: "Biotechnology",
    },
    {
      name: "Dr. N.K. Singh",
      department: "Biotechnology",
    },
    {
      name: "Dr. Sameer Srivastava",
      department: "Biotechnology",
    },
    {
      name: "Dr. Joyabrata Mal",
      department: "Biotechnology",
    },
  ]

  const advisoryCommittee = [
    {
      name: "Vice Chancellor",
      institution: "Banaras Hindu University, Varanasi",
    },
    {
      name: "Director",
      institution: "IIT BHU, Varanasi",
    },
    {
      name: "Director",
      institution: "MNNIT Allahabad, Prayagraj",
    },
    {
      name: "Director",
      institution: "Indian Institute of Information Technology, Allahabad",
    },
    {
      name: "Vice Chancellor",
      institution: "University of Allahabad",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/20 to-green-50/20">
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
            <span className="text-orange-600 font-semibold">Committee</span>
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

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Committee</h1>
              <p className="text-base md:text-lg text-gray-300">
                Distinguished members and experts guiding SANKALP 2026 towards excellence in academic and professional
                development.
              </p>
            </div>
          </div>
        </section>

        {/* Committee Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
              <button
                onClick={() => setActiveTab("organizing")}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                  activeTab === "organizing"
                    ? "bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 border-orange-500 shadow-xl scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Users size={20} />
                  Organizing Committee
                </div>
              </button>

              <button
                onClick={() => setActiveTab("advisory")}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                  activeTab === "advisory"
                    ? "bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 border-orange-500 shadow-xl scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Award size={20} />
                  Advisory Committee
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
              {activeTab === "organizing" ? (
                <div className="space-y-16">
                  {/* Leadership Team section with featured styling */}
                  <div>
                    <div className="text-center mb-12">
                      <div className="flex justify-center gap-1 mb-4">
                        <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
                        <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Leadership Team</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Guiding SANKALP 2026 with vision, expertise, and commitment to excellence
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      {leadershipTeam.map((member, idx) => (
                        <div
                          key={idx}
                          className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-orange-200 hover:border-orange-400 hover:scale-105"
                        >
                          <div className="flex gap-1 h-1.5 mb-6 rounded-full overflow-hidden">
                            <div className="flex-1 bg-orange-500" />
                            <div className="flex-1 bg-white border-y border-gray-300" />
                            <div className="flex-1 bg-green-600" />
                          </div>

                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Users size={32} />
                            </div>

                            <div>
                              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                                {member.designation}
                              </p>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                                {member.name}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">{member.institution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Committee section */}
                  <div>
                    <div className="text-center mb-12">
                      <div className="flex justify-center gap-1 mb-4">
                        <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
                        <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Core Committee</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Coordinators from leading Design Innovation Centres across the region
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                      {coreCommittee.map((member, idx) => (
                        <div
                          key={idx}
                          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 hover:scale-105"
                        >
                          <div className="flex gap-1 h-1 mb-5 rounded-full overflow-hidden">
                            <div className="flex-1 bg-orange-500" />
                            <div className="flex-1 bg-white border-y border-gray-300" />
                            <div className="flex-1 bg-green-600" />
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-sm font-semibold text-orange-600">{member.designation}</p>
                            {member.subDesignation && (
                              <p className="text-sm font-semibold text-green-600">{member.subDesignation}</p>
                            )}
                            <p className="text-sm text-gray-600 leading-relaxed">{member.institution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Organizing Coordinators section */}
                  <div>
                    <div className="text-center mb-12">
                      <div className="flex justify-center gap-1 mb-4">
                        <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
                        <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Organizing Coordinators</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Faculty members coordinating various aspects of the summit
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                      {organizingCoordinators.map((member, idx) => (
                        <div
                          key={idx}
                          className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-green-300 hover:scale-105"
                        >
                          <div className="flex gap-1 h-0.5 mb-4 rounded-full overflow-hidden">
                            <div className="flex-1 bg-orange-500" />
                            <div className="flex-1 bg-white border-y border-gray-300" />
                            <div className="flex-1 bg-green-600" />
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">{member.department}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-12">
                    <div className="flex justify-center gap-1 mb-4">
                      <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                      <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
                      <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Advisory Committee</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Distinguished leaders from premier academic institutions guiding SANKALP 2026
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {advisoryCommittee.map((member, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 hover:scale-105"
                      >
                        <div className="flex gap-1 h-1 mb-5 rounded-full overflow-hidden">
                          <div className="flex-1 bg-orange-500" />
                          <div className="flex-1 bg-white border-y border-gray-300" />
                          <div className="flex-1 bg-green-600" />
                        </div>

                        <div className="space-y-3">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                            <Award size={28} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors text-center">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed text-center">{member.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
