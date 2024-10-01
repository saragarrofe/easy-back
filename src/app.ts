import express, {Express, Request, Response} from 'express';
import recipeRoutes from './routes/recipesRoutes';

const app: Express = express();
app.use(express.json()); // middleware

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Server is running' });
});

app.use('/api/recipes', recipeRoutes);

export default app;