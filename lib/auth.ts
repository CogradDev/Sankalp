import { cookies } from "next/headers"

const SESSION_COOKIE_NAME = "admin_session"
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export async function setAdminSession() {
  const cookieStore = await cookies()
  const expires = new Date(Date.now() + SESSION_DURATION)
  
  cookieStore.set(SESSION_COOKIE_NAME, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires,
    path: "/",
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE_NAME)
  return session?.value === "authenticated"
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminEmail || !adminPassword) {
    console.error("Admin credentials not configured in environment variables")
    return false
  }

  return email === adminEmail && password === adminPassword
}
