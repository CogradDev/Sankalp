"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, MapPin, IndianRupee, Palette, ChevronRight, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function AboutPrayagrajPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  const heroImages = [
    { url: "/prayagraj-allahabad-fort-mughal-architecture.jpg", alt: "Allahabad Fort - Prayagraj" },
    { url: "/hanuman-temple-prayagraj-sangam-india-temple.jpg", alt: "Hanuman Temple at Sangam" },
    { url: "/prayagraj-triveni-sangam.jpg", alt: "Triveni Sangam - Confluence of Three Rivers" },
    { url: "/khusro-bagh-prayagraj-mughal-garden-tomb.jpg", alt: "Khusro Bagh - Mughal Architecture" },
  ]

  const nearbyAttractions = [
    {
      name: "Varanasi",
      description: "Ancient city of ghats and temples",
      distance: "135 km",
      image: "/varanasi-ghats-ganges-river-temples.jpg",
    },
    {
      name: "Ayodhya",
      description: "Sacred birthplace of Lord Ram",
      distance: "150 km",
      image: "/ayodhya-ram-mandir-temple-architecture.jpg",
    },
    {
      name: "Chitrakoot",
      description: "Spiritual town with temples",
      distance: "130 km",
      image: "/chitrakoot-temples-spiritual-india.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors font-semibold">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-400">About Us</span>
            <ChevronRight size={16} />
            <span className="text-orange-600 font-semibold">About Prayagraj</span>
          </div>
        </div>

        {/* Hero Section with Image Slider */}
        <section className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Hero Image Carousel */}
              <div className="relative h-[320px] md:h-[380px]">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                ))}

                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                  <div className="flex justify-center gap-1 mb-4">
                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                    <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3 drop-shadow-lg">
                    Prayagraj
                  </h1>
                  <p className="text-xl md:text-2xl text-center mb-8 drop-shadow-lg font-semibold">
                    The City of Triveni Sangam and Spiritual Bliss
                  </p>

                  {/* Quick Info Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
                    <Card className="bg-white/90 backdrop-blur-sm p-4 border-0 text-center">
                      <Palette className="text-orange-600 mx-auto mb-2" size={28} />
                      <div className="text-xs text-gray-600 mb-1">Theme</div>
                      <div className="text-sm font-bold text-gray-900">Spirituality / Heritage</div>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm p-4 border-0 text-center">
                      <MapPin className="text-green-600 mx-auto mb-2" size={28} />
                      <div className="text-xs text-gray-600 mb-1">Area</div>
                      <div className="text-sm font-bold text-gray-900">5,482 km²</div>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm p-4 border-0 text-center">
                      <Users className="text-blue-600 mx-auto mb-2" size={28} />
                      <div className="text-xs text-gray-600 mb-1">Population</div>
                      <div className="text-sm font-bold text-gray-900">5.9 million</div>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm p-4 border-0 text-center">
                      <IndianRupee className="text-purple-600 mx-auto mb-2" size={28} />
                      <div className="text-xs text-gray-600 mb-1">Currency</div>
                      <div className="text-sm font-bold text-gray-900">Indian Rupee</div>
                    </Card>
                  </div>
                </div>

                {/* Carousel Navigation */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeSlide ? "bg-white w-8" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronRight size={24} className="text-white rotate-180" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center mb-8">
              Welcome to Prayagraj
            </h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-orange-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Prayagraj, formerly Allahabad, has been a city of learning, wisdom, and writing. It is one of India's
                most vibrant politically, spiritually conscious, and spiritually awakened cities. Prayagraj is among the
                largest cities in Uttar Pradesh and is situated at the confluence of three rivers: Ganga, Yamuna, and
                the invisible Saraswati. The meeting point is known as Triveni or Sangam.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The city, better known as "Prayag," has many governmental institutions, which include MNNIT Allahabad,
                High Court of Uttar Pradesh, Allahabad University, IIIT Allahabad, and tourist places like Sangam,
                Allahabad Fort, Anand Bhawan, Swaraj Bhawan, Narayani Ashram, Ashoka Pillar, Khusro Bagh, etc. At this
                holy city of Prayagraj, we host SANKALP 2026, the National Summit on Innovation & Entrepreneurship.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="overflow-hidden border-0 shadow-lg group">
                  <div className="relative h-64">
                    <Image
                      src="/triveni-sangam-real.jpg"
                      alt="Sangam - Confluence of Rivers"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Triveni Sangam</h3>
                    <p className="text-gray-700">
                      The sacred confluence where three holy rivers meet, attracting millions of pilgrims and hosting
                      the world-famous Kumbh Mela.
                    </p>
                  </div>
                </Card>

                <Card className="overflow-hidden border-0 shadow-lg group">
                  <div className="relative h-64">
                    <Image
                      src="/mnnit-entrance-real.jpg"
                      alt="Historic Architecture"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Hub</h3>
                    <p className="text-gray-700">
                      Home to prestigious institutions like MNNIT, Allahabad University, and IIIT, fostering innovation
                      and excellence in education.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Attractions */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center mb-12">
              Historic Landmarks
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56">
                  <Image
                    src="/khusro-bagh-real.jpg"
                    alt="Khusro Bagh"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Khusro Bagh</h3>
                  <p className="text-gray-700 mb-4">
                    Beautiful Mughal garden housing historic tombs with stunning architecture from the early 17th
                    century.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56">
                  <Image
                    src="/allahabad-fort-real.jpg"
                    alt="Allahabad Fort"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Allahabad Fort</h3>
                  <p className="text-gray-700 mb-4">
                    Magnificent Mughal fort built by Emperor Akbar in 1583, featuring the famous Ashoka Pillar inside.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56">
                  <Image
                    src="/anand-bhawan-real.jpg"
                    alt="Anand Bhawan"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Anand Bhawan</h3>
                  <p className="text-gray-700 mb-4">
                    Historic ancestral home of the Nehru-Gandhi family, now a museum showcasing India's freedom
                    struggle.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56">
                  <Image
                    src="/all-saints-cathedral-real.jpg"
                    alt="All Saints Cathedral"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">All Saints Cathedral</h3>
                  <p className="text-gray-700 mb-4">
                    Stunning example of Gothic Revival architecture, consecrated in 1887, featuring beautiful stained
                    glass windows.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56">
                  <Image
                    src="/prayagraj-allahabad-university-colonial-building-a.jpg"
                    alt="Heritage Corridors"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Colonial Architecture</h3>
                  <p className="text-gray-700 mb-4">
                    Numerous colonial-era buildings and corridors showcasing Indo-Gothic and European architectural
                    styles.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56">
                  <Image
                    src="/hanuman-temple-real.jpg"
                    alt="Hanuman Temple"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hanuman Temple</h3>
                  <p className="text-gray-700 mb-4">
                    Unique temple near Sangam featuring a reclining statue of Lord Hanuman, believed to protect the city
                    from floods.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Nearby Cities and Attractions */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 text-center mb-4">
              Nearby Cities and Attractions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore the spiritual and cultural treasures surrounding Prayagraj
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {nearbyAttractions.map((attraction, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="relative h-64">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{attraction.name}</h3>
                      <p className="text-sm text-white/90">{attraction.description}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
                    <div className="flex items-center gap-2 text-orange-600">
                      <MapPin size={18} />
                      <span className="font-semibold">{attraction.distance} from Prayagraj</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weather & Climate */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 via-white to-orange-50 p-8 md:p-12 border-t-4 border-blue-500 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Weather & Climate Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                During the month of March, Prayagraj experiences pleasant weather with mild warm days and cool nights.
                The temperature during mid-March typically varies between 20-28°C, making it ideal for outdoor events
                and sightseeing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Delegates attending SANKALP 2026 are advised to bring light cotton clothes for daytime and a light
                jacket or shawl for evenings. The weather is generally clear with minimal rainfall during this period.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 p-12 text-center border-0 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the Spirit of Prayagraj</h3>
              <p className="text-xl text-white/90 mb-8">
                Join us at SANKALP 2026 in this historic city where tradition meets innovation
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Back to Home
                <ExternalLink size={20} />
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
