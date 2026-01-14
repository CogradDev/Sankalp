"use client"

import { Trophy, Lightbulb, Sparkles, RefreshCw } from "lucide-react"
import { useState } from "react"

export function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<string | null>(null)

  const awards = [
    {
      icon: Sparkles,
      title: "Most Promising Startup",
      description: "Honoring startups with exceptional potential and innovative business models",
      color: "from-blue-500 to-purple-600",
      criteria: ["Market potential", "Innovation factor", "Team capability"],
    },
    {
      icon: Lightbulb,
      title: "Most Innovative Prototype",
      description: "Celebrating breakthrough prototype solutions addressing real-world challenges",
      color: "from-yellow-500 to-orange-600",
      criteria: ["Originality", "Technical excellence", "User impact"],
    },
    {
      icon: Trophy,
      title: "Most Impactful Design",
      description: "Acknowledging designs creating measurable positive change in society",
      color: "from-green-500 to-teal-600",
      criteria: ["Social benefit", "Scalability", "Implementation success"],
    },
    {
      icon: RefreshCw,
      title: "Technology Transfer Award",
      description: "Honoring successful conversion of research into practical applications",
      color: "from-indigo-500 to-blue-600",
      criteria: ["Commercial viability", "Research quality", "Industry adoption"],
    },
  ]

  return (
    <section
      id="awards"
      className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Tricolor accent */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-1 h-1 w-24">
            <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
            <div className="flex-1 bg-white rounded-full" />
            <div className="flex-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full" />
          </div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">Awards & Recognition</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
            Celebrating excellence, innovation, and impact at SANKALP 2026
          </p>
        </div>

        {/* Award Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {awards.map((award, idx) => {
            const Icon = award.icon
            const isSelected = selectedAward === award.title
            return (
              <div
                key={idx}
                onClick={() => setSelectedAward(isSelected ? null : award.title)}
                className={`group cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-6 border transition-all duration-500 ${
                  isSelected
                    ? "border-orange-500 bg-white/10 shadow-lg shadow-orange-500/20 scale-105"
                    : "border-white/10 hover:border-orange-500/50 hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">{award.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{award.description}</p>
                  </div>
                </div>

                {/* Evaluation Criteria - shown on selection */}
                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-xs font-semibold text-orange-400 mb-2">Evaluation Criteria:</p>
                    <ul className="space-y-1">
                      {award.criteria.map((criterion, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-orange-500" />
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

        {/* Application Process */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">How to Apply</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                1
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Submit Application</h4>
              <p className="text-xs text-gray-400">Fill the online form with project details</p>
            </div>

            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                2
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Internal Review</h4>
              <p className="text-xs text-gray-400">Expert committee evaluates submissions</p>
            </div>

            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                3
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Winner Announcement</h4>
              <p className="text-xs text-gray-400">Winners announced at the summit</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 text-sm md:text-base">
              Apply for Award
            </button>
            <button className="px-6 md:px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm md:text-base">
              View Guidelines
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            All submissions will be evaluated by an internal expert committee based on predefined criteria
          </p>
        </div>
      </div>
    </section>
  )
}
