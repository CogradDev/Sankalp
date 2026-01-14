"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"

interface FormData {
  // Section A
  applicant_name: string
  designation: string
  organization: string
  email: string
  mobile: string
  city: string
  applicant_category: string
  dic_type: string

  // Section B
  project_title: string
  award_category: string
  theme_alignment: string

  // Section C
  problem_statement: string
  solution_description: string
  innovation_uniqueness: string
  impact_description: string

  // Section D
  atmanirbhar_contribution: string
  vision_2047_relevance: string

  // Section E
  project_stage: string
  scalability_plan: string

  // Section F
  team_size: string
  team_roles: string

  // Section G
  proposal_pdf_url: string
  video_url: string

  // Section H
  terms_accepted: boolean
  data_consent: boolean
}

export function AwardApplicationForm({ onClose }: { onClose?: () => void }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<FormData>({
    applicant_name: "",
    designation: "",
    organization: "",
    email: "",
    mobile: "",
    city: "",
    applicant_category: "",
    dic_type: "",
    project_title: "",
    award_category: "",
    theme_alignment: "",
    problem_statement: "",
    solution_description: "",
    innovation_uniqueness: "",
    impact_description: "",
    atmanirbhar_contribution: "",
    vision_2047_relevance: "",
    project_stage: "",
    scalability_plan: "",
    team_size: "",
    team_roles: "",
    proposal_pdf_url: "",
    video_url: "",
    terms_accepted: false,
    data_consent: false,
  })

  const totalSteps = 5 // Grouped into 5 main steps

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

  const countWords = (text: string): number => {
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length
  }

  const validateWordCount = (text: string, min: number, max: number): boolean => {
    const wordCount = countWords(text)
    return wordCount >= min && wordCount <= max
  }

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.applicant_name.trim()) {
      newErrors.applicant_name = "Full name is required"
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required"
    }
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization/Institution is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!validatePhone(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit phone number"
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }
    if (!formData.applicant_category) {
      newErrors.applicant_category = "Applicant category is required"
    }
    if (formData.applicant_category === "DIC" && !formData.dic_type) {
      newErrors.dic_type = "DIC type is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.project_title.trim()) {
      newErrors.project_title = "Project title is required"
    }
    if (!formData.award_category) {
      newErrors.award_category = "Award category is required"
    }
    if (!formData.problem_statement.trim()) {
      newErrors.problem_statement = "Problem statement is required"
    } else if (!validateWordCount(formData.problem_statement, 200, 300)) {
      const wordCount = countWords(formData.problem_statement)
      newErrors.problem_statement = `Problem statement must be between 200-300 words (currently ${wordCount} words)`
    }
    if (!formData.solution_description.trim()) {
      newErrors.solution_description = "Solution description is required"
    } else if (!validateWordCount(formData.solution_description, 200, 300)) {
      const wordCount = countWords(formData.solution_description)
      newErrors.solution_description = `Solution description must be between 200-300 words (currently ${wordCount} words)`
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.innovation_uniqueness.trim()) {
      newErrors.innovation_uniqueness = "Innovation & Uniqueness is required"
    } else if (!validateWordCount(formData.innovation_uniqueness, 200, 300)) {
      const wordCount = countWords(formData.innovation_uniqueness)
      newErrors.innovation_uniqueness = `Innovation & Uniqueness must be between 200-300 words (currently ${wordCount} words)`
    }
    if (!formData.impact_description.trim()) {
      newErrors.impact_description = "Impact description is required"
    } else if (!validateWordCount(formData.impact_description, 200, 300)) {
      const wordCount = countWords(formData.impact_description)
      newErrors.impact_description = `Impact description must be between 200-300 words (currently ${wordCount} words)`
    }
    if (!formData.atmanirbhar_contribution.trim()) {
      newErrors.atmanirbhar_contribution = "Contribution to Aatmanirbhar Bharat is required"
    } else if (!validateWordCount(formData.atmanirbhar_contribution, 150, 200)) {
      const wordCount = countWords(formData.atmanirbhar_contribution)
      newErrors.atmanirbhar_contribution = `Contribution must be between 150-200 words (currently ${wordCount} words)`
    }
    if (!formData.vision_2047_relevance.trim()) {
      newErrors.vision_2047_relevance = "Relevance to India's Vision@2047 is required"
    } else if (!validateWordCount(formData.vision_2047_relevance, 100, 150)) {
      const wordCount = countWords(formData.vision_2047_relevance)
      newErrors.vision_2047_relevance = `Relevance must be between 100-150 words (currently ${wordCount} words)`
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep4 = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.project_stage) {
      newErrors.project_stage = "Project stage is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep5 = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (formData.proposal_pdf_url.trim() && !validateURL(formData.proposal_pdf_url)) {
      newErrors.proposal_pdf_url = "Please enter a valid URL (must start with http:// or https://)"
    }
    if (formData.video_url.trim() && !validateURL(formData.video_url)) {
      newErrors.video_url = "Please enter a valid URL (must start with http:// or https://)"
    }
    if (!formData.terms_accepted) {
      newErrors.terms_accepted = "You must accept the declaration"
    }
    if (!formData.data_consent) {
      newErrors.data_consent = "You must consent to data usage"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    let isValid = false
    
    switch (currentStep) {
      case 1:
        isValid = validateStep1()
        break
      case 2:
        isValid = validateStep2()
        break
      case 3:
        isValid = validateStep3()
        break
      case 4:
        isValid = validateStep4()
        break
      default:
        isValid = true
    }
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      setErrors({}) // Clear errors when moving to next step
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (isSubmitting) return // Prevent double submission
    
    // Validate all steps before submission
    const step1Valid = validateStep1()
    const step2Valid = validateStep2()
    const step3Valid = validateStep3()
    const step4Valid = validateStep4()
    const step5Valid = validateStep5()
    
    if (!step1Valid || !step2Valid || !step3Valid || !step4Valid || !step5Valid) {
      // Scroll to first error or go to step with error
      if (!step1Valid) setCurrentStep(1)
      else if (!step2Valid) setCurrentStep(2)
      else if (!step3Valid) setCurrentStep(3)
      else if (!step4Valid) setCurrentStep(4)
      else if (!step5Valid) setCurrentStep(5)
      return
    }
    
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/award-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          if (onClose) onClose()
        }, 3000)
      } else {
        const data = await response.json()
        setErrors({
          submit: data.error || "Failed to submit application. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      setErrors({
        submit: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
        <p className="text-muted-foreground">
          Thank you for applying. We will review your application and get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Progress Indicator */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold text-lg ${
                step <= currentStep ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-orange-500 rounded-full transition-all"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Applicant Information */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Section A: Applicant Information</h2>

          {errors.submit && (
            <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-sm text-red-700 font-medium">{errors.submit}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="applicant_name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="applicant_name"
                value={formData.applicant_name}
                onChange={(e) => updateFormData("applicant_name", e.target.value)}
                placeholder="Enter your full name"
                className={`h-11 px-4 ${errors.applicant_name ? "border-red-500" : ""}`}
                required
              />
              {errors.applicant_name && <p className="text-xs text-red-600">{errors.applicant_name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="designation" className="text-sm font-medium">
                Designation *
              </Label>
              <Input
                id="designation"
                value={formData.designation}
                onChange={(e) => updateFormData("designation", e.target.value)}
                placeholder="Your designation"
                className={`h-11 px-4 ${errors.designation ? "border-red-500" : ""}`}
                required
              />
              {errors.designation && <p className="text-xs text-red-600">{errors.designation}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="text-sm font-medium">
              Organization/Institution *
            </Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => updateFormData("organization", e.target.value)}
              placeholder="Your organization"
              className={`h-11 px-4 ${errors.organization ? "border-red-500" : ""}`}
              required
            />
            {errors.organization && <p className="text-xs text-red-600">{errors.organization}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your.email@example.com"
                className={`h-11 px-4 ${errors.email ? "border-red-500" : ""}`}
                required
              />
              {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium">
                Mobile Number *
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                  updateFormData("mobile", value)
                }}
                placeholder="10-digit phone number"
                maxLength={10}
                className={`h-11 px-4 ${errors.mobile ? "border-red-500" : ""}`}
                required
              />
              {errors.mobile && <p className="text-xs text-red-600">{errors.mobile}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                City *
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => updateFormData("city", e.target.value)}
                placeholder="Your city"
                className={`h-11 px-4 ${errors.city ? "border-red-500" : ""}`}
                required
              />
              {errors.city && <p className="text-xs text-red-600">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicant_category" className="text-sm font-medium">
                Applicant Category *
              </Label>
              <Select
                value={formData.applicant_category}
                onValueChange={(value) => {
                  updateFormData("applicant_category", value)
                  if (value !== "DIC") {
                    updateFormData("dic_type", "")
                  }
                }}
              >
                <SelectTrigger className={`h-11 ${errors.applicant_category ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Faculty">Faculty</SelectItem>
                  <SelectItem value="Startup">Startup</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Independent">Independent Researcher</SelectItem>
                  <SelectItem value="DIC">DIC</SelectItem>
                </SelectContent>
              </Select>
              {errors.applicant_category && <p className="text-xs text-red-600">{errors.applicant_category}</p>}
            </div>
          </div>

          {formData.applicant_category === "DIC" && (
            <div className="space-y-2">
              <Label htmlFor="dic_type" className="text-sm font-medium">
                DIC Type *
              </Label>
              <Select value={formData.dic_type} onValueChange={(value) => updateFormData("dic_type", value)}>
                <SelectTrigger className={`h-11 ${errors.dic_type ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Select DIC type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hub">Hub</SelectItem>
                  <SelectItem value="Spoke">Spoke</SelectItem>
                </SelectContent>
              </Select>
              {errors.dic_type && <p className="text-xs text-red-600">{errors.dic_type}</p>}
            </div>
          )}
        </div>
      )}

      {/* Step 2: Project Details */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Section B & C: Project Details</h2>

          <div className="space-y-2">
            <Label htmlFor="project_title" className="text-sm font-medium">
              Project Title *
            </Label>
            <Input
              id="project_title"
              value={formData.project_title}
              onChange={(e) => updateFormData("project_title", e.target.value)}
              placeholder="Enter your project title"
              className={`h-11 px-4 ${errors.project_title ? "border-red-500" : ""}`}
              required
            />
            {errors.project_title && <p className="text-xs text-red-600">{errors.project_title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="award_category" className="text-sm font-medium">
              Award Category *
            </Label>
            <Select value={formData.award_category} onValueChange={(value) => updateFormData("award_category", value)}>
              <SelectTrigger className={`h-11 ${errors.award_category ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Select award category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Most Promising Startup">Most Promising Startup</SelectItem>
                <SelectItem value="Most Innovative Prototype">Most Innovative Prototype</SelectItem>
                <SelectItem value="Most Impactful Design">Most Impactful Design</SelectItem>
                <SelectItem value="Technology Transfer Award">Technology Transfer Award</SelectItem>
              </SelectContent>
            </Select>
            {errors.award_category && <p className="text-xs text-red-600">{errors.award_category}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme_alignment" className="text-sm font-medium">
              Theme Alignment
            </Label>
            <Textarea
              id="theme_alignment"
              value={formData.theme_alignment}
              onChange={(e) => updateFormData("theme_alignment", e.target.value)}
              placeholder="How does your project align with SANKALP 2026 themes?"
              className="min-h-[80px] p-4"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem_statement" className="text-sm font-medium">
              Problem Statement * (200-300 words)
            </Label>
            <Textarea
              id="problem_statement"
              value={formData.problem_statement}
              onChange={(e) => updateFormData("problem_statement", e.target.value)}
              placeholder="Describe the problem your project addresses"
              className={`min-h-[120px] p-4 ${errors.problem_statement ? "border-red-500" : ""}`}
              rows={5}
              required
            />
            {errors.problem_statement && <p className="text-xs text-red-600">{errors.problem_statement}</p>}
            {!errors.problem_statement && formData.problem_statement && (
              <p className="text-xs text-gray-500">
                Word count: {countWords(formData.problem_statement)} / 200-300 words
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="solution_description" className="text-sm font-medium">
              Solution Description * (200-300 words)
            </Label>
            <Textarea
              id="solution_description"
              value={formData.solution_description}
              onChange={(e) => updateFormData("solution_description", e.target.value)}
              placeholder="Describe your solution"
              className={`min-h-[120px] p-4 ${errors.solution_description ? "border-red-500" : ""}`}
              rows={5}
              required
            />
            {errors.solution_description && <p className="text-xs text-red-600">{errors.solution_description}</p>}
            {!errors.solution_description && formData.solution_description && (
              <p className="text-xs text-gray-500">
                Word count: {countWords(formData.solution_description)} / 200-300 words
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Innovation & Impact */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Innovation & Impact</h2>

          <div className="space-y-2">
            <Label htmlFor="innovation_uniqueness" className="text-sm font-medium">
              Innovation & Uniqueness * (200-300 words)
            </Label>
            <Textarea
              id="innovation_uniqueness"
              value={formData.innovation_uniqueness}
              onChange={(e) => updateFormData("innovation_uniqueness", e.target.value)}
              placeholder="What makes your solution innovative and unique?"
              className={`min-h-[120px] p-4 ${errors.innovation_uniqueness ? "border-red-500" : ""}`}
              rows={5}
              required
            />
            {errors.innovation_uniqueness && <p className="text-xs text-red-600">{errors.innovation_uniqueness}</p>}
            {!errors.innovation_uniqueness && formData.innovation_uniqueness && (
              <p className="text-xs text-gray-500">
                Word count: {countWords(formData.innovation_uniqueness)} / 200-300 words
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="impact_description" className="text-sm font-medium">
              Impact * (200-300 words)
            </Label>
            <Textarea
              id="impact_description"
              value={formData.impact_description}
              onChange={(e) => updateFormData("impact_description", e.target.value)}
              placeholder="Describe the impact of your project"
              className={`min-h-[120px] p-4 ${errors.impact_description ? "border-red-500" : ""}`}
              rows={5}
              required
            />
            {errors.impact_description && <p className="text-xs text-red-600">{errors.impact_description}</p>}
            {!errors.impact_description && formData.impact_description && (
              <p className="text-xs text-gray-500">
                Word count: {countWords(formData.impact_description)} / 200-300 words
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="atmanirbhar_contribution" className="text-sm font-medium">
              Contribution to Aatmanirbhar Bharat * (150-200 words)
            </Label>
            <Textarea
              id="atmanirbhar_contribution"
              value={formData.atmanirbhar_contribution}
              onChange={(e) => updateFormData("atmanirbhar_contribution", e.target.value)}
              placeholder="How does your project contribute to Aatmanirbhar Bharat?"
              className={`min-h-[100px] p-4 ${errors.atmanirbhar_contribution ? "border-red-500" : ""}`}
              rows={4}
              required
            />
            {errors.atmanirbhar_contribution && <p className="text-xs text-red-600">{errors.atmanirbhar_contribution}</p>}
            {!errors.atmanirbhar_contribution && formData.atmanirbhar_contribution && (
              <p className="text-xs text-gray-500">
                Word count: {countWords(formData.atmanirbhar_contribution)} / 150-200 words
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="vision_2047_relevance" className="text-sm font-medium">
              Relevance to India's Vision@2047 * (100-150 words)
            </Label>
            <Textarea
              id="vision_2047_relevance"
              value={formData.vision_2047_relevance}
              onChange={(e) => updateFormData("vision_2047_relevance", e.target.value)}
              placeholder="How does your project align with Vision@2047?"
              className={`min-h-[100px] p-4 ${errors.vision_2047_relevance ? "border-red-500" : ""}`}
              rows={4}
              required
            />
            {errors.vision_2047_relevance && <p className="text-xs text-red-600">{errors.vision_2047_relevance}</p>}
            {!errors.vision_2047_relevance && formData.vision_2047_relevance && (
              <p className="text-xs text-gray-500">
                Word count: {countWords(formData.vision_2047_relevance)} / 100-150 words
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 4: Implementation & Team */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Implementation Status & Team</h2>

          <div className="space-y-2">
            <Label htmlFor="project_stage" className="text-sm font-medium">
              Project Stage *
            </Label>
            <Select value={formData.project_stage} onValueChange={(value) => updateFormData("project_stage", value)}>
              <SelectTrigger className={`h-11 ${errors.project_stage ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Idea Stage">Idea Stage</SelectItem>
                <SelectItem value="Prototype">Prototype</SelectItem>
                <SelectItem value="Pilot Testing">Pilot Testing</SelectItem>
                <SelectItem value="Commercialized">Commercialized</SelectItem>
              </SelectContent>
            </Select>
            {errors.project_stage && <p className="text-xs text-red-600">{errors.project_stage}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="scalability_plan" className="text-sm font-medium">
              Scalability Plan
            </Label>
            <Textarea
              id="scalability_plan"
              value={formData.scalability_plan}
              onChange={(e) => updateFormData("scalability_plan", e.target.value)}
              placeholder="Describe how your project can be scaled"
              className="min-h-[100px] p-4"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="team_size" className="text-sm font-medium">
              Team Size
            </Label>
            <Input
              id="team_size"
              type="number"
              value={formData.team_size}
              onChange={(e) => updateFormData("team_size", e.target.value)}
              placeholder="Enter number of team members"
              className="h-11 px-4"
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="team_roles" className="text-sm font-medium">
              Team Members & Roles
            </Label>
            <Textarea
              id="team_roles"
              value={formData.team_roles}
              onChange={(e) => updateFormData("team_roles", e.target.value)}
              placeholder="List team members and their roles"
              className="min-h-[100px] p-4"
              rows={4}
            />
          </div>
        </div>
      )}

      {/* Step 5: Documents & Declaration */}
      {currentStep === 5 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Documents & Declaration</h2>

          <div className="space-y-2">
            <Label htmlFor="proposal_pdf_url" className="text-sm font-medium">
              Project Proposal PDF (Google Drive Link)
            </Label>
            <Input
              id="proposal_pdf_url"
              value={formData.proposal_pdf_url}
              onChange={(e) => updateFormData("proposal_pdf_url", e.target.value)}
              placeholder="https://drive.google.com/..."
              className={`h-11 px-4 ${errors.proposal_pdf_url ? "border-red-500" : ""}`}
            />
            {errors.proposal_pdf_url && <p className="text-xs text-red-600">{errors.proposal_pdf_url}</p>}
            <p className="text-xs text-muted-foreground mt-2">
              Upload your PDF to Google Drive and paste the public link here
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="video_url" className="text-sm font-medium">
              Video Link (YouTube/Drive)
            </Label>
            <Input
              id="video_url"
              value={formData.video_url}
              onChange={(e) => updateFormData("video_url", e.target.value)}
              placeholder="https://youtube.com/... or https://drive.google.com/..."
              className={`h-11 px-4 ${errors.video_url ? "border-red-500" : ""}`}
            />
            {errors.video_url && <p className="text-xs text-red-600">{errors.video_url}</p>}
          </div>

          <div className="border rounded-lg p-6 space-y-4 bg-gray-50 mt-8">
            <h3 className="font-semibold text-lg mb-4">Declaration</h3>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms_accepted"
                checked={formData.terms_accepted}
                onCheckedChange={(checked) => updateFormData("terms_accepted", checked === true)}
                className={`mt-1 ${errors.terms_accepted ? "border-red-500" : ""}`}
              />
              <div className="flex-1">
                <Label htmlFor="terms_accepted" className="text-sm leading-relaxed cursor-pointer">
                  I hereby declare that the information provided is true and accurate to the best of my knowledge.
                </Label>
                {errors.terms_accepted && <p className="text-xs text-red-600 mt-1">{errors.terms_accepted}</p>}
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="data_consent"
                checked={formData.data_consent}
                onCheckedChange={(checked) => updateFormData("data_consent", checked === true)}
                className={`mt-1 ${errors.data_consent ? "border-red-500" : ""}`}
              />
              <div className="flex-1">
                <Label htmlFor="data_consent" className="text-sm leading-relaxed cursor-pointer">
                  I consent to the use of my data for evaluation purposes and agree to the terms and conditions.
                </Label>
                {errors.data_consent && <p className="text-xs text-red-600 mt-1">{errors.data_consent}</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-10 pt-8 border-t">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="h-11 px-6 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {currentStep < totalSteps ? (
          <Button onClick={handleNext} className="h-11 px-6">
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.terms_accepted || !formData.data_consent}
            className="h-11 px-6"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        )}
      </div>
    </div>
  )
}
