"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface SponsorshipModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SponsorshipModal({ isOpen, onClose }: SponsorshipModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl bg-white rounded-2xl shadow-2xl max-h-[95vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Sponsorship Proposal</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="relative w-full" style={{ paddingTop: "141.4286%" }}>
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.canva.com/design/DAG7Re9UhbQ/omUCADiT4QFHPsltI8_wxw/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-600">
              View the complete{" "}
              <a
                href="https://www.canva.com/design/DAG7Re9UhbQ/omUCADiT4QFHPsltI8_wxw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold hover:underline"
              >
                Sponsorship Proposal
              </a>
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
