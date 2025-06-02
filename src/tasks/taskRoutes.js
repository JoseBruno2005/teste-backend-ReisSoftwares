import express from 'express';
import { createTaskController } from './taskController';
const router = express.Router();

router.post(createTaskController)

export default router;