import express, { Request, Response} from 'express';
import userRoutes from './routes/userRoutes';
import { logger } from './middlewares/logger';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use(logger);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server runnin on http://localhost:${port}`);
});

export default app;