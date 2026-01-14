"use client"

import { BookOpen, Briefcase, Brain, ArrowRight, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"

interface ProblemStatementsSectionProps {
  onRegisterClick: () => void
}

const problems = [
  {
    icon: BookOpen,
    title: "AI for Education",
    subtitle: "Smart Pedagogy Systems",
    summary:
      "Design AI-powered teaching assistants aligned with NCF 2023 and NEP 2020 to improve classroom learning outcomes.",
    accentColor: "orange",
    colors: {
      top: "bg-orange-500",
      light: "bg-orange-50",
      icon: "text-orange-500",
      border: "border-orange-500",
      hover: "hover:bg-orange-50",
      glow: "shadow-orange-500/30",
      gradient: "from-orange-500 via-orange-400 to-orange-300",
    },
    fullProblem: {
      context:
        "NEP 2020 and NCF 2023 emphasize competency-based and experiential learning. Teachers need AI tools aligned with curriculum outcomes and diverse learner needs.",
      problemToSolve:
        "Build an AI teaching and learning assistant that supports lesson planning, personalized explanations, and continuous assessment mapped to curriculum competencies.",
      features: [
        "Lesson plan generation mapped to learning outcomes",
        "Personalized explanations using multiple learning styles",
        "Automated quiz and formative assessment generation",
        "Concept mastery tracking and gap detection",
      ],
      deliverables: [
        "Working prototype or demo",
        "Explanation of AI workflow and data logic",
        "Sample lesson and assessment outputs",
      ],
      evaluation: ["Pedagogical alignment", "Classroom usability", "AI effectiveness and explainability"],
    },
  },
  {
    icon: Briefcase,
    title: "AI for Skilling",
    subtitle: "Career Pathway & Credit Mapping",
    summary:
      "Build AI systems that guide learners through skill pathways and map learning to credit or certification frameworks.",
    accentColor: "blue",
    colors: {
      top: "bg-blue-500",
      light: "bg-blue-50",
      icon: "text-blue-500",
      border: "border-blue-500",
      hover: "hover:bg-blue-50",
      glow: "shadow-blue-500/30",
      gradient: "from-blue-500 via-blue-400 to-blue-300",
    },
    fullProblem: {
      context:
        "India's skilling ecosystem needs flexible, credit-based learning pathways and employability-aligned skill progression.",
      problemToSolve:
        "Create an AI-driven platform that recommends personalized skill pathways and tracks employability readiness.",
      features: [
        "Career goal to skill pathway mapping",
        "Skill progression recommendations",
        "Credit or certification mapping",
        "Assessment-based readiness indicators",
      ],
      deliverables: [
        "Interactive prototype",
        "Recommendation logic explanation",
        "Sample learner profiles and outputs",
      ],
      evaluation: ["Personalization quality", "Career relevance", "Practical deployment feasibility"],
    },
  },
  {
    icon: Brain,
    title: "AI for Leadership",
    subtitle: "Crisis Decision Support Systems",
    summary: "Create AI systems that help leaders evaluate strategies and make ethical decisions during crises.",
    accentColor: "purple",
    colors: {
      top: "bg-purple-500",
      light: "bg-purple-50",
      icon: "text-purple-500",
      border: "border-purple-500",
      hover: "hover:bg-purple-50",
      glow: "shadow-purple-500/30",
      gradient: "from-purple-500 via-purple-400 to-purple-300",
    },
    fullProblem: {
      context: "Leaders face complex crises requiring fast and structured decision-making support.",
      problemToSolve:
        "Develop an AI decision-support system trained on case studies to guide leaders through crisis response strategies.",
      features: [
        "Crisis scenario simulations",
        "Strategy comparison and risk analysis",
        "Explainable AI recommendations",
        "Stakeholder impact visualization",
      ],
      deliverables: ["Simulation demo or workflow", "Explanation of decision models", "Sample crisis scenarios"],
      evaluation: ["Scenario realism", "Decision framework quality", "Explainability and ethics"],
    },
  },
]

export function ProblemStatementsSection({ onRegisterClick }: ProblemStatementsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  useEffect(() => {
    if (selectedProblem !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedProblem])

  const handleRegister = () => {
    setSelectedProblem(null)
    setTimeout(() => {
      onRegisterClick()
    }, 300)
  }

  return (
    <section id="problem-statements" className="relative py-24 px-4 overflow-hidden bg-gray-50" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/30 via-transparent to-green-50/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjk5MzMiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6TTEyIDM2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-6 overflow-hidden">
            <div
              className={`h-1 bg-orange-500 rounded-full transition-all duration-700 ${isVisible ? "w-16" : "w-0"}`}
            />
            <div
              className={`h-1 bg-gray-300 rounded-full transition-all duration-700 delay-75 ${isVisible ? "w-4" : "w-0"}`}
            />
            <div
              className={`h-1 bg-green-600 rounded-full transition-all duration-700 delay-150 ${isVisible ? "w-16" : "w-0"}`}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight text-gray-900 tracking-tight">
            Problem Statements <span className="text-gray-400">—</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Choose Your Challenge
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build AI solutions aligned with national education reforms and future workforce needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                } ${isHovered ? "scale-105 -translate-y-2" : "scale-100"}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onClick={() => setSelectedProblem(index)}
              >
                <div className="h-2 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-600 transition-transform duration-700 ${
                      isHovered ? "scale-x-110" : "scale-x-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent ${
                      isHovered ? "animate-shimmer" : ""
                    }`}
                  />
                </div>

                <div className="p-8">
                  <div
                    className={`relative w-16 h-16 ${problem.colors.light} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                    } ${isHovered ? problem.colors.glow : ""} shadow-lg`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${problem.colors.gradient} opacity-10 rounded-2xl`}
                    />
                    <Icon className={`relative w-8 h-8 ${problem.colors.icon} transition-transform duration-500`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight">{problem.title}</h3>
                  <p className="text-sm text-gray-500 font-semibold mb-4 uppercase tracking-wide">{problem.subtitle}</p>
                  <p className="text-base text-gray-600 leading-relaxed mb-8 min-h-[4.5rem]">{problem.summary}</p>

                  <button
                    className={`relative w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 ${problem.colors.border} rounded-xl font-semibold ${problem.colors.hover} transition-all duration-500 overflow-hidden group/btn ${
                      isHovered ? "gap-4" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${problem.colors.gradient} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500`}
                    />
                    <span className={`relative ${problem.colors.icon} text-base`}>View Full Problem Statement</span>
                    <ArrowRight
                      className={`relative w-5 h-5 ${problem.colors.icon} transition-transform duration-500 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.colors.gradient} opacity-5 rounded-bl-full transition-all duration-700 ${
                    isHovered ? "scale-150" : "scale-100"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>

      {selectedProblem !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/50 to-gray-900/60 backdrop-blur-md"
            onClick={() => setSelectedProblem(null)}
          />

          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500 border-t-4 border-l-4 border-orange-500">
            <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-50 to-white border-b-2 border-gray-100 p-8 rounded-t-3xl backdrop-blur-sm">
              <button
                onClick={() => setSelectedProblem(null)}
                className="absolute top-6 right-6 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:rotate-90 hover:scale-110"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex items-start gap-6">
                <div
                  className={`w-20 h-20 ${problems[selectedProblem].colors.light} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${problems[selectedProblem].colors.glow}`}
                >
                  {(() => {
                    const Icon = problems[selectedProblem].icon
                    return <Icon className={`w-10 h-10 ${problems[selectedProblem].colors.icon}`} />
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-black mb-2 text-gray-900 tracking-tight">
                    {problems[selectedProblem].title}
                  </h3>
                  <p className="text-lg text-gray-500 font-semibold uppercase tracking-wide">
                    {problems[selectedProblem].subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-10 text-gray-900">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-3">
                  <span className={`w-2 h-8 ${problems[selectedProblem].colors.top} rounded-full`} />
                  Context
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed pl-5">
                  {problems[selectedProblem].fullProblem.context}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-3">
                  <span className={`w-2 h-8 ${problems[selectedProblem].colors.top} rounded-full`} />
                  Problem to Solve
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed pl-5">
                  {problems[selectedProblem].fullProblem.problemToSolve}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-3">
                  <span className={`w-2 h-8 ${problems[selectedProblem].colors.top} rounded-full`} />
                  Expected Solution Features
                </h4>
                <ul className="space-y-3 pl-5">
                  {problems[selectedProblem].fullProblem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <span
                        className={`w-2 h-2 ${problems[selectedProblem].colors.top} rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                      />
                      <span className="text-lg text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-3">
                  <span className={`w-2 h-8 ${problems[selectedProblem].colors.top} rounded-full`} />
                  Deliverables
                </h4>
                <ul className="space-y-3 pl-5">
                  {problems[selectedProblem].fullProblem.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <span
                        className={`w-2 h-2 ${problems[selectedProblem].colors.top} rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                      />
                      <span className="text-lg text-gray-600 leading-relaxed">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-3">
                  <span className={`w-2 h-8 ${problems[selectedProblem].colors.top} rounded-full`} />
                  Evaluation Focus
                </h4>
                <ul className="space-y-3 pl-5">
                  {problems[selectedProblem].fullProblem.evaluation.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <span
                        className={`w-2 h-2 ${problems[selectedProblem].colors.top} rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                      />
                      <span className="text-lg text-gray-600 leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`p-6 ${problems[selectedProblem].colors.light} ${problems[selectedProblem].colors.border} border-2 rounded-2xl`}
              >
                <p className="text-sm text-gray-600 text-center font-medium leading-relaxed">
                  Problem inspired by Medha AI education, skilling, and leadership intelligence frameworks.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <button
                  onClick={handleRegister}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 group"
                >
                  Proceed to Registration
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
