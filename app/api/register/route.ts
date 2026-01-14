import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Registration from "@/models/Registration"
import { isAuthenticated } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, email, phone, organization, designation, category } = body

    // Validate required fields
    if (!name || !email || !phone || !organization || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingRegistration = await Registration.findOne({ email })
    if (existingRegistration) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      )
    }

    // Create new registration
    const registration = await Registration.create({
      name,
      email,
      phone,
      organization,
      designation: designation || "",
      category,
    })

    return NextResponse.json(
      { message: "Registration successful", id: registration._id },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to register" },
      { status: 500 }
    )
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

    const registrations = await Registration.find({})
      .sort({ createdAt: -1 })
      .lean()

    // Transform MongoDB _id to id for frontend compatibility
    const transformedRegistrations = registrations.map((reg) => ({
      id: reg._id.toString(),
      name: reg.name,
      email: reg.email,
      phone: reg.phone,
      organization: reg.organization,
      designation: reg.designation || null,
      category: reg.category,
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
    console.error("Fetch registrations error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}



