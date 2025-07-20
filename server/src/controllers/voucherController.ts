import { Request, Response } from 'express';
import Voucher from '../models/voucher';

export const createVoucher = async (req: Request, res: Response) => {
  const { employeeId, date } = req.body;
  try {
    const voucher = await Voucher.create({ employeeId, date });
    res.status(201).json(voucher);
  } catch (err) {
    res.status(400).json({ error: 'Voucher may already exist or bad data' });
  }
};

export const getVouchers = async (_req: Request, res: Response) => {
  const vouchers = await Voucher.find().sort({ date: -1 });
  res.json(vouchers);
};
