"use client"

import { Building2 } from "lucide-react"

export function SponsorsSection() {
  const sponsorTiers = [
    { title: "Platinum Sponsors", level: "platinum" },
    { title: "Gold Sponsors", level: "gold" },
    { title: "Silver Sponsors", level: "silver" },
  ]

  return (
    <section id="sponsors" className="py-16 md:py-24 bg-gradient-to-br from-white via-orange-50/20 to-green-50/20">
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
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders to shape India's future
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{tier.title}</h3>
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="bg-white rounded-2xl p-12 shadow-lg border-2 border-dashed border-gray-300 hover:border-orange-500 transition-all duration-300 w-full max-w-md">
                  <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-semibold">Sponsorship slots available</p>
                  <p className="text-sm text-gray-400 mt-2">Contact us for partnership opportunities</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
