/** @format */

const db = require('../config/database');

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await db('user')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .select();
    return res.status(201).json({
      message: 'New user created',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addFund = async (req, res) => {
  try {
    const { amount } = req.body;
    const userFund = await db('wallet').insert({
      amount: amount,
    });
    return res.status(201).json({
      message: 'New fund added',
      userFund,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const transferFund = async (req, res) => {
  try {
    const { amount, total } = req.body;
    const sendFund = await db('wallet').insert({
      amount: amount,
      total: total,
    });
    total = newAmount - amount;
    return res.status(201).json({
      message: 'Fund was sent',
      sendFund,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const withdrawFund = async (req, res) => {
  try {
    const { amount, total } = req.body;
    const receivedFund = await db('wallet').insert({
      amount: amount,
      total: total,
    });
    if (total < 0) {
      return res.status(201).json({
        message: 'Fund was received',
        receivedFund,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export { createUser, addFund, transferFund, withdrawFund };
