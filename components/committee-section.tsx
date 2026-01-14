"use client"

import { Users, Award, Briefcase } from "lucide-react"

export function CommitteeSection() {
  const committees = [
    {
      title: "Advisory Committee",
      icon: Award,
      members: [
        { name: "To be announced", role: "Chair" },
        { name: "To be announced", role: "Member" },
      ],
    },
    {
      title: "Organizing Committee",
      icon: Users,
      members: [
        { name: "To be announced", role: "Convener" },
        { name: "To be announced", role: "Co-Convener" },
      ],
    },
    {
      title: "Technical Committee",
      icon: Briefcase,
      members: [
        { name: "To be announced", role: "Chair" },
        { name: "To be announced", role: "Member" },
      ],
    },
  ]

  return (
    <section id="committee" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-orange-50/30 to-green-50/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Tricolor accent */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-1 h-1 w-24">
            <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
            <div className="flex-1 bg-white border border-gray-300 rounded-full" />
            <div className="flex-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full" />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Committee</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished members guiding SANKALP 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {committees.map((committee, idx) => {
            const Icon = committee.icon
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{committee.title}</h3>
                </div>

                <div className="space-y-4">
                  {committee.members.map((member, mIdx) => (
                    <div key={mIdx} className="flex flex-col gap-1">
                      <p className="font-semibold text-gray-700">{member.name}</p>
                      <p className="text-sm text-orange-600 font-medium">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
