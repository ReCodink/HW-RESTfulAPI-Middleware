const express = require('express');
const moviesController = require('../controllers/moviesController');
const verifyToken = require('../middleware/authJWT');
const router = express.Router(); // Pindahkan definisi router di sini


router.get('/api/movies', verifyToken, moviesController.getAllMovies);

router.get('/api/movies/:id', verifyToken, moviesController.getMovieById);

router.post('/api/movies', verifyToken, moviesController.createNewMovie);
router.put('/api/movies/:id', verifyToken, moviesController.updateMovieById);


router.delete('/api/movies/:id', verifyToken, moviesController.deleteMovieById);

module.exports = router;

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Mendapatkan daftar film
 *     description: Mengambil daftar semua film yang tersedia.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Daftar film berhasil diambil
 *       '401':
 *         description: Unauthorized Access
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Mendapatkan film berdasarkan ID
 *     description: Mengambil detail film berdasarkan ID yang diberikan.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID film yang akan diambil
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Detail film berhasil diambil
 *       '401':
 *         description: Unauthorized Access
 *       '404':
 *         description: Film tidak ditemukan
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Membuat film baru
 *     description: Membuat film baru dengan informasi yang diberikan.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Data film baru
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '201':
 *         description: Film baru berhasil dibuat
 *       '400':
 *         description: Permintaan tidak valid
 *       '401':
 *         description: Unauthorized Access
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Mengupdate film berdasarkan ID
 *     description: Mengupdate detail film berdasarkan ID yang diberikan.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID film yang akan diupdate
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Data film yang akan diupdate
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '200':
 *         description: Film berhasil diupdate
 *       '400':
 *         description: Permintaan tidak valid
 *       '401':
 *         description: Unauthorized Access
 *       '404':
 *         description: Film tidak ditemukan
 *       '500':
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Menghapus film berdasarkan ID
 *     description: Menghapus film berdasarkan ID yang diberikan.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID film yang akan dihapus
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Film berhasil dihapus
 *       '401':
 *         description: Unauthorized Access
 *       '404':
 *         description: Film tidak ditemukan
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
 *              type: string
 *           description: Genre-genre film
 *         year:
 *           type: integer
 *           description: Tahun rilis film
 *       required:
 *         - title
 *         - genres
 *         - year
 */
