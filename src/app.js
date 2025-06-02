import express from "express"
import loginRoute from "./auth/login/loginRoute.js";
import registerRoute from "./auth/register/registerRoute.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', loginRoute);
app.use('/auth', registerRoute);


export default app;