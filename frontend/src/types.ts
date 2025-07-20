export interface Voucher {
  _id?: string;
  employeeId: number;
  date: string;
}

export interface VoucherInput {
  employeeId: number;
  date: string;
}
