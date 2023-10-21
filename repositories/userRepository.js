const models = require('../models');

class UserRepository {
  constructor() {
    this.Users = models.Users;
  }

  async findAll() {
    return this.Users.findAll();
  }

  async findByPk(id) {
    return this.Users.findByPk(id);
  }

  async create(userData) {
    return this.Users.create(userData);
  }

  async update(id, userData) {
    const user = await this.Users.findByPk(id);
    if (!user) return null;
    return user.update(userData);
  }

  async delete(id) {
    const user = await this.Users.findByPk(id);
    if (!user) return null;
    return user.destroy();
  }
}

module.exports = UserRepository;
