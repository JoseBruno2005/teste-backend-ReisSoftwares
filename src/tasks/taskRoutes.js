import express from 'express';
import { createTaskController } from './taskController.js';
import authMiddleware from '../common/middlewares/authMiddlewares.js';
const router = express.Router();

router.post('/', authMiddleware, createTaskController)

export default router;