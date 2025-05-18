import { ProjectController } from './project.controller';
import ValidateRequest from '../../middleware/ValidateRequest';
import { ProjectValidationSchema } from './project.validation';
import express, { NextFunction, Request, Response } from 'express';
import { multerUpload } from '../../config/multer.config';
import AppError from '../../errors/Apperror';
const router = express.Router();

// router.post('/',ValidateRequest(ProjectValidationSchema),ProjectController.createProject);

router.post(
  '/',
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.data) {
        if (req.body.data) {
          const parsedData = JSON.parse(req.body.data);
          req.body = parsedData;
        }
      }
      if (!req.file) {
        const app_Error = new AppError(404, 'images is need');
        return next(app_Error);
      }
      next();
    } catch (error) {
      return next(error);
    }
  },
  ValidateRequest(ProjectValidationSchema),
  ProjectController.createProject,
);

router.get('/', ProjectController.getAllProject);

router.put('/:projectId', ProjectController.UpdateSingleProject);

router.delete('/:projectId', ProjectController.DeleteProject);

export const ProjectRoutes = router;
