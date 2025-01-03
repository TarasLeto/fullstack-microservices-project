import mongoose, { Schema, Document } from 'mongoose';

interface IQuestion extends Document {
  question: string;
  options: string[];
  answer: string;
}

const QuestionSchema: Schema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const Question = mongoose.model<IQuestion>('Question', QuestionSchema);

export default Question;
