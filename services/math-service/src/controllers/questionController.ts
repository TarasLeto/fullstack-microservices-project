import { Request, Response } from 'express';
import Question from '../models/questionModel';

const getQuestions = async (req: Request, res: Response) => {
  try {
    const count = parseInt(req.query.count as string, 10);
    const questions = await Question.aggregate([{ $sample: { size: count } }]);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

export { getQuestions };
