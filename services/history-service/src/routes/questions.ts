import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Question } from "../models/Question";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const count = parseInt(req.query.count as string) || 5;
    const questions = await AppDataSource.getRepository(Question)
      .createQueryBuilder("question")
      .orderBy("RANDOM()")
      .limit(count)
      .getMany();

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ error });
  }
});

export default router;
