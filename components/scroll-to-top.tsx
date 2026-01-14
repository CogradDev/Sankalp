"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-white to-green-600 text-slate-900 shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 animate-fade-in-scale p-0 border-2 border-white"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </Button>
      )}
    </>
  )
}

export default ScrollToTop
