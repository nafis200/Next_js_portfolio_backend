import { model, Schema } from "mongoose";
import type { Texperience } from "./experience_interface";


const ExperienceSchema = new Schema<Texperience>(
  {
    subject: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

export const Experience = model<Texperience>("Experience", ExperienceSchema);
