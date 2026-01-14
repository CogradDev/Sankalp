import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import AwardApplication from "@/models/AwardApplication"
import { isAuthenticated } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const formData = await request.json()

    // Create new award application
    const application = await AwardApplication.create({
      applicant_name: formData.applicant_name,
      designation: formData.designation,
      organization: formData.organization,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      applicant_category: formData.applicant_category,
      dic_type: formData.dic_type,
      project_title: formData.project_title,
      award_category: formData.award_category,
      theme_alignment: formData.theme_alignment,
      problem_statement: formData.problem_statement,
      solution_description: formData.solution_description,
      innovation_uniqueness: formData.innovation_uniqueness,
      impact_description: formData.impact_description,
      atmanirbhar_contribution: formData.atmanirbhar_contribution,
      vision_2047_relevance: formData.vision_2047_relevance,
      project_stage: formData.project_stage,
      trl_level: formData.trl_level || undefined,
      scalability_plan: formData.scalability_plan,
      team_size: formData.team_size ? Number.parseInt(formData.team_size) : undefined,
      team_roles: formData.team_roles,
      proposal_pdf_url: formData.proposal_pdf_url || undefined,
      video_url: formData.video_url || undefined,
      terms_accepted: formData.terms_accepted,
      data_consent: formData.data_consent,
      status: "submitted",
    })

    return NextResponse.json({ success: true, data: application }, { status: 200 })
  } catch (error: any) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
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

    const applications = await AwardApplication.find({})
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ applications }, { status: 200 })
  } catch (error: any) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}
