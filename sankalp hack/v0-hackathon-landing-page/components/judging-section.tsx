"use client"

import { Scale, Users, Trophy, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const judgeScorecard = [
  { criterion: "Problem Understanding", weight: "15%", color: "bg-blue-500" },
  { criterion: "AI & Technical Strength", weight: "25%", color: "bg-purple-500" },
  { criterion: "Impact & Policy Relevance", weight: "25%", color: "bg-orange-500" },
  { criterion: "UX & Accessibility", weight: "20%", color: "bg-green-500" },
  { criterion: "Ethics & Trust", weight: "15%", color: "bg-pink-500" },
]

const mentorCriteria = ["Technical competence", "AI understanding", "Code quality", "Execution discipline"]

const finaleSteps = [
  "Live demo verification",
  "Technical defense",
  "Impact & policy defense",
  "Stress test challenge",
  "Final scoring",
  "Jury deliberation",
]

export function JudgingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="judging" className="py-20 px-4 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className={`h-1 bg-orange-500 rounded-full transition-all duration-700 ${isVisible ? "w-12" : "w-0"}`}
            />
            <div
              className={`w-2 h-1 bg-gray-300 rounded-full transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            />
            <div
              className={`h-1 bg-green-600 rounded-full transition-all duration-700 delay-150 ${isVisible ? "w-12" : "w-0"}`}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
            Judging & <span className="text-orange-500">Evaluation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive assessment framework ensuring fair and rigorous evaluation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div
            className={`lg:col-span-2 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:shadow-2xl hover:scale-[1.02] hover:border-orange-200 transition-all duration-500 relative overflow-hidden group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-green-50/0 group-hover:from-orange-50/30 group-hover:to-green-50/20 transition-all duration-700 pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Scale className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Judge Scorecard</h3>
              </div>
              <div className="space-y-4">
                {judgeScorecard.map((item, index) => (
                  <div
                    key={index}
                    className={`group/item hover:bg-gray-50 p-4 rounded-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-md border border-transparent hover:border-orange-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900 group-hover/item:text-orange-600 transition-colors">
                        {item.criterion}
                      </span>
                      <span className="text-lg font-bold text-orange-600 group-hover/item:scale-110 transition-transform">
                        {item.weight}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`${item.color} h-full rounded-full transition-all duration-1000 group-hover/item:shadow-lg`}
                        style={{
                          width: isVisible ? item.weight : "0%",
                          transitionDelay: `${300 + index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:shadow-2xl hover:scale-[1.02] hover:border-blue-200 transition-all duration-500 relative overflow-hidden group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-green-50/0 group-hover:from-blue-50/30 group-hover:to-green-50/20 transition-all duration-700 pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mentor Evaluation</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Mentors assess:</p>
              <ul className="space-y-3">
                {mentorCriteria.map((criterion, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 group/li hover:bg-blue-50 p-2 rounded-lg -mx-2 transition-all duration-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 group-hover/li:translate-x-1 transition-transform" />
                    <span className="text-gray-700 group-hover/li:text-blue-700 transition-colors">{criterion}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 hover:border-blue-600 transition-all duration-300">
                <p className="text-xs text-gray-700 font-medium">Mentor feedback affects finale eligibility</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:shadow-2xl hover:border-green-200 transition-all duration-500 relative overflow-hidden group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-orange-50/0 group-hover:from-green-50/30 group-hover:to-orange-50/20 transition-all duration-700 pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Grand Finale Workflow</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {finaleSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-green-50 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg hover:scale-110 transition-all duration-500 group/step cursor-pointer ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 font-bold text-orange-600 border-2 border-orange-500 group-hover/step:scale-125 group-hover/step:shadow-md transition-all duration-500">
                    {index + 1}
                  </div>
                  <p className="text-xs text-gray-700 font-medium leading-tight group-hover/step:text-orange-700 transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
