"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  onRegisterClick: () => void
}

export function Navbar({ onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === "partners") {
      window.location.href = "/partners"
      return
    }

    if (id === "home") {
      window.location.href = "/"
      return
    }

    if (id === "register") {
      onRegisterClick()
      setIsMobileMenuOpen(false)
      return
    }

    const sectionId = id === "registration" ? "registration" : id
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "w-[95%] md:w-[90%]" : "w-[95%] md:w-[92%]"
      }`}
    >
      <div
        className={`backdrop-blur-xl rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 transition-all duration-500 border border-primary/10 bg-[rgba(30,53,113,1)] ${
          isScrolled ? "shadow-2xl shadow-primary/5" : "shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/images/untitled-20design-20-282-29.png"
              alt="SANKALP 2026"
              width={50}
              height={50}
              className="h-10 sm:h-11 md:h-12 w-auto hover:scale-105 transition-transform duration-300 rounded-xs"
            />
            <div className="h-8 sm:h-10 w-px bg-border/50 hidden sm:block" />
            <Image
              src="/images/untitled-20design-20-283-29.png"
              alt="MNNIT Allahabad"
              width={50}
              height={50}
              className="h-10 sm:h-11 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="h-8 sm:h-10 w-px bg-border/50 hidden sm:block" />
            <Image
              src="/images/untitled-20design-20-2812-29.png"
              alt="Design Innovation Centre"
              width={50}
              height={50}
              className="h-10 sm:h-11 md:h-12 hover:scale-105 transition-transform duration-300 w-auto"
            />
            <div className="h-8 sm:h-10 w-px bg-border/50 hidden sm:block" />
            <Image
              src="/images/untitled-20design-20-289-29.png"
              alt="Ministry of Education"
              width={50}
              height={50}
              className="h-10 sm:h-11 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-primary-foreground"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("problem-statements")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-card-foreground"
            >
              Challenges
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("schedule")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-card-foreground"
            >
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("prizes")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-card-foreground"
            >
              Prizes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-card-foreground"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-card-foreground"
            >
              Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-base font-medium hover:text-primary transition-all duration-300 relative group text-card-foreground"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <Button
              onClick={() => scrollToSection("register")}
              className="hover:bg-primary/90 text-white glow-pulse hover-lift shimmer relative overflow-hidden group bg-orange-600"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="rotate-90 transition-transform duration-300 text-foreground" />
            ) : (
              <Menu className="text-card-foreground" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3 animate-in slide-in-from-top duration-300">
            {["home", "problem-statements", "schedule", "prizes", "about", "partners", "faq"].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-2 hover:text-primary transition-all duration-300 hover:translate-x-2 fade-in-up delay- text-card-foreground${index * 100}`}
              >
                {section === "problem-statements" ? "Challenges" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("register")}
              className="w-full bg-primary hover:bg-primary/90 text-white glow-pulse hover-lift"
            >
              Register Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
