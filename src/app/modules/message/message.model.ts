import { model, Schema } from "mongoose";
import type { TEmail } from "./message.interface";


const EmailSchema = new Schema<TEmail>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } 
);

export const Email = model<TEmail>("Email", EmailSchema);
