import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const formData = await request.json()

    // Insert into database
    const { data, error } = await supabase
      .from("award_applications")
      .insert({
        applicant_name: formData.applicant_name,
        designation: formData.designation,
        organization: formData.organization,
        email: formData.email,
        mobile: formData.mobile,
        city: formData.city,
        applicant_category: formData.applicant_category,
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
        trl_level: formData.trl_level,
        scalability_plan: formData.scalability_plan,
        team_size: formData.team_size ? Number.parseInt(formData.team_size) : null,
        team_roles: formData.team_roles,
        proposal_pdf_url: formData.proposal_pdf_url,
        video_url: formData.video_url,
        terms_accepted: formData.terms_accepted,
        data_consent: formData.data_consent,
        status: "submitted",
      })
      .select()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const { data, error } = await supabase
      .from("award_applications")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
    }

    return NextResponse.json({ applications: data }, { status: 200 })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
