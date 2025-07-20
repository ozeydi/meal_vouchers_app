import { useState } from 'react';
import { VoucherInput } from '../types';
import { createVoucher } from '../api/vouchers';

interface Props {
  onCreated: () => void;
}

export default function VoucherForm({ onCreated }: Props) {
  const [form, setForm] = useState<VoucherInput>({
    employeeId: 1,
    date: new Date().toISOString().split('T')[0],
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await createVoucher(form);
      onCreated();
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Error creating voucher');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Voucher</h2>
      <label>
        Employee ID:
        <input
          name='employeeId'
          type='number'
          value={form.employeeId}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Date:
        <input
          name='date'
          type='date'
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
