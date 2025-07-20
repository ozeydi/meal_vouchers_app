import { useEffect, useState } from 'react';
import { fetchVouchers } from './api/vouchers';
import { Voucher } from './types';
import VoucherForm from './components/VoucherForm';

function App() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);

  const loadVouchers = async () => {
    const res = await fetchVouchers();
    setVouchers(res.data);
  };

  useEffect(() => {
    loadVouchers();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Meal Vouchers</h1>
      <VoucherForm onCreated={loadVouchers} />
    </div>
  );
}

export default App;
