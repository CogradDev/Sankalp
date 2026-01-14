"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Users, Award, LogOut, ArrowRight, Code } from "lucide-react"

interface Stats {
  registrations: number
  awardApplications: number
  hackathonRegistrations: number
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/admin/stats")
      if (!response.ok) {
        if (response.status === 401) {
          router.push("/admin/login")
          return
        }
        throw new Error("Failed to fetch statistics")
      }
      const data = await response.json()
      setStats(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin/login")
      router.refresh()
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">SANKALP 2026 Management Portal</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <Card className="mb-8 p-4 bg-red-50 border border-red-200">
            <p className="text-red-700">{error}</p>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <Card className="p-12 text-center">
            <Loader2 className="animate-spin mx-auto mb-4 text-orange-600" size={40} />
            <p className="text-gray-600">Loading statistics...</p>
          </Card>
        )}

        {/* Stats Cards */}
        {!loading && stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-700">Total Registrations</CardTitle>
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-900 mb-4">{stats.registrations}</div>
                <Button
                  onClick={() => router.push("/admin/registrations")}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2"
                >
                  View All Registrations
                  <ArrowRight size={18} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-700">Award Applications</CardTitle>
                  <div className="p-3 bg-green-100 rounded-full">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-900 mb-4">{stats.awardApplications}</div>
                <Button
                  onClick={() => router.push("/admin/award-applications")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                >
                  View All Applications
                  <ArrowRight size={18} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-700">Hackathon Registrations</CardTitle>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-900 mb-4">{stats.hackathonRegistrations}</div>
                <Button
                  onClick={() => router.push("/admin/hackathon-registrations")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
                >
                  View All Registrations
                  <ArrowRight size={18} />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
        {!loading && stats && (
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={() => router.push("/admin/registrations")}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-start gap-2"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Users size={20} />
                    <span className="font-semibold">Manage Registrations</span>
                  </div>
                  <span className="text-sm text-gray-600">View and export registration data</span>
                </Button>
                <Button
                  onClick={() => router.push("/admin/award-applications")}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-start gap-2"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Award size={20} />
                    <span className="font-semibold">Manage Award Applications</span>
                  </div>
                  <span className="text-sm text-gray-600">Review and manage award submissions</span>
                </Button>
                <Button
                  onClick={() => router.push("/admin/hackathon-registrations")}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-start gap-2"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Code size={20} />
                    <span className="font-semibold">Manage Hackathon Registrations</span>
                  </div>
                  <span className="text-sm text-gray-600">View and manage hackathon team registrations</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
