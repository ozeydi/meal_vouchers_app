import { Voucher } from '../types';

interface Props {
  vouchers: Voucher[];
}

export default function VoucherList({ vouchers }: Props) {
  return (
    <div>
      <h2>Existing Vouchers</h2>
      <ul>
        {vouchers.map((v) => (
          <li key={v._id || `${v.employeeId}-${v.date}`}>
            🧾 Employee #{v.employeeId} - {new Date(v.date).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
