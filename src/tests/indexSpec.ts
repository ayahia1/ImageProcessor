import supertest from 'supertest';
import app from '../index';
const request = supertest(app);

describe('Testing Image processing Api', (): void => {
  it('Testing that the endpoint /api/images/ works', async () => {
    const response = await request.get('/api/images');
    expect(response.statusCode).toBe(200);
  });

  it('Testing that processing images with /api/images/ works', async () => {
    const response = await request.get('/api/images?name=fjord&height=200&width=200');
    expect(response.type).toBe('image/jpeg');
  });
});
