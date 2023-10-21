const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repositories/authRepository');

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
  }

  async createUser(email, gender, password, role) {
    try {
      const hashedPassword = bcrypt.hashSync(password, 8);
      return await this.authRepository.createUser(email, gender, hashedPassword, role);
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      const user = await this.authRepository.findUserByEmail(email);

      if (!user) {
        return null;
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return {
          accessToken: null,
          message: 'Invalid Password!',
        };
      }

      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.API_SECRET,
        {
          expiresIn: '24h',
        }
      );

      return {
        user: {
          id: user.id,
          email: user.email,
          gender: user.gender,
          role: user.role,
        },
        message: 'Login successful',
        accessToken: token,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
