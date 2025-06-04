import express from 'express';
import { createTaskController, deleteTasksController, findTaskByIdController, 
    findTaskByStatusController, updateTaskController} from './taskController.js';
import authMiddleware from '../common/middlewares/authMiddlewares.js';
import validationTaskStatus from '../common/middlewares/validations/validationTaskStatus.js';
import validationDueDateTask from '../common/middlewares/validations/validationDueDataTask.js';
const router = express.Router();

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Realiza cadastro de uma tarefa
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Concluir Desafio
 *               description:
 *                 type: string
 *                 example: Desafio API Rest de gerenciamento de tarefas
 *               status:
 *                 type: string
 *                 example: pending || completed
 *               dueDate:
 *                 type: date
 *                 example: 2025-06-03
 *  
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', authMiddleware, validationTaskStatus, validationDueDateTask, createTaskController);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Deleta uma tarefa pelo id
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser deletada
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', authMiddleware, deleteTasksController);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Busca uma tarefa pelo id
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser deletada
 *     responses:
 *       200:
 *         description: Tarefa encontrada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', authMiddleware, findTaskByIdController);

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Filtra as tarefas por status. Se não for passado o status, retorna todas as tarefas.
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         required: false
 *         description: Status da tarefa
 *     responses:
 *       200:
 *         description: Tarefas encontradas com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', authMiddleware, findTaskByStatusController);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Realiza atualização dos campos title, description, status e dueDate de uma tarefa
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser deletada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Concluir Desafio
 *               description:
 *                 type: string
 *                 example: Desafio API Rest de gerenciamento de tarefas
 *               status:
 *                 type: string
 *                 example: pending || completed
 *               dueDate:
 *                 type: date
 *                 example: 2025-06-03
 *  
 *     responses:
 *       201:
 *         description: Tarefa atualizada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/:id', authMiddleware, validationTaskStatus, validationDueDateTask, updateTaskController)

export default router;