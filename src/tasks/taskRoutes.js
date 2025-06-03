import express from 'express';
import { createTaskController, deleteTasksController, findTaskByIdController, 
    findTaskByStatusController, updateTaskController} from './taskController.js';
import authMiddleware from '../common/middlewares/authMiddlewares.js';
import validationTaskStatus from '../common/middlewares/validations/validationTaskStatus.js';
import validationDueDateTask from '../common/middlewares/validations/validationDueDataTask.js';
const router = express.Router();

router.post('/', authMiddleware, validationTaskStatus, validationDueDateTask, createTaskController);
router.delete('/:id', authMiddleware, deleteTasksController);
router.get('/:id', authMiddleware, findTaskByIdController);
router.get('/', authMiddleware, findTaskByStatusController);
router.put('/:id', authMiddleware, validationTaskStatus, validationDueDateTask, updateTaskController)

export default router;