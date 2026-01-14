"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowRight, ArrowLeft, Check, Plus, Trash2, CheckCircle2, Download, Users } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  college: string
  role: string
}

interface RegistrationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RegistrationModal({ open, onOpenChange }: RegistrationModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  // Validation helper functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone.replace(/\D/g, ""))
  }

  const validateURL = (url: string): boolean => {
    if (!url.trim()) return true // Optional field
    const urlRegex = /^https?:\/\/.+/
    return urlRegex.test(url)
  }

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
    if (!leaderEmail.trim()) {
      newErrors.leaderEmail = "Leader email is required"
    } else if (!validateEmail(leaderEmail)) {
      newErrors.leaderEmail = "Please enter a valid email address"
    }
    if (!leaderPhone.trim()) {
      newErrors.leaderPhone = "Phone number is required"
    } else if (!validatePhone(leaderPhone)) {
      newErrors.leaderPhone = "Please enter a valid 10-digit phone number"
    }
    if (!collegeName.trim()) newErrors.collegeName = "College name is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    const teamSizeNum = Number.parseInt(teamSize)
    
    if (teamSizeNum > 1) {
      const expectedMembers = teamSizeNum - 1
      if (teamMembers.length !== expectedMembers) {
        newErrors.teamMembers = `Please add ${expectedMembers} team member${expectedMembers > 1 ? "s" : ""}`
      } else {
        teamMembers.forEach((member, index) => {
          if (!member.name.trim()) {
            newErrors[`member_${member.id}_name`] = "Name is required"
          }
          if (!member.email.trim()) {
            newErrors[`member_${member.id}_email`] = "Email is required"
          } else if (!validateEmail(member.email)) {
            newErrors[`member_${member.id}_email`] = "Please enter a valid email address"
          }
          if (!member.college.trim()) {
            newErrors[`member_${member.id}_college`] = "College/Organization is required"
          }
          if (!member.role.trim()) {
            newErrors[`member_${member.id}_role`] = "Role is required"
          }
        })
      }
    }
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
    if (portfolioLink.trim() && !validateURL(portfolioLink)) {
      newErrors.portfolioLink = "Please enter a valid URL (must start with http:// or https://)"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (isSubmitting) return // Prevent double submission
    
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
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

  const handleSubmit = async () => {
    if (isSubmitting) return // Prevent double submission
    
    setIsSubmitting(true)
    setErrors({}) // Clear previous errors
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""
      if (!apiUrl) {
        throw new Error("API URL not configured")
      }

      // Prepare team members data (remove id field)
      const teamMembersData = teamMembers.map(({ id, ...member }) => member)

      const payload = {
        teamName,
        teamSize,
        leaderName,
        leaderEmail,
        leaderPhone: leaderPhone.replace(/\D/g, ""), // Ensure only digits
        collegeName,
        teamMembers: teamMembersData,
        selectedChallenge,
        problemUnderstanding,
        solutionIdea,
        techStack,
        priorExperience,
        portfolioLink: portfolioLink || undefined,
      }

      const response = await fetch(`${apiUrl}/api/hackathon/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit registration")
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error("Registration error:", err)
      setErrors({
        submit: err instanceof Error ? err.message : "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    // Reset form state
    setCurrentStep(1)
    setIsSubmitted(false)
    setIsSubmitting(false)
    setTeamName("")
    setTeamSize("")
    setLeaderName("")
    setLeaderEmail("")
    setLeaderPhone("")
    setCollegeName("")
    setTeamMembers([])
    setSelectedChallenge("")
    setProblemUnderstanding("")
    setSolutionIdea("")
    setTechStack("")
    setPriorExperience("")
    setPortfolioLink("")
    setErrors({})
    onOpenChange(false)
  }

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <div className="text-center py-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center animate-[scaleIn_0.5s_ease-out]">
              <CheckCircle2 className="w-12 h-12 text-orange-600" />
            </div>

            <h2 className="text-4xl font-black mb-4 text-gray-900">Registration Successful!</h2>

            <p className="text-lg text-gray-600 mb-8">
              You will receive confirmation and next steps by email within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
                onClick={() => {
                  handleClose()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Problem Statements
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-900 bg-transparent"
                onClick={() => window.open("https://discord.gg/sankalp2026", "_blank")}
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-3xl font-black text-center mb-2 text-gray-900">
            Register for <span className="text-orange-600">SANKALP 2026</span>
          </DialogTitle>
          <p className="text-center text-gray-600">
            Secure your spot. Limited teams. Shortlisting based on submissions.
          </p>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                      currentStep >= step
                        ? "bg-orange-600 text-white scale-110 shadow-lg shadow-orange-500/30"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {currentStep > step ? <Check className="w-5 h-5" /> : step}
                  </div>
                  <span className="text-xs mt-2 text-center whitespace-nowrap text-gray-700 font-medium">
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

        {/* Error Message */}
        {errors.submit && (
          <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <p className="text-sm text-red-700 font-medium">{errors.submit}</p>
          </div>
        )}

        {/* Form Steps */}
        <div className="space-y-6">
          {/* Step 1 - Team Details */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-2xl font-bold text-gray-900">Team Details</h3>

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
                      className={`!bg-white !text-gray-900 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${errors.teamSize ? "border-red-600" : "border-gray-300"}`}
                    >
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent className="z-50">
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
                      placeholder="10-digit phone number"
                      value={leaderPhone}
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "").slice(0, 10)
                        setLeaderPhone(numericValue)
                      }}
                      maxLength={10}
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
            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Team Members</h3>
                {Number.parseInt(teamSize) > 1 && teamMembers.length < Number.parseInt(teamSize) - 1 && (
                  <Button onClick={addMember} variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Member
                  </Button>
                )}
              </div>

              {errors.teamMembers && (
                <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 font-medium">{errors.teamMembers}</p>
                </div>
              )}
              {Number.parseInt(teamSize) === 1 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">You selected solo participation. No additional members needed.</p>
                </div>
              ) : teamMembers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">Add team members to continue</p>
                  <Button onClick={addMember} className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add First Member
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={member.id} className="p-4 rounded-xl border-2 border-gray-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">Member {index + 1}</h4>
                        <Button
                          onClick={() => removeMember(member.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Input
                            placeholder="Full Name"
                            value={member.name}
                            onChange={(e) => updateMember(member.id, "name", e.target.value)}
                            className={`!bg-white !text-gray-900 border-2 ${errors[`member_${member.id}_name`] ? "border-red-600" : "border-gray-300"}`}
                          />
                          {errors[`member_${member.id}_name`] && (
                            <p className="text-xs text-red-600">{errors[`member_${member.id}_name`]}</p>
                          )}
                        </div>
                        <div className="space-y-1">
                          <Input
                            type="email"
                            placeholder="Email"
                            value={member.email}
                            onChange={(e) => updateMember(member.id, "email", e.target.value)}
                            className={`!bg-white !text-gray-900 border-2 ${errors[`member_${member.id}_email`] ? "border-red-600" : "border-gray-300"}`}
                          />
                          {errors[`member_${member.id}_email`] && (
                            <p className="text-xs text-red-600">{errors[`member_${member.id}_email`]}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Input
                            placeholder="College / Organization"
                            value={member.college}
                            onChange={(e) => updateMember(member.id, "college", e.target.value)}
                            className={`!bg-white !text-gray-900 border-2 ${errors[`member_${member.id}_college`] ? "border-red-600" : "border-gray-300"}`}
                          />
                          {errors[`member_${member.id}_college`] && (
                            <p className="text-xs text-red-600">{errors[`member_${member.id}_college`]}</p>
                          )}
                        </div>
                        <div className="space-y-1">
                        <Select value={member.role} onValueChange={(value) => updateMember(member.id, "role", value)}>
                          <SelectTrigger className={`!bg-white !text-gray-900 border-2 ${errors[`member_${member.id}_role`] ? "border-red-600" : "border-gray-300"}`}>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                            <SelectContent className="z-50">
                              <SelectItem value="developer">Developer</SelectItem>
                              <SelectItem value="ai">AI/ML</SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="domain">Domain Expert</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors[`member_${member.id}_role`] && (
                            <p className="text-xs text-red-600">{errors[`member_${member.id}_role`]}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3 - Challenge Selection */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-2xl font-bold text-gray-900">Challenge Selection</h3>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Select Challenge Track <span className="text-red-600">*</span>
                  </Label>
                  <div className="grid gap-4">
                    {challenges.map((challenge) => (
                      <button
                        key={challenge.id}
                        onClick={() => setSelectedChallenge(challenge.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          selectedChallenge === challenge.id
                            ? "border-orange-500 bg-orange-50 shadow-lg scale-[1.02]"
                            : "border-gray-300 hover:border-orange-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                              selectedChallenge === challenge.id ? "border-orange-500 bg-orange-500" : "border-gray-300"
                            }`}
                          >
                            {selectedChallenge === challenge.id && <Check className="w-4 h-4 text-white" />}
                          </div>
                          <span className="font-semibold text-gray-900">{challenge.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.selectedChallenge && <p className="text-xs text-red-600">{errors.selectedChallenge}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 4 - Submit Details */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
              <h3 className="text-2xl font-bold text-gray-900">Submission Details</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="problemUnderstanding" className="text-sm font-medium text-gray-700">
                    Problem Understanding <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="problemUnderstanding"
                    placeholder="Describe your understanding of the problem..."
                    value={problemUnderstanding}
                    onChange={(e) => setProblemUnderstanding(e.target.value)}
                    rows={4}
                    className={`!bg-white !text-gray-900 border-2 ${errors.problemUnderstanding ? "border-red-600" : "border-gray-300"}`}
                  />
                  {errors.problemUnderstanding && <p className="text-xs text-red-600">{errors.problemUnderstanding}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solutionIdea" className="text-sm font-medium text-gray-700">
                    Proposed Solution <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="solutionIdea"
                    placeholder="Describe your solution approach..."
                    value={solutionIdea}
                    onChange={(e) => setSolutionIdea(e.target.value)}
                    rows={4}
                    className={`!bg-white !text-gray-900 border-2 ${errors.solutionIdea ? "border-red-600" : "border-gray-300"}`}
                  />
                  {errors.solutionIdea && <p className="text-xs text-red-600">{errors.solutionIdea}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="techStack" className="text-sm font-medium text-gray-700">
                    Tech Stack <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="techStack"
                    placeholder="e.g., Python, TensorFlow, React, MongoDB"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className={`!bg-white !text-gray-900 border-2 ${errors.techStack ? "border-red-600" : "border-gray-300"}`}
                  />
                  {errors.techStack && <p className="text-xs text-red-600">{errors.techStack}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priorExperience" className="text-sm font-medium text-gray-700">
                    AI/ML Experience Level <span className="text-red-600">*</span>
                  </Label>
                  <Select value={priorExperience} onValueChange={setPriorExperience}>
                    <SelectTrigger
                      className={`!bg-white !text-gray-900 border-2 ${errors.priorExperience ? "border-red-600" : "border-gray-300"}`}
                    >
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent className="z-50">
                      <SelectItem value="beginner">Beginner (Learning)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some Projects)</SelectItem>
                      <SelectItem value="advanced">Advanced (Multiple Projects)</SelectItem>
                      <SelectItem value="expert">Expert (Professional/Research)</SelectItem>
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
                    placeholder="https://github.com/yourprofile or portfolio link"
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    className={`!bg-white !text-gray-900 border-2 ${errors.portfolioLink ? "border-red-600" : "border-gray-300"}`}
                  />
                  {errors.portfolioLink && <p className="text-xs text-red-600">{errors.portfolioLink}</p>}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6 border-t">
          {currentStep > 1 && (
            <Button onClick={handleBack} variant="outline" className="flex-1 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          <Button 
            onClick={handleNext} 
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : currentStep === 4 ? "Submit Registration" : "Next"}
            {currentStep < 4 && !isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
