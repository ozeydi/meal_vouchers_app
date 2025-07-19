import { Schema, model } from 'mongoose';

const voucherSchema = new Schema({
  employeeId: { type: Number, required: true },
  date: { type: Date, required: true },
  used: { type: Boolean, default: false },
});

voucherSchema.index({ employeeId: 1, date: 1 }, { unique: true });

export default model('Voucher', voucherSchema);
