import loginRoutes from "./auth/login/loginRoutes";

const app = express();
app.use(express.json());

app.use('/auth', loginRoutes);

export default app;