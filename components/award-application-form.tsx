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

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
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
        alert("Failed to submit application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("An error occurred. Please try again.")
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
                className="h-11 px-4"
                required
              />
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
                className="h-11 px-4"
                required
              />
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
              className="h-11 px-4"
              required
            />
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
                className="h-11 px-4"
                required
              />
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
                placeholder="+91 XXXXXXXXXX"
                maxLength={10}
                className="h-11 px-4"
                required
              />
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
                className="h-11 px-4"
                required
              />
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
                <SelectTrigger className="h-11">
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
            </div>
          </div>

          {formData.applicant_category === "DIC" && (
            <div className="space-y-2">
              <Label htmlFor="dic_type" className="text-sm font-medium">
                DIC Type *
              </Label>
              <Select value={formData.dic_type} onValueChange={(value) => updateFormData("dic_type", value)}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select DIC type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hub">Hub</SelectItem>
                  <SelectItem value="Spoke">Spoke</SelectItem>
                </SelectContent>
              </Select>
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
              className="h-11 px-4"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="award_category" className="text-sm font-medium">
              Award Category *
            </Label>
            <Select value={formData.award_category} onValueChange={(value) => updateFormData("award_category", value)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select award category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Most Promising Startup">Most Promising Startup</SelectItem>
                <SelectItem value="Most Innovative Prototype">Most Innovative Prototype</SelectItem>
                <SelectItem value="Most Impactful Design">Most Impactful Design</SelectItem>
                <SelectItem value="Technology Transfer Award">Technology Transfer Award</SelectItem>
              </SelectContent>
            </Select>
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
              className="min-h-[120px] p-4"
              rows={5}
              required
            />
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
              className="min-h-[120px] p-4"
              rows={5}
              required
            />
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
              className="min-h-[120px] p-4"
              rows={5}
              required
            />
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
              className="min-h-[120px] p-4"
              rows={5}
              required
            />
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
              className="min-h-[100px] p-4"
              rows={4}
              required
            />
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
              className="min-h-[100px] p-4"
              rows={4}
              required
            />
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
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Idea Stage">Idea Stage</SelectItem>
                <SelectItem value="Prototype">Prototype</SelectItem>
                <SelectItem value="Pilot Testing">Pilot Testing</SelectItem>
                <SelectItem value="Commercialized">Commercialized</SelectItem>
              </SelectContent>
            </Select>
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
              className="h-11 px-4"
            />
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
              className="h-11 px-4"
            />
          </div>

          <div className="border rounded-lg p-6 space-y-4 bg-gray-50 mt-8">
            <h3 className="font-semibold text-lg mb-4">Declaration</h3>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms_accepted"
                checked={formData.terms_accepted}
                onCheckedChange={(checked) => updateFormData("terms_accepted", checked === true)}
                className="mt-1"
              />
              <Label htmlFor="terms_accepted" className="text-sm leading-relaxed cursor-pointer">
                I hereby declare that the information provided is true and accurate to the best of my knowledge.
              </Label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="data_consent"
                checked={formData.data_consent}
                onCheckedChange={(checked) => updateFormData("data_consent", checked === true)}
                className="mt-1"
              />
              <Label htmlFor="data_consent" className="text-sm leading-relaxed cursor-pointer">
                I consent to the use of my data for evaluation purposes and agree to the terms and conditions.
              </Label>
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
