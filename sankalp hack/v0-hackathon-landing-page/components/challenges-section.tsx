"use client"

import { BookOpen, Briefcase, Brain, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const challenges = [
  {
    icon: BookOpen,
    title: "AI for Education",
    subtitle: "Smart Pedagogy Systems",
    description:
      "Transform classroom learning with AI-powered teaching assistants that align with NCF 2023 and NEP 2020 to create personalized, competency-based education experiences.",
    tags: ["Lesson Planning", "Personalized Learning", "Competency Based Education"],
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    iconBg: "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
    accentColor: "orange",
  },
  {
    icon: Briefcase,
    title: "AI for Skilling",
    subtitle: "Career Pathway & Credit Mapping",
    description:
      "Build intelligent career guidance systems that map learning to credit frameworks, recommend skill pathways, and track employability readiness for India's future workforce.",
    tags: ["Credit Framework", "Career Guidance", "Skill Analytics"],
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
    accentColor: "blue",
  },
  {
    icon: Brain,
    title: "AI for Leadership",
    subtitle: "Decision Support Systems",
    description:
      "Develop AI-powered crisis simulation tools that help leaders analyze complex scenarios, evaluate strategies, and make ethical, data-driven decisions in real-time.",
    tags: ["Crisis Simulation", "Decision Frameworks", "Policy Intelligence"],
    gradient: "from-violet-500/10 via-violet-500/5 to-transparent",
    iconBg: "bg-gradient-to-br from-violet-500/20 to-violet-600/10",
    accentColor: "violet",
  },
]

export function ChallengesSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const scrollToProblemStatements = () => {
    const element = document.getElementById("problem-statements")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="challenges" className="relative py-24 px-4 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hackathon <span className="text-primary">Challenge Tracks</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose a track and build AI solutions that can transform India's education and workforce ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                } ${isHovered ? "scale-[1.02] shadow-2xl shadow-primary/10" : "hover:shadow-xl hover:shadow-primary/5"}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative mb-8">
                  <div
                    className={`w-16 h-16 ${challenge.iconBg} rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <Icon className={`w-8 h-8 text-${challenge.accentColor}-500 transition-transform duration-500`} />
                  </div>
                </div>

                <div className="relative mb-6">
                  <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-medium">{challenge.subtitle}</p>
                </div>

                <p className="relative text-sm text-muted-foreground/90 leading-relaxed mb-8">
                  {challenge.description}
                </p>

                <div className="relative flex flex-wrap gap-2">
                  {challenge.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-background/50 backdrop-blur-sm text-foreground/70 rounded-lg border border-border/30 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${challenge.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`}
                />
              </div>
            )
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-muted-foreground mb-6">
            Ready to dive deeper? View the complete problem statements for each track
          </p>
          <button
            onClick={scrollToProblemStatements}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            View Problem Statements
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
