import axios from 'axios';
import { Question } from '../types/question';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchQuestions = async (count: number): Promise<Question[]> => {
  const response = await axios.get(`${API_URL}/questions?count=${count}`);
  return response.data;
};
