const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

// Creating a user schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a static signup method
userSchema.statics.signup = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('Please fill all the fields!');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid!');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough!');
  }

  const isExists = await this.findOne({ email });

  // Check if the Email already used
  if (isExists) {
    throw Error('Email already in use');
  }

  // Salt is a rondom text added to the password to more security
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Store user
  const user = await this.create({ email, password: hash });

  return user;
};

// Create a static Login method
userSchema.statics.login = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('Please fill all the fields!');
  }
  const user = await this.findOne({ email });

  // Check if there is a user
  if (!user) {
    throw Error('Incorrect Email!');
  }

  // Comparing passwoord with hashed password
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect Password!');
  }
  return user;
};
module.exports = mongoose.model('User', userSchema);
