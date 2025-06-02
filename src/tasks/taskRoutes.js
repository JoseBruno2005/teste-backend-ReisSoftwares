import express from 'express';
import { createTaskController, deleteTasksController, listTasksController } from './taskController.js';
import authMiddleware from '../common/middlewares/authMiddlewares.js';
const router = express.Router();

router.post('/', authMiddleware, createTaskController)
router.get('/', authMiddleware, listTasksController)
router.delete('/:id', authMiddleware, deleteTasksController)

export default router;