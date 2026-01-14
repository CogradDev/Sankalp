import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Registration from "@/models/Registration"

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



