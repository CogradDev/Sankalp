"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Star, Sparkles, Crown, Trophy, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"
import { SponsorshipModal } from "@/components/sponsorship-modal"
import { useState } from "react"

export default function SponsorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sponsorTiers = [
    {
      title: "Platinum Sponsors",
      level: "platinum",
      icon: Crown,
      color: "from-gray-400 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      borderColor: "border-gray-300",
      hoverColor: "hover:border-gray-500",
      iconBg: "bg-gradient-to-br from-gray-400 to-gray-600",
      amount: "₹10,00,000+",
      perks: ["Premium booth space", "Speaking opportunities", "Logo on all materials", "VIP networking access"],
    },
    {
      title: "Gold Sponsors",
      level: "gold",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      bgGradient: "from-yellow-50 to-amber-100",
      borderColor: "border-yellow-400",
      hoverColor: "hover:border-yellow-600",
      iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      amount: "₹5,00,000+",
      perks: ["Standard booth space", "Brand visibility", "Logo placement", "Networking sessions"],
    },
    {
      title: "Silver Sponsors",
      level: "silver",
      icon: Star,
      color: "from-slate-300 to-slate-500",
      bgGradient: "from-slate-50 to-slate-100",
      borderColor: "border-slate-300",
      hoverColor: "hover:border-slate-500",
      iconBg: "bg-gradient-to-br from-slate-300 to-slate-500",
      amount: "₹2,00,000+",
      perks: ["Logo on website", "Social media mentions", "Event access", "Digital materials"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <ScrollToTop />

      <main className="pt-24">
        {/* Tricolor Accent Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">Sponsors</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-slate-900 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                Partner with SANKALP 2026
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Join us in building India's innovation ecosystem with 10,000+ visitors and industry leaders
              </p>
            </div>
          </div>
        </section>

        {/* Sponsorship Opportunities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1 h-1 w-20">
                    <div className="flex-1 bg-orange-500 rounded-full" />
                    <div className="flex-1 bg-white border border-gray-300 rounded-full" />
                    <div className="flex-1 bg-green-600 rounded-full" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Sponsorship Opportunities</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  Comprehensive partnership packages designed to maximize your brand impact and ROI
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    tier: "1",
                    title: "Title/Premium Sponsor",
                    color: "from-purple-500 to-purple-700",
                    borderColor: "border-purple-300",
                    hoverBorder: "hover:border-purple-500",
                    bgGradient: "from-purple-50 to-purple-100/50",
                    exclusiveBenefits: [
                      "Dedicated session aligning with sponsor goals for strategic partnership",
                      "20-minute tech talk by sponsor's experts during a plenary session",
                      "Premier exhibition space (20×20 ft)",
                      "Participation in the industry-academia interaction session",
                    ],
                    marketingVisibility: [
                      "Prominent logo placement on the Summit website, social media platforms, and all the marketing material",
                      "Inclusion in the registration kit bag",
                    ],
                  },
                  {
                    tier: "2",
                    title: "Associate Sponsor",
                    color: "from-blue-500 to-blue-700",
                    borderColor: "border-blue-300",
                    hoverBorder: "hover:border-blue-500",
                    bgGradient: "from-blue-50 to-blue-100/50",
                    exclusiveBenefits: ["10-minute tech talk by sponsor's experts", "Exhibition space (20×10 ft)"],
                    marketingVisibility: [
                      "Logo placement on the Summit website and all the marketing material",
                      "Inclusion in the registration kit bag",
                    ],
                  },
                  {
                    tier: "3",
                    title: "Co-Sponsor",
                    color: "from-teal-500 to-teal-700",
                    borderColor: "border-teal-300",
                    hoverBorder: "hover:border-teal-500",
                    bgGradient: "from-teal-50 to-teal-100/50",
                    exclusiveBenefits: ["Exhibition space (10×10 ft)"],
                    marketingVisibility: [
                      "Logo placement on the Summit website and all the marketing material",
                      "Inclusion in the registration kit bag",
                    ],
                  },
                ].map((opportunity, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${opportunity.bgGradient} rounded-2xl border-2 ${opportunity.borderColor} ${opportunity.hoverBorder} transition-all duration-300 hover:shadow-2xl group overflow-hidden`}
                  >
                    <div className="p-8 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <div className={`w-full h-full bg-gradient-to-br ${opportunity.color} rounded-bl-full`} />
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${opportunity.color} text-white flex items-center justify-center text-xl font-black shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                            >
                              {opportunity.tier}
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              Exclusive Benefits
                            </h4>
                            <ul className="space-y-3">
                              {opportunity.exclusiveBenefits.map((benefit, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                              <Sparkles className="w-5 h-5 text-orange-600" />
                              Marketing & Visibility
                            </h4>
                            <ul className="space-y-3">
                              {opportunity.marketingVisibility.map((item, mIdx) => (
                                <li key={mIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex-1 py-3 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                          >
                            Claim This Opportunity
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Sponsor SANKALP 2026 Section */}
        <section className="py-12 bg-gradient-to-br from-slate-50 to-orange-50/20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-3">
                  <div className="flex gap-1 h-1 w-16">
                    <div className="flex-1 bg-orange-500 rounded-full" />
                    <div className="flex-1 bg-white border border-gray-300 rounded-full" />
                    <div className="flex-1 bg-green-600 rounded-full" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Sponsor SANKALP 2026?</h2>
                <p className="text-sm text-gray-600">
                  Unlock exclusive opportunities at India's premier innovation summit
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Sparkles,
                    title: "Brand Visibility",
                    desc: "Showcase your brand to 10,000+ innovators, entrepreneurs, and industry leaders",
                    stat: "10,000+ Visitors",
                  },
                  {
                    icon: Award,
                    title: "Strategic Networking",
                    desc: "Connect with leading DICs, startups, policymakers, and innovation ecosystem",
                    stat: "30+ Institutions",
                  },
                  {
                    icon: Star,
                    title: "Innovation Access",
                    desc: "Early access to cutting-edge technologies, research, and emerging startups",
                    stat: "100+ Innovations",
                  },
                ].map((benefit, index) => {
                  const BenefitIcon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <BenefitIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{benefit.desc}</p>
                      <div className="pt-3 border-t border-gray-100">
                        <span className="text-xs font-bold text-orange-600">{benefit.stat}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Partner with Us?</h3>
                  <p className="text-sm text-white/90 mb-5">Contact our sponsorship team for a customized proposal</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href="mailto:info@sankalp2026.com"
                      className="px-6 py-3 bg-white text-orange-600 text-sm font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                    >
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1WHf4HNrPkj0IC0xvxeX9eNJoOvpH1ZPY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-sm font-bold rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      Download Brochure
                    </a>
                  </div>
                  <p className="text-xs text-white/80 mt-4">Email: info@sankalp2026.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SponsorshipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
