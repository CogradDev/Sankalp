import mongoose, { Schema, Document } from "mongoose"

export interface IRegistration extends Document {
  name: string
  email: string
  phone: string
  organization: string
  designation?: string
  category: string
  createdAt: Date
}

const RegistrationSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
    enum: ["student", "faculty", "researcher", "industry", "government", "other"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", RegistrationSchema)



