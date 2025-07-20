import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import voucherRoutes from './routes/vouchers';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/vouchers', voucherRoutes);

mongoose
  .connect(process.env.MONGO_URI || '', {
    dbName: 'meal_vouchers',
  })
  .then(() => console.log('Mongo connected'))
  .catch((err) => console.error('Mongo error:', err));

export default app;
