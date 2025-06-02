import express from 'express';
import { createTaskController } from './taskController';
import authMiddleware from '../common/middlewares/authMiddlewares';
const router = express.Router();

router.post(authMiddleware, createTaskController)

export default router;