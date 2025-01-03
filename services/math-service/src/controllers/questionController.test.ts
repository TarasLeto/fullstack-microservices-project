import request from 'supertest';
import { app } from '../server';

describe('GET /questions', () => {
  it('should return questions', async () => {
    const response = await request(app).get('/questions?count=3');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});
