"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface BrochureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <X className="w-6 h-6 text-gray-900" />
        </button>

        <div className="w-full h-[85vh]">
          <iframe
            loading="lazy"
            src="https://www.canva.com/design/DAG536o2xqg/7x0DGJsJO_Kaefp6ZKu43A/view?embed"
            className="w-full h-full border-0"
            title="SANKALP 2026 Brochure"
            allowFullScreen
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  )
}
