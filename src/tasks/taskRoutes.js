import express from 'express';
import { createTaskController, deleteTasksController, findTaskByIdController, listTasksController } from './taskController.js';
import authMiddleware from '../common/middlewares/authMiddlewares.js';
const router = express.Router();

router.post('/', authMiddleware, createTaskController);
router.get('/', authMiddleware, listTasksController);
router.delete('/:id', authMiddleware, deleteTasksController);
router.get('/:id', authMiddleware, findTaskByIdController);

export default router;