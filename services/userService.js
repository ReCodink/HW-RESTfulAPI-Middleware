const UserRepository = require('../repositories/userRepository');

class UserService {
    constructor() {
      this.userRepository = new UserRepository();
    }
  
    async getAllUsers() {
      return this.userRepository.findAll();
    }
  
    async getUserById(id) {
      return this.userRepository.findByPk(id);
    }
  
    async createNewUser(userData) {
      return this.userRepository.create(userData);
    }
  
    async updateUserById(id, userData) {
      return this.userRepository.update(id, userData);
    }
  
    async deleteUserById(id) {
      return this.userRepository.delete(id);
    }
  }
  
  module.exports = UserService;
  