import loginRoute from "./auth/login/loginRoute";
import registerRoute from "./auth/register/registerRoute";

const app = express();
app.use(express.json());

app.use('/auth', loginRoute);
app.use('/auth', registerRoute);


export default app;