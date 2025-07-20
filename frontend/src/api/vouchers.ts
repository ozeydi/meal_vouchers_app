import axios from 'axios';
import { Voucher } from '../types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchVouchers = () => api.get<Voucher[]>('/vouchers');
export const createVoucher = (voucher: Voucher) =>
  api.post<Voucher>('/vouchers', voucher);
