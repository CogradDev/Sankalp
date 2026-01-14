import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-1 bg-orange-500 rounded-full" />
            <div className="w-2 h-1 bg-gray-300 rounded-full" />
            <div className="w-6 h-1 bg-green-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            About <span className="text-orange-500">Sankalp Innovation Challenge 2026</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
            <div className="flex justify-center">
              <Image
                src="/images/untitled-20design-20-2811-29.png"
                alt="SANKALP 2026"
                width={200}
                height={200}
                className="w-48 h-auto"
              />
            </div>

            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sankalp Innovation Challenge 2026 is a national-level AI and innovation challenge hosted at MNNIT
                Allahabad during SANKALP 2026. Student teams build deployable AI systems that directly support
                government programs, public service delivery, and community development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The challenge focuses on three national priorities:{" "}
                <span className="text-primary font-semibold">Education</span>,{" "}
                <span className="text-primary font-semibold">Skill Development</span>, and{" "}
                <span className="text-primary font-semibold">Leadership & Governance</span>.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold mb-4 text-center text-popover">Key Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Government Programs",
                "Public Service Delivery",
                "Community Development",
                "NEP 2020 Alignment",
                "Deployable Solutions",
              ].map((focus, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors duration-300 shadow-sm"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span className="text-sm text-gray-700">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
