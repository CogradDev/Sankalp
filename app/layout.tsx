import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Optimize font loading with display swap for better performance
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap", // Prevents invisible text during font load
  preload: true,
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  display: "swap",
  preload: false, // Only preload primary font
})

export const metadata: Metadata = {
  title: "SANKALP 2026 | National Summit on Innovation & Skills",
  description:
    "Join us at SANKALP 2026 - A 3-Day National Summit on Skilling and Nurturing Knowledge for Aatmanirbhar Leadership and Prosperity. March 24-26, 2026 at MNNIT Allahabad.",
  generator: "v0.app",
  keywords: [
    "SANKALP 2026",
    "National Summit",
    "Innovation",
    "Skills",
    "Aatmanirbhar Bharat",
    "MNNIT Allahabad",
    "DIC",
  ],
  icons: {
    icon: "/sankalp-logo.png",
    apple: "/sankalp-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
