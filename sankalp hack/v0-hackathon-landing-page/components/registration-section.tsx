"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, Check, Plus, Trash2, CheckCircle2, Download, Users } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  college: string
  role: string
}

export function RegistrationSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Step 1 - Team Details
  const [teamName, setTeamName] = useState("")
  const [teamSize, setTeamSize] = useState<string>("")
  const [leaderName, setLeaderName] = useState("")
  const [leaderEmail, setLeaderEmail] = useState("")
  const [leaderPhone, setLeaderPhone] = useState("")
  const [collegeName, setCollegeName] = useState("")

  // Step 2 - Team Members
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  // Step 3 - Challenge Selection
  const [selectedChallenge, setSelectedChallenge] = useState<string>("")
  const [problemUnderstanding, setProblemUnderstanding] = useState("")
  const [solutionIdea, setSolutionIdea] = useState("")
  const [techStack, setTechStack] = useState("")
  const [priorExperience, setPriorExperience] = useState<string>("")
  const [portfolioLink, setPortfolioLink] = useState("")

  const [errors, setErrors] = useState<Record<string, string>>({})

  const challenges = [
    { id: "education", name: "AI for Education — Smart Pedagogy Systems", color: "orange" },
    { id: "skilling", name: "AI for Skilling — Career Pathway & Credit Mapping", color: "blue" },
    { id: "leadership", name: "AI for Leadership — Decision Support Systems", color: "purple" },
  ]

  const addMember = () => {
    if (teamMembers.length < Number.parseInt(teamSize) - 1) {
      setTeamMembers([...teamMembers, { id: Date.now().toString(), name: "", email: "", college: "", role: "" }])
    }
  }

  const removeMember = (id: string) => {
    setTeamMembers(teamMembers.filter((m) => m.id !== id))
  }

  const updateMember = (id: string, field: keyof TeamMember, value: string) => {
    setTeamMembers(teamMembers.map((m) => (m.id === id ? { ...m, [field]: value } : m)))
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!teamName.trim()) newErrors.teamName = "Team name is required"
    if (!teamSize) newErrors.teamSize = "Team size is required"
    if (!leaderName.trim()) newErrors.leaderName = "Leader name is required"
    if (!leaderEmail.trim()) newErrors.leaderEmail = "Leader email is required"
    if (!leaderPhone.trim()) newErrors.leaderPhone = "Phone number is required"
    if (!collegeName.trim()) newErrors.collegeName = "College name is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {}
    if (!selectedChallenge) newErrors.selectedChallenge = "Please select a challenge"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {}
    if (!problemUnderstanding.trim()) newErrors.problemUnderstanding = "Problem understanding is required"
    if (!solutionIdea.trim()) newErrors.solutionIdea = "Solution idea is required"
    if (!techStack.trim()) newErrors.techStack = "Tech stack is required"
    if (!priorExperience) newErrors.priorExperience = "Please select prior experience"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    } else if (currentStep === 3 && validateStep3()) {
      setCurrentStep(4)
    } else if (currentStep === 4 && validateStep4()) {
      handleSubmit()
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    setErrors({})
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section
        id="registration"
        className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-green-600/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 border-t-4 border-gradient-to-r border-orange-500 via-white to-green-600 shadow-xl scale-in">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-orange-600" />
              </div>

              <h2 className="text-4xl font-black mb-4 text-gray-900">🎉 Registration Successful!</h2>

              <p className="text-lg text-gray-600 mb-8">
                You will receive confirmation and next steps by email within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white hover-lift"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Problem Statements
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover-lift bg-white border-2 border-gray-300 text-gray-900"
                  onClick={() => window.open("https://discord.gg/sankalp2026", "_blank")}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="relative py-20 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              Register for{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                SANKALP 2026
              </span>
            </h2>
            <p className="text-lg text-gray-600">Secure your spot. Limited teams. Shortlisting based on submissions.</p>
          </div>

          <div className="mb-12 fade-in-up delay-200">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                        currentStep >= step
                          ? "bg-orange-600 text-white scale-110 shadow-lg shadow-orange-500/30"
                          : "bg-[#1e293b] text-gray-300"
                      }`}
                    >
                      {currentStep > step ? <Check className="w-6 h-6" /> : step}
                    </div>
                    <span className="text-xs mt-2 text-center whitespace-nowrap text-gray-700">
                      {step === 1 ? "Team Details" : step === 2 ? "Members" : step === 3 ? "Challenge" : "Submit"}
                    </span>
                  </div>
                  {step < 4 && (
                    <div className="flex-1 h-1 mx-2">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          currentStep > step ? "bg-orange-600" : "bg-gray-300"
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg scale-in">
            {/* Step 1 - Team Details */}
            {currentStep === 1 && (
              <div className="space-y-6 fade-in-up">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Team Details</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teamName" className="text-sm font-medium text-gray-700">
                      Team Name <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="teamName"
                      placeholder="Enter your team name"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className={`!bg-white !text-gray-900 placeholder:text-gray-400 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.teamName ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.teamName && <p className="text-xs text-red-600">{errors.teamName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize" className="text-sm font-medium text-gray-700">
                      Team Size <span className="text-red-600">*</span>
                    </Label>
                    <Select value={teamSize} onValueChange={setTeamSize}>
                      <SelectTrigger
                        className={`!bg-white border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.teamSize ? "border-red-600" : "border-gray-300"}`}
                      >
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Member (Solo)</SelectItem>
                        <SelectItem value="2">2 Members</SelectItem>
                        <SelectItem value="3">3 Members</SelectItem>
                        <SelectItem value="4">4 Members</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.teamSize && <p className="text-xs text-red-600">{errors.teamSize}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="leaderName" className="text-sm font-medium text-gray-700">
                        Team Leader Name <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="leaderName"
                        placeholder="Full name"
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                        className={`!bg-white !text-gray-900 placeholder:text-gray-400 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.leaderName ? "border-red-600" : "border-gray-300"}`}
                      />
                      {errors.leaderName && <p className="text-xs text-red-600">{errors.leaderName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="leaderEmail" className="text-sm font-medium text-gray-700">
                        Team Leader Email <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="leaderEmail"
                        type="email"
                        placeholder="email@example.com"
                        value={leaderEmail}
                        onChange={(e) => setLeaderEmail(e.target.value)}
                        className={`!bg-white !text-gray-900 placeholder:text-gray-400 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.leaderEmail ? "border-red-600" : "border-gray-300"}`}
                      />
                      {errors.leaderEmail && <p className="text-xs text-red-600">{errors.leaderEmail}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="leaderPhone" className="text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="leaderPhone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={leaderPhone}
                        onChange={(e) => setLeaderPhone(e.target.value)}
                        className={`!bg-white !text-gray-900 placeholder:text-gray-400 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.leaderPhone ? "border-red-600" : "border-gray-300"}`}
                      />
                      {errors.leaderPhone && <p className="text-xs text-red-600">{errors.leaderPhone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="collegeName" className="text-sm font-medium text-gray-700">
                        College / Organization <span className="text-red-600">*</span>
                      </Label>
                      <Input
                        id="collegeName"
                        placeholder="Your institution name"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        className={`!bg-white !text-gray-900 placeholder:text-gray-400 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.collegeName ? "border-red-600" : "border-gray-300"}`}
                      />
                      {errors.collegeName && <p className="text-xs text-red-600">{errors.collegeName}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 - Team Members */}
            {currentStep === 2 && (
              <div className="space-y-6 fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Team Members</h3>
                  {Number.parseInt(teamSize) > 1 && teamMembers.length < Number.parseInt(teamSize) - 1 && (
                    <Button onClick={addMember} variant="outline" size="sm" className="hover-lift bg-transparent">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Member
                    </Button>
                  )}
                </div>

                {Number.parseInt(teamSize) === 1 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      You selected solo participation. No additional members needed.
                    </p>
                  </div>
                ) : teamMembers.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">Add team members to continue</p>
                    <Button onClick={addMember} className="bg-primary hover:bg-primary/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Add First Member
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div
                        key={member.id}
                        className="glass-card p-4 rounded-xl border border-border/50 space-y-4 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Member {index + 1}</h4>
                          <Button
                            onClick={() => removeMember(member.id)}
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            placeholder="Full Name"
                            value={member.name}
                            onChange={(e) => updateMember(member.id, "name", e.target.value)}
                            className="glass-card"
                          />
                          <Input
                            type="email"
                            placeholder="Email"
                            value={member.email}
                            onChange={(e) => updateMember(member.id, "email", e.target.value)}
                            className="glass-card"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            placeholder="College / Organization"
                            value={member.college}
                            onChange={(e) => updateMember(member.id, "college", e.target.value)}
                            className="glass-card"
                          />
                          <Select value={member.role} onValueChange={(value) => updateMember(member.id, "role", value)}>
                            <SelectTrigger className="glass-card">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="developer">Developer</SelectItem>
                              <SelectItem value="ai">AI/ML</SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="domain">Domain Expert</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 3 - Challenge Selection */}
            {currentStep === 3 && (
              <div className="space-y-6 fade-in-up">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Challenge Selection</h3>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Select Challenge Track <span className="text-red-600">*</span>
                    </Label>
                    <div className="grid gap-4">
                      {challenges.map((challenge) => (
                        <button
                          key={challenge.id}
                          onClick={() => setSelectedChallenge(challenge.id)}
                          className={`glass-card p-4 rounded-xl text-left transition-all duration-300 hover:scale-105 ${
                            selectedChallenge === challenge.id
                              ? `border-2 ${
                                  challenge.color === "orange"
                                    ? "border-primary glow-orange"
                                    : challenge.color === "blue"
                                      ? "border-secondary glow-blue"
                                      : "border-purple-500"
                                }`
                              : "border border-border/50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{challenge.name}</span>
                            {selectedChallenge === challenge.id && <Check className="w-5 h-5 text-primary" />}
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.selectedChallenge && <p className="text-xs text-red-600">{errors.selectedChallenge}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6 fade-in-up">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Your Solution Idea</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="problemUnderstanding" className="text-sm font-medium text-gray-700">
                      Problem Understanding <span className="text-red-600">*</span>
                    </Label>
                    <Textarea
                      id="problemUnderstanding"
                      placeholder="Describe your understanding of the problem you're solving..."
                      value={problemUnderstanding}
                      onChange={(e) => setProblemUnderstanding(e.target.value)}
                      rows={4}
                      className={`glass-card ${errors.problemUnderstanding ? "border-red-600" : ""}`}
                    />
                    {errors.problemUnderstanding && (
                      <p className="text-xs text-red-600">{errors.problemUnderstanding}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solutionIdea" className="text-sm font-medium text-gray-700">
                      Proposed Solution <span className="text-red-600">*</span>
                    </Label>
                    <Textarea
                      id="solutionIdea"
                      placeholder="Describe your solution approach and how it addresses the problem..."
                      value={solutionIdea}
                      onChange={(e) => setSolutionIdea(e.target.value)}
                      rows={5}
                      className={`glass-card ${errors.solutionIdea ? "border-red-600" : ""}`}
                    />
                    {errors.solutionIdea && <p className="text-xs text-red-600">{errors.solutionIdea}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="techStack" className="text-sm font-medium text-gray-700">
                      Tech Stack <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="techStack"
                      placeholder="e.g., Python, TensorFlow, React, Node.js..."
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      className={`glass-card ${errors.techStack ? "border-red-600" : ""}`}
                    />
                    {errors.techStack && <p className="text-xs text-red-600">{errors.techStack}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priorExperience" className="text-sm font-medium text-gray-700">
                      Prior AI/ML Experience <span className="text-red-600">*</span>
                    </Label>
                    <Select value={priorExperience} onValueChange={setPriorExperience}>
                      <SelectTrigger className={`glass-card ${errors.priorExperience ? "border-red-600" : ""}`}>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (Learning)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-2 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                        <SelectItem value="expert">Expert (Professional)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.priorExperience && <p className="text-xs text-red-600">{errors.priorExperience}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolioLink" className="text-sm font-medium text-gray-700">
                      Portfolio / GitHub Link (Optional)
                    </Label>
                    <Input
                      id="portfolioLink"
                      type="url"
                      placeholder="https://github.com/yourprofile or portfolio link"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      className="glass-card"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 border-2 border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button onClick={handleNext} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                {currentStep === 4 ? "Submit" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
