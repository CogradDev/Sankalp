import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Registration from "@/models/Registration"
import AwardApplication from "@/models/AwardApplication"
import HackathonRegistration from "@/models/HackathonRegistration"
import { isAuthenticated } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    // Get counts from MongoDB
    const registrationsCount = await Registration.countDocuments({})
    const awardApplicationsCount = await AwardApplication.countDocuments({})
    const hackathonRegistrationsCount = await HackathonRegistration.countDocuments({})

    return NextResponse.json(
      {
        registrations: registrationsCount,
        awardApplications: awardApplicationsCount,
        hackathonRegistrations: hackathonRegistrationsCount,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Stats error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}
