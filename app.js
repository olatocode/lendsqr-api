/** @format */

import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use cors
app.use(cors());
const port = process.env.PORT;

// Home page base url
app.get('/', (req, res) => {
  res.send({
    Home: 'Welcome To lensqr api!',
  });
});


// connect to server
app.listen(port, () => {
  console.log(`lendsqr-api is running on port ${port}`);
});
