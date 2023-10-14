const models = require('../models');
const Users = models.Users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { email, gender, password, role } = req.body;

  try {
    if (!email || !gender || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = await Users.create({
      email,
      gender,
      role,
      password: hashedPassword
    });

    return res.status(200).json({ message: 'User Registered Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'User registration failed', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User Not found.' });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        accessToken: null,
        message: 'Invalid Password!'
      });
    }

    const token = jwt.sign({
      id: user.id
    }, process.env.API_SECRET, {
      expiresIn: '24h'
    });

    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        gender: user.gender,
        role: user.role,
      },
      message: 'Login successful',
      accessToken: token
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  loginUser
};
