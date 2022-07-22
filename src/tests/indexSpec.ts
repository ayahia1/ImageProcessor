import supertest from 'supertest';
import app from '../index';
const request = supertest(app);

describe('Testing Image processing Api', (): void => {
  it('Testing that the endpoint /api/ connects', async (): Promise<void> => {
    const response = await request.get('/api/');
    expect(response.statusCode).toBe(200);
  });

  it('Testing that processing images with /api/images/ works for the fisrt time', async (): Promise<void> => {
    const response = await request.get('/api/images?name=fjord&height=200&width=200');
    expect(response.type).toBe('image/jpeg');
  });

  it('Testing that processing images with /api/images/ works for subsequent calls', async (): Promise<void> => {
    const response = await request.get('/api/images?name=fjord&height=200&width=200');
    expect(response.type).toBe('image/jpeg');
  });

  it('Testing that the endpoint checks the existence of the width parameter', async (): Promise<void> => {
    const response = await request.get('/api/images?name=fjord&height=200');
    expect(response.statusCode).toBe(400);
  });

  it('Testing that endpoint verify that the givn width is numerical positive number', async (): Promise<void> => {
    const response = await request.get('/api/images?name=fjord&height=200&width=-1');
    expect(response.statusCode).toBe(400);
  });

  it('Testing that endpoint verify that the file name exists in the original images folder', async (): Promise<void> => {
    const response = await request.get('/api/images?name=randomName&height=200&width=200');
    expect(response.statusCode).toBe(400);
  });
});
