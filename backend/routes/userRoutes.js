const express = require('express');

// Controller Functions
const { loginUser, signUpUser } = require('../controllers/userController');

const router = express.Router();

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/signup', signUpUser);

module.exports = router;
