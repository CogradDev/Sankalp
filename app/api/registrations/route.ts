import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { sendConfirmationEmail, sendAdminNotification } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // Handle cookie setting errors
          }
        },
      },
    })

    const body = await request.json()
    const { name, email, phone, organization, designation, category, event_participation_type } = body

    // Validate required fields
    if (!name || !email || !phone || !organization || !category || !event_participation_type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert registration into Supabase
    const { data, error } = await supabase
      .from("registrations")
      .insert([
        {
          name,
          email,
          phone,
          organization,
          designation: designation || null,
          category,
          event_participation_type,
        },
      ])
      .select()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save registration" }, { status: 500 })
    }

    try {
      await sendConfirmationEmail(email, name)

      const adminEmail = process.env.ADMIN_EMAIL_NOTIF || "sunil.yadav@iiita.ac.in"
      await sendAdminNotification({
        name,
        email,
        phone,
        organization,
        designation: designation || undefined,
        category,
        event_participation_type,
        adminEmail,
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail registration if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// GET endpoint to fetch all registrations (admin only - for dashboard)
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // Handle cookie setting errors
          }
        },
      },
    })

    const { data, error } = await supabase.from("registrations").select("*").order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        count: data?.length || 0,
        data,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
