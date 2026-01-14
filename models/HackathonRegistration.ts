import mongoose, { Schema, Document } from "mongoose"

export interface ITeamMember {
  name: string
  email: string
  college: string
  role: string
}

export interface IHackathonRegistration extends Document {
  // Team Details
  teamName: string
  teamSize: number
  leaderName: string
  leaderEmail: string
  leaderPhone: string
  collegeName: string

  // Team Members
  teamMembers: ITeamMember[]

  // Challenge Selection
  selectedChallenge: string

  // Submission Details
  problemUnderstanding: string
  solutionIdea: string
  techStack: string
  priorExperience: string
  portfolioLink?: string

  createdAt: Date
}

const TeamMemberSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
})

const HackathonRegistrationSchema: Schema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamSize: {
    type: Number,
    required: true,
  },
  leaderName: {
    type: String,
    required: true,
  },
  leaderEmail: {
    type: String,
    required: true,
  },
  leaderPhone: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: [TeamMemberSchema],
    default: [],
  },
  selectedChallenge: {
    type: String,
    required: true,
  },
  problemUnderstanding: {
    type: String,
    required: true,
  },
  solutionIdea: {
    type: String,
    required: true,
  },
  techStack: {
    type: String,
    required: true,
  },
  priorExperience: {
    type: String,
    required: true,
  },
  portfolioLink: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.HackathonRegistration ||
  mongoose.model<IHackathonRegistration>("HackathonRegistration", HackathonRegistrationSchema)
