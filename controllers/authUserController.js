class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async registerUser(req, res) {
    const { email, gender, password, role } = req.body;
    try {
      if (!email || !gender || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      await this.authService.createUser(email, gender, password, role);
      return res.status(200).json({ message: 'User Registered Successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'User registration failed', error: error.message });
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const result = await this.authService.loginUser(email, password);

      if (!result) {
        return res.status(404).json({ message: 'User Not Found' });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = AuthController;
