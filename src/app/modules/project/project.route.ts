
import express from 'express';
import { ProjectController } from './project.controller';
import ValidateRequest from '../../middleware/ValidateRequest';
import { ProjectValidationSchema } from './project.validation';


const router = express.Router();

router.post('/',ValidateRequest(ProjectValidationSchema),ProjectController.createProject);

router.get('/',ProjectController.getAllProject)


router.put('/:projectId',ProjectController.UpdateSingleProject)

router.delete('/:projectId', ProjectController.DeleteProject)

export const ProjectRoutes = router