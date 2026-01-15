import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f1f4f] to-[#0a0e27] text-white border-t border-orange-500/30">
      {/* Top Section: Organized By & Hackathon Timeline */}
      <div className="border-b border-white/10 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organized By - Left aligned */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500">Organized By</h3>
              </div>
              <p className="text-lg font-bold text-white mb-1">Design Innovation Centre</p>
              <p className="text-sm text-gray-400">MNNIT Allahabad, Prayagraj</p>
            </div>

            {/* Grand Finale - Right aligned on desktop, left on mobile */}
            <div className="text-left md:text-right">
              <div className="flex items-center gap-2 mb-4 md:justify-end">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Grand Finale</h3>
              </div>
              <p className="text-2xl font-bold text-orange-500 mb-2">March 24-26, 2026</p>
              <p className="text-sm text-gray-400">MNNIT Allahabad, Prayagraj</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Consistent Left Alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Hackathon Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-white text-lg mb-2">Sankalp Innovation Challenge 2026</h3>
              <p className="text-sm text-orange-400">Building AI Solutions for Real-World India</p>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering India's brightest minds to develop AI-powered solutions for Education, Skilling, and Leadership
              challenges.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="mailto:info@sankalp2026.com"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+917880904115"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/20 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 pb-2 border-b-2 border-orange-500 inline-block uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Challenges", href: "#challenges" },
                { name: "Schedule", href: "#schedule" },
                { name: "Prizes", href: "#prizes" },
                { name: "FAQ", href: "#faq" },
                { name: "Register", href: "#registration" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-500 hover:pl-1 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 pb-2 border-b-2 border-green-600 inline-block uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <a href="mailto:info@sankalp2026.com" className="hover:text-orange-500 transition-colors">
                  info@sankalp2026.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <a href="tel:+917880904115" className="hover:text-orange-500 transition-colors">
                  +91 7880904115
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-green-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span>MNNIT Allahabad, Prayagraj</span>
                  <span>Uttar Pradesh - 211004</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Centered on mobile, space-between on desktop */}
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-sm text-gray-400 text-center sm:text-left">
          <p>© 2026 Sankalp Innovation Challenge. All rights reserved.</p>
          <p>
            Organized by{" "}
            <a
              href="https://www.cograd.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:underline"
            >
              CoGrad
            </a>{" "}
            during SANKALP 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
