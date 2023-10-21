class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async getAllUsers(req, res) {
      try {
        const users = await this.userService.getAllUsers();
        return res.json({ data: users });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  
    async getUserById(req, res) {
      const id = req.params.id;
      try {
        const user = await this.userService.getUserById(id);
        if (!user) {
          return res.status(404).json({ message: 'User Not Found' });
        }
        return res.json({ data: user });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  
    async createNewUser(req, res) {
      const userData = req.body;
      try {
        await this.userService.createNewUser(userData);
        return res.status(201).json({ message: 'User Created Successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  
    async updateUserById(req, res) {
      const id = req.params.id;
      const userData = req.body;
      try {
        const user = await this.userService.updateUserById(id, userData);
        if (!user) {
          return res.status(404).json({ message: 'User Not Found' });
        }
        return res.status(200).json({ message: `User Updated Successfully at ID: ${id}` });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  
    async deleteUserById(req, res) {
      const id = req.params.id;
      try {
        const user = await this.userService.deleteUserById(id);
        if (!user) {
          return res.status(404).json({ message: 'User Not Found' });
        }
        return res.status(200).json({ message: `User Deleted Successfully at ID: ${id}` });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }
  
  module.exports = UserController;
  