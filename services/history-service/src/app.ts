import "reflect-metadata";
import express from "express";
import { json } from "body-parser";
import { AppDataSource } from "./data-source";
import questionsRouter from "./routes/questions";
import dotenv from "dotenv";
import { seed } from "./seed";

dotenv.config();

const app = express();

app.use(json());
app.use("/questions", questionsRouter);

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected to the database")
    await seed();
  })
  .catch((err) => console.error("Database connection failed:", err));

export default app;
