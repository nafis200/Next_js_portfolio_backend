import express from "express";
import { ExperienceController } from "./experience_controller";


const router = express.Router();

router.post("/", ExperienceController.createExperience);
router.get("/", ExperienceController.getAllExperience);
router.delete("/:id", ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
