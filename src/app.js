import express from "express"
import loginRoute from "./auth/login/loginRoute.js";
import registerRoute from "./auth/register/registerRoute.js";
import taskRoutes from "./tasks/taskRoutes.js"
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', loginRoute);
app.use('/auth', registerRoute);
app.use('/task', taskRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;