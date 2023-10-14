const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware/authJWT');
const { registerUser, loginUser } = require('../controllers/authUserController');

// Define your routes
router.post("/api/users/register", registerUser);
router.post("/api/users/login", loginUser);

router.get("/hiddenContent", verifyToken, function (req, res) {
    if (req.user) {
        // User is authenticated
        if (req.user.role === "Construction Worker" || req.user.role === "Engineer" || req.user.role === "Architect" || req.user.role === "Electrician") {
            res.status(200).send({ message: "Congratulations! but there is no hidden content" });
        } else {
            res.status(403).send({ message: "Unauthorized Access" });
        }
    } else {
        res.status(403).send({ message: "Invalid JWT Token" });
    }
});

module.exports = router;

// Swagger documentation
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Mendaftarkan pengguna baru
 *     description: Mendaftarkan pengguna baru dengan informasi yang diberikan.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Pengguna berhasil terdaftar
 *       400:
 *         description: Permintaan tidak valid
 *       500:
 *         description: Kesalahan server
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login pengguna
 *     description: Login pengguna dengan kredensial yang diberikan.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login berhasil
 *       401:
 *         description: Tidak ada izin atau kredensial tidak valid
 *       500:
 *         description: Kesalahan server
 */

// /**
//  * @swagger
//  * /hiddenContent:
//  *   get:
//  *     summary: Mendapatkan konten tersembunyi
//  *     description: Mengambil konten tersembunyi, hanya dapat diakses oleh pengguna yang terotentikasi.
//  *     responses:
//  *       '200':
//  *         description: Konten tersembunyi berhasil diambil
//  *       '401':
//  *         description: Tidak ada izin atau kredensial tidak valid
//  *       '403':
//  *         description: Akses tidak diizinkan
//  *       '500':
//  *         description: Kesalahan server
//  */

/**
 * @swagger
 * components:
 *   schemas:
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

