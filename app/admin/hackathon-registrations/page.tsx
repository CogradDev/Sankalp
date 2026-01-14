"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Loader2, RefreshCw, ChevronDown, ChevronUp, Users } from "lucide-react"

interface TeamMember {
  name: string
  email: string
  college: string
  role: string
}

interface HackathonRegistration {
  id: string
  teamName: string
  teamSize: number
  leaderName: string
  leaderEmail: string
  leaderPhone: string
  collegeName: string
  teamMembers: TeamMember[]
  selectedChallenge: string
  problemUnderstanding: string
  solutionIdea: string
  techStack: string
  priorExperience: string
  portfolioLink: string | null
  created_at: string
}

export default function AdminHackathonRegistrationsPage() {
  const [registrations, setRegistrations] = useState<HackathonRegistration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  const fetchRegistrations = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/hackathon/register")
      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = "/admin/login"
          return
        }
        throw new Error("Failed to fetch hackathon registrations")
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

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedRows(newExpanded)
  }

  const downloadCSV = () => {
    if (registrations.length === 0) return

    const headers = [
      "Team Name",
      "Team Size",
      "Leader Name",
      "Leader Email",
      "Leader Phone",
      "College",
      "Challenge",
      "Tech Stack",
      "Experience Level",
      "Portfolio Link",
      "Registration Date",
    ]
    const rows = registrations.map((r) => [
      r.teamName,
      r.teamSize.toString(),
      r.leaderName,
      r.leaderEmail,
      r.leaderPhone,
      r.collegeName,
      r.selectedChallenge,
      r.techStack,
      r.priorExperience,
      r.portfolioLink || "-",
      new Date(r.created_at).toLocaleDateString(),
    ])

    const csv = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `hackathon-registrations-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getChallengeColor = (challenge: string) => {
    const colors: Record<string, string> = {
      education: "bg-orange-100 text-orange-800",
      skilling: "bg-blue-100 text-blue-800",
      leadership: "bg-purple-100 text-purple-800",
    }
    return colors[challenge] || "bg-gray-100 text-gray-800"
  }

  const getChallengeName = (challenge: string) => {
    const names: Record<string, string> = {
      education: "AI for Education",
      skilling: "AI for Skilling",
      leadership: "AI for Leadership",
    }
    return names[challenge] || challenge
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hackathon Registrations</h1>
          <p className="text-gray-600">Manage and view all SANKALP 2026 Hackathon team registrations</p>
        </div>

        {/* Stats and Actions */}
        <Card className="mb-8 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Hackathon Registrations</p>
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
            <Loader2 className="animate-spin mx-auto mb-4 text-purple-600" size={40} />
            <p className="text-gray-600">Loading hackathon registrations...</p>
          </Card>
        )}

        {/* Registrations List */}
        {!loading && registrations.length > 0 && (
          <div className="space-y-4">
            {registrations.map((reg) => (
              <Card key={reg.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{reg.teamName}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getChallengeColor(reg.selectedChallenge)}`}
                        >
                          {getChallengeName(reg.selectedChallenge)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Leader: <span className="font-medium">{reg.leaderName}</span> ({reg.leaderEmail})
                      </p>
                      <p className="text-sm text-gray-600">
                        College: <span className="font-medium">{reg.collegeName}</span>
                      </p>
                    </div>
                    <Button
                      onClick={() => toggleRow(reg.id)}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {expandedRows.has(reg.id) ? (
                        <>
                          <ChevronUp size={16} />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          View Details
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Team Size</p>
                      <p className="font-semibold text-gray-900">{reg.teamSize} member{reg.teamSize > 1 ? "s" : ""}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p className="font-semibold text-gray-900">{reg.leaderPhone}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Tech Stack</p>
                      <p className="font-semibold text-gray-900 truncate">{reg.techStack}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-900 capitalize">{reg.priorExperience}</p>
                    </div>
                  </div>

                  {expandedRows.has(reg.id) && (
                    <div className="mt-6 pt-6 border-t space-y-4">
                      {reg.teamMembers.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Users size={18} />
                            Team Members ({reg.teamMembers.length})
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {reg.teamMembers.map((member, idx) => (
                              <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                                <p className="font-medium text-gray-900">{member.name}</p>
                                <p className="text-sm text-gray-600">{member.email}</p>
                                <p className="text-sm text-gray-600">{member.college}</p>
                                <p className="text-xs text-gray-500 mt-1">Role: {member.role}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Problem Understanding</h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{reg.problemUnderstanding}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Proposed Solution</h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{reg.solutionIdea}</p>
                      </div>

                      {reg.portfolioLink && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Portfolio/GitHub</h4>
                          <a
                            href={reg.portfolioLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {reg.portfolioLink}
                          </a>
                        </div>
                      )}

                      <div className="text-xs text-gray-500">
                        Registered: {new Date(reg.created_at).toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && registrations.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600 mb-4">No hackathon registrations yet</p>
            <Button onClick={fetchRegistrations} variant="outline">
              Try Again
            </Button>
          </Card>
        )}
      </div>
    </main>
  )
}
