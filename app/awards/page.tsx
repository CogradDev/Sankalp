"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Trophy, Lightbulb, Sparkles, RefreshCw, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"
import { AwardApplicationForm } from "@/components/award-application-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AwardGuidelinesModal } from "@/components/award-guidelines-modal"

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState<string | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [showGuidelines, setShowGuidelines] = useState(false)

  const awards = [
    {
      icon: Sparkles,
      title: "Most Promising Startup",
      description: "Honoring startups with exceptional potential and innovative business models",
      color: "from-pink-500 to-rose-600",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      criteria: ["Market potential", "Innovation factor", "Team capability"],
    },
    {
      icon: Lightbulb,
      title: "Most Innovative Prototype",
      description: "Celebrating breakthrough prototype solutions addressing real-world challenges",
      color: "from-yellow-500 to-amber-600",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      criteria: ["Originality", "Technical excellence", "User impact"],
    },
    {
      icon: Trophy,
      title: "Most Impactful Design",
      description: "Acknowledging designs creating measurable positive change in society",
      color: "from-green-600 to-emerald-700",
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
      criteria: ["Social benefit", "Scalability", "Implementation success"],
    },
    {
      icon: RefreshCw,
      title: "Technology Transfer Award",
      description: "Honoring successful conversion of research into practical applications",
      color: "from-purple-600 to-violet-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      criteria: ["Commercial viability", "Research quality", "Industry adoption"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <ScrollToTop />

      <div className="pt-24">
        {/* Tricolor Accent Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">Awards</span>
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

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Awards & Recognition</h1>
              <p className="text-base md:text-lg text-gray-300">
                Celebrating excellence, innovation, and impact at SANKALP 2026. Honoring the pioneers (DIC) who are
                shaping the future of technology and entrepreneurship in India.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {awards.map((award, idx) => {
              const Icon = award.icon
              const isSelected = selectedAward === award.title
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedAward(isSelected ? null : award.title)}
                  className={`group cursor-pointer bg-white rounded-2xl p-4 shadow-lg transition-all duration-500 border-2 hover:scale-105 hover:shadow-2xl ${
                    isSelected
                      ? "border-orange-500 shadow-xl shadow-orange-500/20 scale-105"
                      : "border-gray-100 hover:border-orange-200"
                  }`}
                >
                  {/* Tricolor top accent */}
                  <div className="flex gap-1 h-1 mb-4 rounded-full overflow-hidden">
                    <div className="flex-1 bg-orange-500" />
                    <div className="flex-1 bg-white border-y border-gray-300" />
                    <div className="flex-1 bg-green-600" />
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${award.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}
                    >
                      <Icon className={`w-6 h-6 ${award.iconColor}`} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight group-hover:text-orange-600 transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{award.description}</p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-orange-200 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">
                        Evaluation Criteria:
                      </p>
                      <ul className="space-y-1.5">
                        {award.criteria.map((criterion, i) => (
                          <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1 flex-shrink-0" />
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-orange-200">
            {/* Tricolor top border */}
            <div className="flex gap-1 h-1.5 mb-8 rounded-full overflow-hidden">
              <div className="flex-1 bg-orange-500" />
              <div className="flex-1 bg-white border-y border-gray-300" />
              <div className="flex-1 bg-green-600" />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How to Apply</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-orange-50 border-2 border-orange-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-lg">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">Submit Application</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fill the online form with project details and supporting documents
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-white text-gray-900 font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-lg border-2 border-gray-300">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">Internal Review</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Expert committee evaluates all submissions based on criteria
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-green-50 border-2 border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-700 text-white font-bold flex items-center justify-center mx-auto mb-4 text-xl shadow-lg">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">Winner Announcement</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Winners announced and recognized at the summit</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 border-2 border-orange-300"
              >
                Apply for Award
              </button>
              <button
                onClick={() => setShowGuidelines(true)}
                className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-300 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Guidelines
              </button>
            </div>

            <p className="text-center mt-4 text-sm text-gray-700 font-medium">(Last date- 28/02/2026)</p>
          </div>
        </div>
      </section>

      <Footer />

      <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Award Application Form</DialogTitle>
          </DialogHeader>
          <AwardApplicationForm onClose={() => setShowApplicationForm(false)} />
        </DialogContent>
      </Dialog>

      <AwardGuidelinesModal open={showGuidelines} onOpenChange={setShowGuidelines} />
    </main>
  )
}
