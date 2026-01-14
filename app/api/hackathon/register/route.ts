import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import HackathonRegistration from "@/models/HackathonRegistration"
import { isAuthenticated } from "@/lib/auth"

// Helper function to set CORS headers
function setCORSHeaders(response: NextResponse, origin?: string | null) {
  const allowedOrigin = process.env.HACKATHON_SITE_URL || origin
  
  if (allowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", allowedOrigin)
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type")
    response.headers.set("Access-Control-Allow-Credentials", "true")
  }
  
  return response
}

// Handle preflight OPTIONS request
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin")
  const response = new NextResponse(null, { status: 200 })
  return setCORSHeaders(response, origin)
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const {
      teamName,
      teamSize,
      leaderName,
      leaderEmail,
      leaderPhone,
      collegeName,
      teamMembers,
      selectedChallenge,
      problemUnderstanding,
      solutionIdea,
      techStack,
      priorExperience,
      portfolioLink,
    } = body

    // Validate required fields
    if (
      !teamName ||
      !teamSize ||
      !leaderName ||
      !leaderEmail ||
      !leaderPhone ||
      !collegeName ||
      !selectedChallenge ||
      !problemUnderstanding ||
      !solutionIdea ||
      !techStack ||
      !priorExperience
    ) {
      const response = NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
      return setCORSHeaders(response, request.headers.get("origin"))
    }

    // Create new hackathon registration
    const registration = await HackathonRegistration.create({
      teamName,
      teamSize: Number.parseInt(teamSize),
      leaderName,
      leaderEmail,
      leaderPhone,
      collegeName,
      teamMembers: teamMembers || [],
      selectedChallenge,
      problemUnderstanding,
      solutionIdea,
      techStack,
      priorExperience,
      portfolioLink: portfolioLink || undefined,
    })

    const response = NextResponse.json(
      { message: "Registration successful", id: registration._id },
      { status: 201 }
    )
    return setCORSHeaders(response, request.headers.get("origin"))
  } catch (error: any) {
    console.error("Hackathon registration error:", error)
    const response = NextResponse.json(
      { error: error.message || "Failed to register" },
      { status: 500 }
    )
    return setCORSHeaders(response, request.headers.get("origin"))
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication for admin access
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    const registrations = await HackathonRegistration.find({})
      .sort({ createdAt: -1 })
      .lean()

    // Transform MongoDB _id to id for frontend compatibility
    const transformedRegistrations = registrations.map((reg) => ({
      id: reg._id.toString(),
      teamName: reg.teamName,
      teamSize: reg.teamSize,
      leaderName: reg.leaderName,
      leaderEmail: reg.leaderEmail,
      leaderPhone: reg.leaderPhone,
      collegeName: reg.collegeName,
      teamMembers: reg.teamMembers,
      selectedChallenge: reg.selectedChallenge,
      problemUnderstanding: reg.problemUnderstanding,
      solutionIdea: reg.solutionIdea,
      techStack: reg.techStack,
      priorExperience: reg.priorExperience,
      portfolioLink: reg.portfolioLink || null,
      created_at: reg.createdAt.toISOString(),
    }))

    return NextResponse.json(
      {
        success: true,
        count: transformedRegistrations.length,
        data: transformedRegistrations,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Fetch hackathon registrations error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}
