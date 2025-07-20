import { createVoucher, getVouchers } from '../controllers/voucherController';
import Voucher from '../models/voucher';
jest.mock('../models/voucher');

describe('Voucher Controller', () => {
  afterEach(() => jest.clearAllMocks());

  it('should create a voucher successfully', async () => {
    const req: any = {
      body: { employeeId: '123', date: '2025-07-19' },
    };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    (Voucher.create as jest.Mock).mockResolvedValue(req.body);

    await createVoucher(req, res);

    expect(Voucher.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
