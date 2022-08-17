/** @format */
import userRouter from './routes/user.route';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
const db = require('./config/database');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use cors
app.use(cors());
const port = process.env.PORT;

db;

// Home page base url
app.get('/', (req, res) => {
  res.send({
    Home: 'Welcome To lensqr api!',
  });
});

app.use('/api/v1', userRouter);

// connect to server
app.listen(port, () => {
  console.log(`lendsqr-api is running on port ${port}`);
});
