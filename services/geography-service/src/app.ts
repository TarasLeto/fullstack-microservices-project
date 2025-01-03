import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import questionRoutes from './routes/questions';
import { seedQuestions } from './seed';

dotenv.config();

const app = express();
const port = process.env.PORT || 4003;

app.use(cors());
app.use(express.json());

seedQuestions();

app.use('/questions', questionRoutes);

app.listen(port, () => {
  console.log(`Geography service running on PORT: ${port}`);
});
