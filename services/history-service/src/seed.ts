import { AppDataSource } from "./data-source"; 
import { Question } from "./models/Question";

export const seed = async () => {
  const questionRepo = AppDataSource.getRepository(Question);

  const existingQuestions = await questionRepo.count();
  if (existingQuestions > 0) {
    console.log("Seed data already exists. Skipping seeding.");
    return;
  }

  const questions = [
    {
      question: "What was the main cause of the American Civil War?",
      options: ["Slavery", "Taxation", "Territorial Disputes"],
      answer: "Slavery",
    },
    {
      question: "Who wrote the Declaration of Independence?",
      options: ["Thomas Jefferson", "Benjamin Franklin", "George Washington"],
      answer: "Thomas Jefferson",
    },
    {
      question: "In what year did the United States declare independence?",
      options: ["1776", "1783", "1812"],
      answer: "1776",
    },
    {
      question: "Which empire was the largest in history by land area?",
      options: ["Mongol Empire", "British Empire", "Roman Empire"],
      answer: "British Empire",
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Florence Nightingale", "Ada Lovelace"],
      answer: "Marie Curie",
    },
    {
      question: "What was the name of the ship on which the Pilgrims traveled to America?",
      options: ["Mayflower", "Santa Maria", "Endeavour"],
      answer: "Mayflower",
    },
    {
      question: "Which ancient civilization built the Pyramids of Giza?",
      options: ["Egyptian", "Mayan", "Mesopotamian"],
      answer: "Egyptian",
    },
    {
      question: "What historical event is marked by the fall of the Berlin Wall?",
      options: ["End of the Cold War", "Start of World War II", "Reunification of Germany"],
      answer: "End of the Cold War",
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev"],
      answer: "Joseph Stalin",
    },
    {
      question: "Which country gifted the Statue of Liberty to the United States?",
      options: ["France", "United Kingdom", "Germany"],
      answer: "France",
    }    
  ];

  for (const question of questions) {
    await questionRepo.save(question);
  }

  console.log("Seed data added");
  process.exit(0);
};
