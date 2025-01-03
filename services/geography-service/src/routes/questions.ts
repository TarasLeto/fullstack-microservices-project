import { Router } from 'express';
import { Question } from '../models/Question';

const router = Router();

router.get('/', async (req, res) => {
  const count = parseInt(req.query.count as string) || 5;

  try {
    const questions = await Question.aggregate([{ $sample: { size: count } }]);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
