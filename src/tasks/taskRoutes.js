import express from 'express';
import { createTaskController, deleteTasksController, findTaskByIdController, 
    findTaskByStatusController} from './taskController.js';
import authMiddleware from '../common/middlewares/authMiddlewares.js';
const router = express.Router();

router.post('/', authMiddleware, createTaskController);
router.delete('/:id', authMiddleware, deleteTasksController);
router.get('/:id', authMiddleware, findTaskByIdController);
router.get('/', authMiddleware, findTaskByStatusController);

export default router;