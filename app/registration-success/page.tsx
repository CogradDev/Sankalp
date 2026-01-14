import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegistrationSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-2xl shadow-2xl border-t-4 border-t-green-500">
        <div className="p-8 sm:p-12 md:p-16 text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
            <CheckCircle2 className="text-green-600" size={64} />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration Successful!</h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8">Thank you for registering for SANKALP 2026</p>

          {/* Email Confirmation Notice */}
          <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <Mail className="text-blue-600 mr-2" size={24} />
              <span className="text-blue-900 font-semibold">Check Your Email</span>
            </div>
            <p className="text-blue-700">
              A confirmation email has been sent to your registered email address with your registration details and
              further instructions.
            </p>
          </div>

          {/* Information Box */}
          <div className="mb-12 p-6 bg-gray-50 rounded-xl text-left space-y-3">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✓ Your registration has been confirmed</li>
                <li>✓ Keep an eye on your email for summit updates and schedules</li>
                <li>✓ You will receive access credentials closer to the event date</li>
                <li>✓ Share your registration details with your network</li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Back to Home
              </Button>
            </Link>
            <Link href="/schedule">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-3 flex items-center justify-center bg-transparent"
              >
                View Summit Schedule
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          {/* Footer Note */}
          <p className="mt-8 text-sm text-gray-500">
            Have questions? Contact us at{" "}
            <a href="mailto:info@sankalp2026.com" className="text-blue-600 hover:underline font-semibold">
              info@sankalp2026.com
            </a>
          </p>
        </div>
      </Card>
    </main>
  )
}
