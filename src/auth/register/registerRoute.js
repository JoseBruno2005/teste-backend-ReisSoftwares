import express from 'express';
const router = express.Router();
import registerController from '../register/registerController.js';

export default router.post('/register', registerController);