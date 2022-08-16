const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create json web token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
};
// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Login a user in the DB
    const user = await User.login(email, password);
    // Create a token
    const token = createToken(user._id);
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Signup user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a user in the DB
    const user = await User.signup(email, password);
    // Create a token
    const token = createToken(user._id);
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
