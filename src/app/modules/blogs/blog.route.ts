import express from 'express';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/', BlogController.createBlogs);

router.get('/', BlogController.getAllBlogs);

router.put('/:projectId', BlogController.UpdateSingleBlogs);

router.delete('/:projectId', BlogController.DeleteBlogs);

export const BlogsRoutes = router;
