const { Users } = require('../models');

class AuthRepository {
  async createUser(email, gender, password, role) {
    try {
      return await Users.create({
        email,
        gender,
        role,
        password,
      });
    } catch (error) {
      throw error;
    }
  }

  async findUserByEmail(email) {
    try {
      return await Users.findOne({ where: { email } });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthRepository;
