import mongoose from 'mongoose';
import connectDB from './config/db';
import Question from './models/questionModel';

const sampleQuestions = [
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'What is 5 * 6?',
    options: ['30', '25', '40', '50'],
    answer: '30'
  },
  {
    question: 'What is 12 / 3?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'What is 7 - 3?',
    options: ['2', '3', '4', '5'],
    answer: '4'
  }
];

export const populateData = async () => {
  try {
    await connectDB();

    const existingQuestions = await Question.find();
    if (existingQuestions.length > 0) {
      console.log('Questions already exist, skipping data population');
      return;
    }

    await Question.insertMany(sampleQuestions);
    console.log('Sample data inserted successfully');
    console.log('Question DB Math >>> ', Question.find());
    mongoose.connection.close();
  } catch (error) {
    console.error('Error populating data:', error);
    mongoose.connection.close();
  }
};
