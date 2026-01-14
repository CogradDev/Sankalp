"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Loader2, RefreshCw } from "lucide-react"

interface Registration {
  id: string
  name: string
  email: string
  phone: string
  organization: string
  designation: string | null
  category: string
  created_at: string
}

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRegistrations = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/registrations")
      if (!response.ok) {
        throw new Error("Failed to fetch registrations")
      }
      const data = await response.json()
      setRegistrations(data.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const downloadCSV = () => {
    if (registrations.length === 0) return

    const headers = ["Name", "Email", "Phone", "Organization", "Designation", "Category", "Registration Date"]
    const rows = registrations.map((r) => [
      r.name,
      r.email,
      r.phone,
      r.organization,
      r.designation || "-",
      r.category,
      new Date(r.created_at).toLocaleDateString(),
    ])

    const csv = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `sankalp-registrations-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      student: "bg-blue-100 text-blue-800",
      faculty: "bg-purple-100 text-purple-800",
      researcher: "bg-cyan-100 text-cyan-800",
      industry: "bg-orange-100 text-orange-800",
      government: "bg-red-100 text-red-800",
      other: "bg-gray-100 text-gray-800",
    }
    return colors[category] || colors.other
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Registrations Dashboard</h1>
          <p className="text-gray-600">Manage and view all SANKALP 2026 registrations</p>
        </div>

        {/* Stats and Actions */}
        <Card className="mb-8 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Registrations</p>
              <p className="text-4xl font-bold text-gray-900">{registrations.length}</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={fetchRegistrations}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <RefreshCw size={20} />}
                Refresh
              </Button>
              <Button
                onClick={downloadCSV}
                disabled={registrations.length === 0}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
              >
                <Download size={20} />
                Export CSV
              </Button>
            </div>
          </div>
        </Card>

        {/* Error Message */}
        {error && (
          <Card className="mb-8 p-4 bg-red-50 border border-red-200">
            <p className="text-red-700">{error}</p>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <Card className="p-12 text-center">
            <Loader2 className="animate-spin mx-auto mb-4 text-blue-600" size={40} />
            <p className="text-gray-600">Loading registrations...</p>
          </Card>
        )}

        {/* Registrations Table */}
        {!loading && registrations.length > 0 && (
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Organization</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{reg.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{reg.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{reg.phone}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{reg.organization}</td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(reg.category)}`}
                        >
                          {reg.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(reg.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Empty State */}
        {!loading && registrations.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600 mb-4">No registrations yet</p>
            <Button onClick={fetchRegistrations} variant="outline">
              Try Again
            </Button>
          </Card>
        )}
      </div>
    </main>
  )
}
