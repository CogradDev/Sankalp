"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, FileText } from "lucide-react"
import Image from "next/image"
import { RegistrationModal } from "@/components/registration-modal"
import { BrochureModal } from "@/components/brochure-modal"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const aboutItems = [
    { label: "About SANKALP 2026", href: "/#about", type: "scroll" },
    { label: "Vision & Objectives", href: "/about/vision", type: "link" },
    { label: "About DIC", href: "/about/dic", type: "link" },
    { label: "About MNNIT", href: "/about/mnnit", type: "link" },
    { label: "About Prayagraj", href: "/about/prayagraj", type: "link" },
    { label: "About Department of Biotechnology", href: "/about/biotechnology", type: "link" },
  ]

  const navItems = [
    { label: "Home", href: "/", type: "link" },
    { label: "Committee", href: "/committee", type: "link" },
    { label: "Pre-events", href: "/events", type: "link" },
    { label: "Segments", href: "/#segments", type: "scroll" },
    { label: "Program Schedule", href: "/program-schedule", type: "link" },
    { label: "Awards", href: "/awards", type: "link" },
    { label: "Partners", href: "/#partners", type: "scroll" },
    { label: "Sponsors", href: "/sponsors", type: "link" },
  ]

  const handleNavigation = (href: string, type?: string) => {
    setIsMobileMenuOpen(false)
    setIsAboutDropdownOpen(false)

    if (type === "scroll" || href.includes("#")) {
      const [path, hash] = href.split("#")

      if (path && pathname !== path) {
        router.push(href)
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      } else {
        const element = document.querySelector(`#${hash}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    } else {
      router.push(href)
    }
  }

  const handleAboutClick = (item: (typeof aboutItems)[0]) => {
    handleNavigation(item.href, item.type)
  }

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname !== "/") {
      router.push("/")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "bg-slate-900/98" : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
          } backdrop-blur-lg border-b border-white/10`}
        >
          <div className="container mx-auto px-4 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              {/* Left: SANKALP Logo + 3 Partner Logos */}
              <div className="flex items-center gap-3 lg:gap-5">
                <button
                  onClick={handleHomeClick}
                  className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-md overflow-hidden hover:scale-105 transition-transform flex-shrink-0">
                    <Image
                      src="/images/untitled-20design-20-2811-29.png"
                      alt="SANKALP 2026"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="block">
                    <h1 className="text-xs sm:text-sm lg:text-2xl font-bold leading-tight text-white whitespace-nowrap">
                      SANKALP 2026
                    </h1>
                    <p className="hidden sm:block text-[10px] lg:text-sm font-semibold text-gray-300 leading-tight">
                      National Summit at MNNIT
                    </p>
                    <p className="hidden sm:block text-[9px] lg:text-xs text-gray-400 font-medium leading-tight">
                      Allahabad, Prayagraj
                    </p>
                  </div>
                </button>

                <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-3 lg:pl-4">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <Image
                      src="/images/untitled-20design-20-289-29.png"
                      alt="MNNIT Allahabad"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <Image
                      src="/images/untitled-20design-20-286-29.png"
                      alt="Design Innovation Centre"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden hover:scale-105 transition-transform flex items-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%289%29-8n1H5bQuMnW6UrKOgkLSTS1MbxTWZb.png"
                      alt="Ministry of Education"
                      width={80}
                      height={80}
                      className="object-contain h-full w-28"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  size="sm"
                  onClick={() => setIsBrochureModalOpen(true)}
                  variant="outline"
                  className="hidden lg:flex items-center gap-1.5 sm:gap-2 font-semibold px-3 sm:px-4 lg:px-5 py-2 text-xs sm:text-sm bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-300 rounded-full"
                >
                  <FileText className="w-4 h-4 sm:w-4 sm:h-4" />
                  <span>Brochure</span>
                </Button>

                <Button
                  size="sm"
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="hidden lg:flex bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-slate-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold px-4 sm:px-5 lg:px-6 py-2 text-xs sm:text-sm rounded-full shadow-lg"
                >
                  Register Now
                </Button>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`hidden lg:block transition-all duration-300 ${
            isScrolled ? "bg-white/98 shadow-sm" : "bg-white"
          } backdrop-blur-md border-b border-gray-100`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center justify-center gap-1">
              <button
                onClick={handleHomeClick}
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 relative ${
                  pathname === "/" ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Home
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-white to-green-600"></span>
                )}
              </button>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-5 py-2.5 text-sm font-semibold transition-all duration-300 relative ${
                    pathname.startsWith("/about") ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  About Us
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                  {pathname.startsWith("/about") && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-white to-green-600"></span>
                  )}
                </button>

                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1 animate-fade-in-up">
                    <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      {aboutItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleAboutClick(item)}
                          className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => {
                const isActive = pathname === item.href

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href, item.type)}
                    className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 relative ${
                      isActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-white to-green-600"></span>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-2xl border-b border-gray-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Button
                size="lg"
                onClick={() => {
                  setIsRegisterModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white hover:shadow-xl transition-all duration-300 font-bold py-3 text-base rounded-lg shadow-md mb-2"
              >
                Register for Summit
              </Button>

              <Button
                size="lg"
                onClick={() => {
                  setIsBrochureModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                variant="outline"
                className="w-full font-semibold border-2 border-orange-500 text-orange-600 hover:bg-orange-50 flex items-center justify-center gap-2 py-3 text-base rounded-lg mb-3"
              >
                <FileText className="w-5 h-5" />
                Download Brochure
              </Button>

              <div className="border-t border-gray-200 pt-2 mb-1"></div>

              <button
                onClick={handleHomeClick}
                className="px-4 py-3 text-base font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-left"
              >
                Home
              </button>

              <div>
                <button
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                >
                  About Us
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isAboutDropdownOpen && (
                  <div className="mt-1 ml-4 flex flex-col gap-1">
                    {aboutItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleAboutClick(item)}
                        className="text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href, item.type)}
                  className="px-4 py-3 text-base font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <RegistrationModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
      <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
    </>
  )
}
