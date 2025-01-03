import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import { Question } from './models/Question';

dotenv.config();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/questions';
export const seedQuestions = async () => {
  await mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 } as ConnectOptions)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

  const questions = [
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      answer: "Vatican City",
    },
    {
      question: "Which continent has the most countries?",
      options: ["Africa", "Asia", "Europe", "South America"],
      answer: "Africa",
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "Which country has the most natural lakes?",
      options: ["Canada", "Russia", "United States", "Brazil"],
      answer: "Canada",
    },
    {
      question: "What is the hottest place on Earth?",
      options: ["Death Valley", "Sahara Desert", "Dasht-e Lut", "Sonoran Desert"],
      answer: "Dasht-e Lut",
    },
    {
      question: "Which is the largest island in the world?",
      options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
      answer: "Greenland",
    },
    {
      question: "What is the deepest point in the world's oceans?",
      options: ["Mariana Trench", "Tonga Trench", "Java Trench", "Puerto Rico Trench"],
      answer: "Mariana Trench",
    },
    {
      question: "Which country has the most time zones?",
      options: ["France", "Russia", "United States", "China"],
      answer: "France",
    },
  ];

  const existingQuestions = await Question.find();
  if (existingQuestions.length > 0) {
    console.log('Questions already exist, skipping data seed');
    return;
  }
  
  await Question.insertMany(questions);
  console.log('Seed data inserted');
  console.log('Question DB Geografy >>> ', Question.find());
  mongoose.disconnect();
};
