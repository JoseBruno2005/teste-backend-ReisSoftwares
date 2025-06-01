import express from 'express'
const router = express.Router();
import loginController from "./loginController.js";

export default router.post('/login', loginController);