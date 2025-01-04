import dotenv from 'dotenv';
dotenv.config();

import nock from 'nock';
import fetchQuestions from '../utils/fetchQuestions';

const MATH_SERVICE_URL = process.env.MATH_SERVICE_URL || 'http://math-service:4001';
const HISTORY_SERVICE_URL = process.env.HISTORY_SERVICE_URL || 'http://history-service:4002';
const GEOGRAPHY_SERVICE_URL = process.env.GEOGRAPHY_SERVICE_URL || 'http://geography-service:4003';

describe('fetchQuestions', () => {
  beforeAll(() => {
    nock(MATH_SERVICE_URL)
      .get('/questions?count=2')
      .reply(200, [
        { question: 'Math Q1', options: [], answer: '' },
        { question: 'Math Q2', options: [], answer: '' },
      ]);

    nock(HISTORY_SERVICE_URL)
      .get('/questions?count=2')
      .reply(200, [
        { question: 'History Q1', options: [], answer: '' },
        { question: 'History Q2', options: [], answer: '' },
      ]);

    nock(GEOGRAPHY_SERVICE_URL)
      .get('/questions?count=2')
      .reply(200, [
        { question: 'Geography Q1', options: [], answer: '' },
        { question: 'Geography Q2', options: [], answer: '' },
      ]);
  });

  afterAll(() => {
    nock.cleanAll();
  });

  it('should fetch questions from all services and return the correct number of questions', async () => {
    const count = 5;
    const questions = await fetchQuestions(count);

    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBe(count);
  });
});
