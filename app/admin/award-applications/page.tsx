"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Award, Download, Filter, RefreshCw } from "lucide-react"

interface Application {
  id: string
  created_at: string
  applicant_name: string
  email: string
  mobile: string
  organization: string
  designation: string
  applicant_category: string
  project_title: string
  award_category: string
  problem_statement: string
  solution_description: string
  innovation_uniqueness: string
  impact_description: string
  atmanirbhar_contribution: string
  vision_2047_relevance: string
  project_stage: string
  trl_level: string
  scalability_plan: string
  team_size: number
  team_roles: string
  proposal_pdf_url: string
  video_url: string
  status: string
}

export default function AwardApplicationsAdminPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [filterCategory, setFilterCategory] = useState<string>("all")

  const fetchApplications = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/award-applications")
      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = "/admin/login"
          return
        }
        throw new Error("Failed to fetch applications")
      }
      const result = await response.json()
      // Transform MongoDB data structure to match interface
      const transformedApplications = (result.applications || []).map((app: any) => ({
        id: app._id?.toString() || app.id,
        created_at: app.createdAt ? new Date(app.createdAt).toISOString() : app.created_at,
        applicant_name: app.applicant_name,
        email: app.email,
        mobile: app.mobile,
        organization: app.organization,
        designation: app.designation,
        applicant_category: app.applicant_category,
        project_title: app.project_title,
        award_category: app.award_category,
        problem_statement: app.problem_statement,
        solution_description: app.solution_description,
        innovation_uniqueness: app.innovation_uniqueness,
        impact_description: app.impact_description,
        atmanirbhar_contribution: app.atmanirbhar_contribution,
        vision_2047_relevance: app.vision_2047_relevance,
        project_stage: app.project_stage,
        trl_level: app.trl_level,
        scalability_plan: app.scalability_plan,
        team_size: app.team_size,
        team_roles: app.team_roles,
        proposal_pdf_url: app.proposal_pdf_url,
        video_url: app.video_url,
        status: app.status,
      }))
      setApplications(transformedApplications)
    } catch (error) {
      console.error("Error fetching applications:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApplications()
  }, [])

  const filteredApplications =
    filterCategory === "all" ? applications : applications.filter((app) => app.award_category === filterCategory)

  const exportToCSV = () => {
    const headers = [
      "ID",
      "Submitted Date",
      "Applicant Name",
      "Email",
      "Mobile",
      "Organization",
      "Designation",
      "Category",
      "Project Title",
      "Award Category",
      "Project Stage",
      "TRL Level",
      "Team Size",
      "Status",
    ]

    const rows = filteredApplications.map((app) => [
      app.id,
      new Date(app.created_at).toLocaleString(),
      app.applicant_name,
      app.email,
      app.mobile,
      app.organization,
      app.designation,
      app.applicant_category,
      app.project_title,
      app.award_category,
      app.project_stage,
      app.trl_level || "",
      app.team_size || "",
      app.status,
    ])

    const csvContent = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `award-applications-${new Date().toISOString()}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Award Applications</h1>
            <p className="text-muted-foreground">Manage and review all award applications for SANKALP 2026</p>
          </div>
          <Button onClick={fetchApplications} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{applications.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Innovation Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter((a) => a.award_category === "Innovation Excellence").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Startup Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter((a) => a.award_category === "Emerging Startup").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Student Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter((a) => a.award_category === "Student Innovation").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Most Innovative Prototype</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter((a) => a.award_category === "Most Innovative Prototype").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Most Promising Startup</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter((a) => a.award_category === "Most Promising Startup").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Most Impactful Design</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {applications.filter((a) => a.award_category === "Most Impactful Design").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Export */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Innovation Excellence">Innovation Excellence</SelectItem>
                <SelectItem value="Emerging Startup">Emerging Startup</SelectItem>
                <SelectItem value="Social Impact">Social Impact</SelectItem>
                <SelectItem value="Atmanirbhar">Aatmanirbhar Bharat</SelectItem>
                <SelectItem value="Student Innovation">Student Innovation</SelectItem>
                <SelectItem value="Most Promising Startup">Most Promising Startup</SelectItem>
                <SelectItem value="Most Innovative Prototype">Most Innovative Prototype</SelectItem>
                <SelectItem value="Most Impactful Design">Most Impactful Design</SelectItem>
                <SelectItem value="Technology Transfer Award">Technology Transfer Award</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={exportToCSV} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export to CSV
          </Button>
        </div>

        {/* Applications List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading applications...</p>
          </div>
        ) : filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Award className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-muted-foreground">No applications found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredApplications.map((app) => (
              <Card key={app.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{app.project_title}</h3>
                      <p className="text-sm text-muted-foreground">
                        by {app.applicant_name} • {app.organization}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                        {app.award_category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                        {app.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Category</p>
                      <p className="font-medium">{app.applicant_category}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Project Stage</p>
                      <p className="font-medium">{app.project_stage}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-medium">{app.email}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Submitted</p>
                      <p className="font-medium">{new Date(app.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Problem Statement:</p>
                    <p className="text-sm line-clamp-2">{app.problem_statement}</p>
                  </div>

                  {(app.proposal_pdf_url || app.video_url) && (
                    <div className="flex gap-2 mt-4">
                      {app.proposal_pdf_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={app.proposal_pdf_url} target="_blank" rel="noopener noreferrer">
                            View Proposal
                          </a>
                        </Button>
                      )}
                      {app.video_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={app.video_url} target="_blank" rel="noopener noreferrer">
                            View Video
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
