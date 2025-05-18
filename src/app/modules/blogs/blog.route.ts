import express, { NextFunction, Request, Response } from 'express';
import { BlogController } from './blog.controller';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

// router.post('/', BlogController.createBlogs);

router.post(
  '/',
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    const data = JSON.parse(req.body.data);
    req.body = data;
    return BlogController.createBlogs(req, res, next);
  },
);

router.get('/', BlogController.getAllBlogs);

// router.put('/:projectId', BlogController.UpdateSingleBlogs);
router.put(
  '/:projectId',
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    const data = JSON.parse(req.body.data);
    req.body = data;
    return BlogController.UpdateSingleBlogs(req, res, next);
  },
);

router.delete('/:projectId', BlogController.DeleteBlogs);

export const BlogsRoutes = router;
