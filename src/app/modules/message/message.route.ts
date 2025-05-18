
import express from 'express';
import { MessageController } from './message.controller';


const router = express.Router();

router.post('/', MessageController.createMessage);

router.get('/',MessageController.getAllMessage);


export const MessageRoutes = router;