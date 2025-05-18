import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ProjectRoutes } from '../modules/project/project.route';
import { BlogsRoutes } from '../modules/blogs/blog.route';
import { MessageRoutes } from '../modules/message/message.route';
import { ExperienceRoutes } from '../modules/experience/experience_route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path:'/project',
    route:ProjectRoutes
  },
  {
    path:'/blogs',
    route:BlogsRoutes
  },
  {
    path:'/message',
    route:MessageRoutes
  },
  {
    path:'/experience',
    route:ExperienceRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
