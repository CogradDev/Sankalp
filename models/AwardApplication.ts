import mongoose, { Schema, Document } from "mongoose"

export interface IAwardApplication extends Document {
  // Section A - Applicant Info
  applicant_name: string
  designation: string
  organization: string
  email: string
  mobile: string
  city: string
  applicant_category: string
  dic_type: string

  // Section B - Project Details
  project_title: string
  award_category: string
  theme_alignment: string

  // Section C - Problem & Solution
  problem_statement: string
  solution_description: string
  innovation_uniqueness: string
  impact_description: string

  // Section D - Vision Alignment
  atmanirbhar_contribution: string
  vision_2047_relevance: string

  // Section E - Project Stage
  project_stage: string
  trl_level?: string
  scalability_plan: string

  // Section F - Team Info
  team_size?: number
  team_roles: string

  // Section G - Documents
  proposal_pdf_url?: string
  video_url?: string

  // Section H - Consent
  terms_accepted: boolean
  data_consent: boolean

  // Status
  status: string
  createdAt: Date
}

const AwardApplicationSchema: Schema = new Schema({
  // Section A
  applicant_name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  applicant_category: {
    type: String,
    required: true,
  },
  dic_type: {
    type: String,
    required: true,
  },

  // Section B
  project_title: {
    type: String,
    required: true,
  },
  award_category: {
    type: String,
    required: true,
  },
  theme_alignment: {
    type: String,
    required: true,
  },

  // Section C
  problem_statement: {
    type: String,
    required: true,
  },
  solution_description: {
    type: String,
    required: true,
  },
  innovation_uniqueness: {
    type: String,
    required: true,
  },
  impact_description: {
    type: String,
    required: true,
  },

  // Section D
  atmanirbhar_contribution: {
    type: String,
    required: true,
  },
  vision_2047_relevance: {
    type: String,
    required: true,
  },

  // Section E
  project_stage: {
    type: String,
    required: true,
  },
  trl_level: {
    type: String,
    required: false,
  },
  scalability_plan: {
    type: String,
    required: true,
  },

  // Section F
  team_size: {
    type: Number,
    required: false,
  },
  team_roles: {
    type: String,
    required: true,
  },

  // Section G
  proposal_pdf_url: {
    type: String,
    required: false,
  },
  video_url: {
    type: String,
    required: false,
  },

  // Section H
  terms_accepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  data_consent: {
    type: Boolean,
    required: true,
    default: false,
  },

  // Status
  status: {
    type: String,
    required: true,
    default: "submitted",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.AwardApplication ||
  mongoose.model<IAwardApplication>("AwardApplication", AwardApplicationSchema)
