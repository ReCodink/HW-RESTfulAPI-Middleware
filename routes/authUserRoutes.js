const express = require('express');
const router = express.Router();
const AuthService = require('../services/authService');
const AuthController = require('../controllers/authUserController');

const authService = new AuthService();
const authController = new AuthController(authService);

// Rute untuk registrasi pengguna
router.post('/api/users/register', (req, res) => authController.registerUser(req, res));

// Rute untuk login pengguna
router.post('/api/users/login', (req, res) => authController.loginUser(req, res));

module.exports = router;
