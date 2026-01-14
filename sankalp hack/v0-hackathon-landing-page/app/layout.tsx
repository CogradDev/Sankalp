import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SANKALP 2026 AI Hackathon | Code for India 2047",
  description:
    "National-level AI hackathon at MNNIT Allahabad during SANKALP 2026. Build AI solutions for Education, Skilling & Leadership aligned with NEP 2020.",
  generator: "v0.app",
  keywords: ["AI Hackathon", "SANKALP 2026", "MNNIT", "Education Technology", "NEP 2020", "CoGrad"],
  icons: {
    icon: "/images/untitled-20design-20-2811-29.png",
    apple: "/images/untitled-20design-20-2811-29.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
