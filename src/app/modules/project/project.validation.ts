import { z } from "zod";

export const ProjectValidationSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Title is required" })
      .min(1, { message: "Title must be at least 3 characters long" }),
     description: z
    .array(z.string().min(1, { message: "Each description must be at least 10 characters long" }))
    .nonempty({ message: "Description is required" }),
    github_link: z.string().url({ message: "Invalid GitHub link" }),
    project_link: z.string().url({ message: "Invalid project link" }),
  }),
});
