import express from 'express';
import cors from 'cors';
import questionRoutes from './routes/questions';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', questionRoutes);

export default app;
