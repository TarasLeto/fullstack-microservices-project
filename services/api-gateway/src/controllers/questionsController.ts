import { Request, Response } from 'express';
import fetchQuestions from '../utils/fetchQuestions';

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const count = parseInt(req.query.count as string, 10) || 5;
    const questions = await fetchQuestions(count);
    res.json(questions);
  } catch (error) {

    res.status(500).json({ error });
  }
};
