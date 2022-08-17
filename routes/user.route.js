/** @format */

// Import express
import express from 'express';
// Import Product Controller
import {
  createUser,
  addFund,
  transferFund,
  withdrawFund,
} from '../controllers/user.controller';

// Init express router
const router = express.Router();

// Route create a new product
router.post('/newUser', createUser);

router.post('/newFund', addFund);

router.post('/sendFund', transferFund);

router.post('/receivedFund', withdrawFund);

// export router
export default router;
