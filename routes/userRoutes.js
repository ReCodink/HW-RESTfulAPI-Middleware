const express = require('express');
const router = express.Router();
const UserService = require('../services/userService'); // Gantilah dengan path yang sesuai dengan struktur folder Anda
const UserController = require('../controllers/usersController'); // Gantilah dengan path yang sesuai dengan struktur folder Anda
const verifyToken = require('../middleware/authJWT');

const userService = new UserService();
const userController = new UserController(userService);

// Rute untuk mendapatkan semua pengguna
router.get('/api/users', verifyToken, userController.getAllUsers);

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/api/users/:id', verifyToken, userController.getUserById);

// Rute untuk membuat pengguna baru
router.post('/api/users', verifyToken, userController.createNewUser);

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/api/users/:id', verifyToken, userController.updateUserById);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/api/users/:id', verifyToken, userController.deleteUserById);

module.exports = router;
