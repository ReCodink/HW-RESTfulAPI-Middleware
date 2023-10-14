const express = require('express');
const router = express.Router();
const models = require('../models'); // Pastikan penamaan direktori benar
const Users = models.Users; // Sesuaikan dengan model yang ada di direktori models
const Movies = models.Movies; // Sesuaikan dengan model yang ada di direktori models
const paginationController = require('../controllers/paginationController'); // Pastikan penamaan berkas benar
const verifyToken = require('../middleware/authJWT');


// Endpoint untuk mendapatkan user dengan pagination
router.get("/api/users/paginate", verifyToken, paginationController.getUsersPagination(Users), (req, res) => {
    res.json(res); // Menggunakan res.json() untuk mengirim hasil
});

// Endpoint untuk mendapatkan movies dengan pagination
router.get("/api/movies/paginate", verifyToken, paginationController.getMoviesPagination(Movies), (req, res) => {
    res.json(res); // Menggunakan res.json() untuk mengirim hasil
});

module.exports = router;


// Anotasi Swagger

/**
 * @swagger
 * /api/pagination/api/users/paginate:
 *   get:
 *     summary: Mendapatkan daftar pengguna dengan paginasi
 *     description: Mengambil daftar pengguna dengan paginasi.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         type: integer
 *       - in: query
 *         name: limit
 *         type: integer
 *     responses:
 *       '200':
 *         description: Daftar pengguna berhasil diambil dengan paginasi
 *       '401':
 *         description: Unauthorized Access
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/pagination/api/movies/paginate:
 *   get:
 *     summary: Mendapatkan daftar film dengan paginasi
 *     description: Mengambil daftar film dengan paginasi.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         type: integer
 *         required: true
 *       - in: query
 *         name: limit
 *         type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: Daftar film berhasil diambil dengan paginasi
 *       '401':
 *         description: Unauthorized Access
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Judul film
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *           description: Genre-genre film
 *         year:
 *           type: integer
 *           description: Tahun rilis film
 *       required:
 *         - title
 *         - genres
 *         - year
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Alamat email pengguna
 *         gender:
 *           type: string
 *           description: Gender pengguna
 *         password:
 *           type: string
 *           description: Password pengguna
 *         role:
 *           type: string
 *           description: Peran pengguna
 *       required:
 *         - email
 *         - gender
 *         - password
 *         - role
 */
