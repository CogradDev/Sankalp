import Image from "next/image"
import { Mail, MapPin, Calendar, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Committee", href: "/committee" },
    { label: "Segments", href: "/#segments" },
    { label: "Program Schedule", href: "/program-schedule" },
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-slate-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-orange-500" />
              <h4 className="font-bold text-white text-sm uppercase tracking-wide">Organized by</h4>
            </div>
            <p className="text-white font-semibold text-base">Design Innovation Centre</p>
            <p className="text-white font-semibold text-base">MNNIT Allahabad, Prayagraj</p>
          </div>
          <div className="md:text-right space-y-2">
            <div className="flex items-center gap-2 mb-3 md:justify-end">
              <Calendar className="w-5 h-5 text-orange-500" />
              <h4 className="font-bold text-white text-sm uppercase tracking-wide">Summit Dates</h4>
            </div>
            <p className="text-orange-500 font-black text-2xl">March 24-26, 2026</p>
            <p className="text-gray-400 font-medium text-sm">Prayagraj, Uttar Pradesh</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 via-white to-green-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-900 rounded-lg p-2">
                  <Image
                    src="/sankalp-logo.png"
                    alt="SANKALP 2026"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">SANKALP 2026</h3>
                <p className="text-gray-400 text-sm font-semibold">National Summit on Innovation</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm max-w-md">
              Empowering India's next generation of innovators and entrepreneurs through collaboration, learning, and
              growth.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="mailto:info@sankalp2026.com"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-orange-500/10 flex items-center justify-center transition-all">
                  <Mail className="w-4 h-4" />
                </div>
              </a>
              <a
                href="tel:+917880904115"
                className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-green-500/10 flex items-center justify-center transition-all">
                  <Phone className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-4 pb-2 border-b-2 border-orange-500 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mt-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-orange-500 group-hover:w-2 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-4 pb-2 border-b-2 border-green-600 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm mt-4">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sankalp2026.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors font-medium"
                >
                  info@sankalp2026.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+917880904115"
                  className="text-gray-400 hover:text-orange-500 transition-colors font-medium"
                >
                  +91 7880904115
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Motilal+Nehru+National+Institute+of+Technology,+Allahabad/@25.4934811,81.8598059,17z/data=!3m1!4b1!4m6!3m5!1s0x399aca78818ddc51:0x6690dd2de3a1415b!8m2!3d25.4934811!4d81.8623808!16zL20vMDg1ejc3Nw?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=ac6abe61-4072-4499-8d71-b5fba4e2ee1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors font-medium cursor-pointer"
                >
                  <p className="text-sm leading-relaxed">
                    MNNIT Allahabad, Prayagraj
                    <br />
                    Uttar Pradesh - 211004
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {currentYear} SANKALP 2026. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <a
              href="https://cograd.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors font-semibold"
            >
              CoGrad
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
