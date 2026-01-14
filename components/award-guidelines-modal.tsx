"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trophy, Users, Target, Lightbulb, FileCheck, Award, Shield, AlertCircle, Mail, Globe } from "lucide-react"

interface AwardGuidelinesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AwardGuidelinesModal({ open, onOpenChange }: AwardGuidelinesModalProps) {
  const sections = [
    {
      icon: Trophy,
      title: "1. About SANKALP 2026",
      content:
        "SANKALP 2026 is a National Summit organized at MNNIT Allahabad, Prayagraj, aligned with Vision@2047 and the Aatmanirbhar Bharat mission. The awards aim to recognize innovative ideas, indigenous solutions, entrepreneurial initiatives, and impactful projects that contribute to India's future-ready ecosystem.",
    },
    {
      icon: Users,
      title: "2. Eligibility Criteria",
      content: "Applications are invited from:",
      list: [
        "Students (UG / PG / PhD)",
        "Faculty members and researchers",
        "Startups and entrepreneurs",
        "Industry professionals",
        "Institutions and organizations",
        "Applicants may apply individually or as a team",
      ],
    },
    {
      icon: Award,
      title: "3. Award Categories",
      content: "Applicants must choose one primary award category:",
      list: [
        "Most Promising Startup",
        "Most Innovative Prototype",
        "Most Impactful Design",
        "Technology Transfer Award",
      ],
    },
    {
      icon: Target,
      title: "4. Theme Alignment",
      content:
        "The proposed project/innovation should align with one or more of the following SANKALP 2026 focus areas:",
      list: [
        "Skilling & Workforce Development",
        "Artificial Intelligence & Emerging Technologies",
        "Sustainability & Green Technologies",
        "Healthcare, Biotechnology & Life Sciences",
        "Smart Manufacturing & Infrastructure",
        "Rural Development & Social Innovation",
        "Semiconductors & Advanced Electronics", // Added Semiconductors & Advanced Electronics as new theme
      ],
    },
    {
      icon: Lightbulb,
      title: "5. Project Requirements",
      content: "The project must address a real-world problem. Preference will be given to projects demonstrating:",
      list: [
        "Innovation and originality",
        "Indigenous or self-reliant approach",
        "Societal, economic, or national impact",
        "Scalability and feasibility",
        "Projects may be at idea, prototype, pilot, or implementation stage",
      ],
    },
    {
      icon: FileCheck,
      title: "6. Application Submission",
      list: [
        "Applications must be submitted online only through the official SANKALP 2026 application form",
        "All mandatory fields must be filled",
        "A project abstract/proposal (PDF) is compulsory",
        "Optional supporting materials (images, diagrams, video pitch links) may be uploaded",
      ],
    },
    {
      icon: Target,
      title: "7. Evaluation Process",
      content: "All applications will undergo internal expert committee review. Evaluation will be based on:",
      list: [
        "Innovation & technical merit",
        "Impact and relevance to Aatmanirbhar Bharat",
        "Alignment with Vision@2047",
        "Feasibility and scalability",
        "The decision of the SANKALP 2026 Evaluation Committee shall be final and binding",
      ],
    },
    {
      icon: Trophy,
      title: "8. Award Announcement",
      list: [
        "Shortlisted applicants may be invited for presentation or display during the summit",
        "Winners will be announced and honored during SANKALP 2026 at MNNIT Allahabad",
      ],
    },
    {
      icon: Shield,
      title: "9. Intellectual Property & Consent",
      list: [
        "Applicants retain ownership of their intellectual property",
        "By applying, participants grant permission to display and promote their project during the summit for academic and non-commercial purposes",
      ],
    },
    {
      icon: AlertCircle,
      title: "10. Important Notes",
      list: [
        "Submission of false or misleading information may lead to disqualification",
        "Incomplete applications will not be considered",
        "The organizing committee reserves the right to modify guidelines if required",
      ],
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 via-white to-green-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-green-600 flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">Award Application Guidelines</DialogTitle>
              <p className="text-sm text-gray-600 mt-1">SANKALP 2026 - National Summit</p>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(85vh-140px)] px-6 py-4">
          <div className="space-y-6 pb-4">
            {sections.map((section, idx) => {
              const Icon = section.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{section.title}</h3>
                  </div>

                  {section.content && <p className="text-gray-700 leading-relaxed mb-3 ml-13">{section.content}</p>}

                  {section.list && (
                    <ul className="space-y-2 ml-13">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-600" />
                11. Contact Information
              </h3>
              <p className="text-gray-700 mb-3">For queries related to awards and applications:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <a href="mailto:info@sankalp2026.com" className="hover:text-orange-600 transition-colors">
                    info@sankalp2026.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Globe className="w-4 h-4 text-green-600" />
                  <a href="https://www.sankalp2026.com" className="hover:text-green-600 transition-colors">
                    www.sankalp2026.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => onOpenChange(false)}
            className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Close Guidelines
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
