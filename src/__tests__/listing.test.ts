import request from 'supertest';
import app from '../app';

describe('Listing API Endpoints', () => {
  it('should add a new listing', async () => {
    const res = await request(app)
      .post('/listings')
      .send({ id: '1', title: 'House', price: 200000, description: 'Beautiful house for sale' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('Added');
  });

  it('should retrieve all listings', async () => {
    const res = await request(app).get('/listings');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete a listing', async () => {
    const res = await request(app).delete('/listings/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Deleted');
  });

  it('should return 404 if listing to delete is not found', async () => {
    const res = await request(app).delete('/listings/invalid_id');
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual('Not found');
  });
  it('should return an error if price is passed as a string', async () => {
    const res = await request(app)
      .post('/listings')
      .send({ id: '1', title: 'House', price: '200000', description: 'Beautiful house for sale' }); // Passing price as a string
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('Price is not a number');
  });
});