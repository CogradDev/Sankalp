"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, User, Mail, Phone, Building2, GraduationCap, CheckCircle2, Loader2, AlertCircle } from "lucide-react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    category: "student",
    event_participation_type: "main_event",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string>("")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to register")
      }

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          designation: "",
          category: "student",
          event_participation_type: "main_event",
        })
        onClose()
      }, 3000)
    } catch (err: any) {
      setIsSubmitting(false)
      setError(err.message || "Something went wrong. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl animate-scale-in border-t-4 border-t-orange-500">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="p-6 sm:p-8 md:p-10">
          {isSuccess ? (
            <div className="text-center py-12 animate-fade-in-scale">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                <CheckCircle2 className="text-green-600" size={48} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-2">Thank you for registering for SANKALP 2026</p>
              <p className="text-sm text-gray-500">You will receive a confirmation email shortly.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-orange-100 via-white to-green-100 rounded-full border border-orange-200">
                  <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 via-slate-700 to-green-600 bg-clip-text text-transparent">
                    Register Now
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Join SANKALP 2026</h2>
                <p className="text-sm sm:text-base text-gray-600">Fill in your details to register for the summit</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline mr-2" size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline mr-2" size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline mr-2" size={16} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, "").slice(0, 10)
                      setFormData({
                        ...formData,
                        phone: numericValue,
                      })
                    }}
                    required
                    maxLength={10}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building2 className="inline mr-2" size={16} />
                    Organization/Institution *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900"
                    placeholder="Your institution or company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <GraduationCap className="inline mr-2" size={16} />
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900 bg-white"
                  >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty/Professor</option>
                    <option value="researcher">Researcher</option>
                    <option value="industry">Industry Professional</option>
                    <option value="government">Government Official</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Participation Type *</label>
                  <select
                    name="event_participation_type"
                    value={formData.event_participation_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900 bg-white"
                  >
                    <option value="main_event">Main Event (Sankalp 2026 National Summit)</option>
                    <option value="pre_event">Pre-Event Programs (Workshops, FDP, Hackathon)</option>
                    <option value="both">Both (Main Event + Pre-Event Programs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none text-gray-900"
                    placeholder="Your current designation"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 py-6 text-base font-semibold bg-transparent"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 py-6 text-base font-bold bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 hover:shadow-lg transition-all border-2 border-orange-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Submitting...
                      </>
                    ) : (
                      "Complete Registration"
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </Card>
    </div>
  )
}
