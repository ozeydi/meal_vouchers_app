import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import Voucher from '../models/voucher';

describe('Voucher Routes', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI as string);
  });

  afterEach(async () => {
    await Voucher.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return 201 when voucher is created', async () => {
    const res = await request(app)
      .post('/api/vouchers')
      .send({ employeeId: '110', date: '2025-07-05' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('employeeId', '110');
  });
});
