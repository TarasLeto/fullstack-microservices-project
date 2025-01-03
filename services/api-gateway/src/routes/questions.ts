import { Router } from 'express';
import { getQuestions } from '../controllers/questionsController';

const router = Router();

router.get('/questions', getQuestions);

export default router;
