const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/api/users', usersController.getAllUsers);
router.get('/api/users/:id', usersController.getUserById);
router.post('/api/users', usersController.createNewUser);
router.put('/api/users/:id', usersController.updateUserById);
router.delete('/api/users/:id', usersController.deleteUserById);
module.exports = router;

// /**
//  * @swagger
//  * /api/users:
//  *   get:
//  *     summary: Mendapatkan daftar pengguna
//  *     description: Mengambil daftar semua pengguna yang terdaftar.
//  *     responses:
//  *       '200':
//  *         description: Daftar pengguna berhasil diambil
//  *       '500':
//  *         description: Kesalahan server
//  */

// /**
//  * @swagger
//  * /api/users/{id}:
//  *   get:
//  *     summary: Mendapatkan pengguna berdasarkan ID
//  *     description: Mengambil detail pengguna berdasarkan ID yang diberikan.
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         description: ID pengguna yang akan diambil
//  *         required: true
//  *         type: integer
//  *     responses:
//  *       '200':
//  *         description: Detail pengguna berhasil diambil
//  *       '404':
//  *         description: Pengguna tidak ditemukan
//  *       '500':
//  *         description: Kesalahan server
//  */

// /**
//  * @swagger
//  * /api/users:
//  *   post:
//  *     summary: Membuat pengguna baru
//  *     description: Membuat pengguna baru dengan informasi yang diberikan.
//  *     requestBody:
//  *       description: Data pengguna baru
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: './schema/schemaUsers.json#/components/schemas/User'
//  *     responses:
//  *       '201':
//  *         description: Pengguna baru berhasil dibuat
//  *       '400':
//  *         description: Permintaan tidak valid
//  *       '500':
//  *         description: Kesalahan server
//  */

// /**
//  * @swagger
//  * /api/users/{id}:
//  *   put:
//  *     summary: Mengupdate pengguna berdasarkan ID
//  *     description: Mengupdate detail pengguna berdasarkan ID yang diberikan.
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         description: ID pengguna yang akan diupdate
//  *         required: true
//  *         type: integer
//  *     requestBody:
//  *       description: Data pengguna yang akan diupdate
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: './schema/schemaUsers.json#/components/schemas/User'
//  *     responses:
//  *       '200':
//  *         description: Pengguna berhasil diupdate
//  *       '404':
//  *         description: Pengguna tidak ditemukan
//  *       '400':
//  *         description: Permintaan tidak valid
//  *       '500':
//  *         description: Kesalahan server
//  */

// /**
//  * @swagger
//  * /api/users/{id}:
//  *   delete:
//  *     summary: Menghapus pengguna berdasarkan ID
//  *     description: Menghapus pengguna berdasarkan ID yang diberikan.
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         description: ID pengguna yang akan dihapus
//  *         required: true
//  *         type: integer
//  *     responses:
//  *       '204':
//  *         description: Pengguna berhasil dihapus
//  *       '404':
//  *         description: Pengguna tidak ditemukan
//  *       '500':
//  *         description: Kesalahan server
//  */
