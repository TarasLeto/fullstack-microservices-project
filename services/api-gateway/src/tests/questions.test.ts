import request from 'supertest';
import app from '../app';

describe('GET /api/questions', () => {
  it('should return a list of questions', async () => {
    const response = await request(app).get('/api/questions?count=5');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
