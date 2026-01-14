"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, FileText, Mail, Download } from "lucide-react"
import { RegistrationModal } from "@/components/registration-modal"
import { useState } from "react"

export function CallToAction() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1jm4hW_SkOEG5UnnrNsNg1h6Fv1f2pwX_", "_blank")
  }

  return (
    <>
      <section
        id="contact"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 animate-fade-in-up">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 mx-auto mb-4"></div>
              <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-xs sm:text-sm font-semibold text-accent">Join Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight px-4">
                Be Part of SANKALP 2047
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto px-4">
                Take the first step towards contributing to India's innovation ecosystem and Vision@2047
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-fade-in-up delay-200 px-2 sm:px-0">
              <Card className="p-6 sm:p-8 bg-card text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-accent/30 group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <Calendar className="text-accent" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-2 sm:mb-3">
                  Register Now
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Secure your spot at India's premier innovation summit
                </p>
                <Button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm sm:text-base"
                >
                  Register Today
                </Button>
              </Card>

              <Card className="p-6 sm:p-8 bg-card text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30 group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <FileText className="text-primary" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-2 sm:mb-3">
                  Download Brochure
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Get detailed information about the summit
                </p>
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold bg-transparent text-sm sm:text-base"
                >
                  <Download className="mr-2" size={16} />
                  Get Brochure
                </Button>
              </Card>

              <Card className="p-6 sm:p-8 bg-card text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-success/30 group sm:col-span-2 md:col-span-1 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-700"></div>
                <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-success/20 transition-colors">
                  <Mail className="text-success" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground mb-2 sm:mb-3">
                  Contact Us
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                  Have questions? Reach out to our team
                </p>
                <p className="text-sm font-semibold text-success mb-4">+91 7880904115</p>
                <Button
                  variant="secondary"
                  className="w-full bg-success/10 text-success hover:bg-success hover:text-success-foreground font-semibold text-sm sm:text-base"
                  onClick={() => (window.location.href = "mailto:info@sankalp2026.com")}
                >
                  Get in Touch
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
    </>
  )
}
