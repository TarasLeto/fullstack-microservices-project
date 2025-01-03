import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import questionRoutes from './routes/questionRoutes';
import { populateData } from './populateData';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

populateData();

app.use('/questions', questionRoutes);

app.listen(4001, () => {
  console.log('Math service running on port 4001');
});

export { app };
