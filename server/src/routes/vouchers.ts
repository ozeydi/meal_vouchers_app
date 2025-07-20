import { Router } from 'express';
import { createVoucher, getVouchers } from '../controllers/voucherController';

const router = Router();

router.post('/', createVoucher);
router.get('/', getVouchers);

export default router;
