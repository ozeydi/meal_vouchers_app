import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || '', {
    dbName: 'meal_vouchers',
  })
  .then(() => console.log('Mongo connected'))
  .catch((err) => console.error('Mongo error:', err));

export default app;
