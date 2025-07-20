import mongoose from 'mongoose';
import Voucher from './voucher';
import {
  beforeAll,
  afterEach,
  afterAll,
  describe,
  it,
  expect,
} from '@jest/globals';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
});

afterEach(async () => {
  await Voucher.deleteMany({});
});

afterAll(async () => {
  if (mongoose.connection.db) {
    await mongoose.connection.db.dropDatabase();
  }
  await mongoose.disconnect();
});

describe('Voucher Model', () => {
  it('should create a valid voucher', async () => {
    const voucher = new Voucher({ employeeId: 'emp1', date: '2025-07-20' });
    const saved = await voucher.save();

    expect(saved._id).toBeDefined();
    expect(saved.employeeId).toBe('emp1');
  });

  it('should not allow duplicate employeeId + date', async () => {
    await Voucher.create({ employeeId: 'emp2', date: '2025-07-21' });

    await expect(
      Voucher.create({ employeeId: 'emp2', date: '2025-07-21' })
    ).rejects.toThrow(/duplicate key/);
  });

  it('should fail if required fields are missing', async () => {
    const voucher = new Voucher({});
    let err;

    try {
      await voucher.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    if (err && typeof err === 'object' && 'errors' in err) {
      const errors = (err as { errors: any }).errors;
      expect(errors.employeeId).toBeDefined();
      expect(errors.date).toBeDefined();
    }
  });
});
