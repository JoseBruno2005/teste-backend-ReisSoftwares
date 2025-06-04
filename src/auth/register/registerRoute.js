import express from 'express';
const router = express.Router();
import registerController from '../register/registerController.js';

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Reis Softwares
 *                 description: Nome completo do usuário
 *               email:
 *                 type: string
 *                 format: email
 *                 example: reis@exemplo.com
 *                 description: E-mail único do usuário
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Senha@123
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno do servidor
 */
export default router.post('/register', registerController);