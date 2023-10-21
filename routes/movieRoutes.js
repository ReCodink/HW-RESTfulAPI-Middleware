const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authJWT');
const MovieService = require('../services/movieService');
const MovieController = require('../controllers/moviesController');
const upload = require('../middleware/multer');
const movieService = new MovieService();
const movieController = new MovieController(movieService);

// Rute untuk mendapatkan semua film
router.get('/api/movies', verifyToken, (req, res) => movieController.getAllMovies(req, res));

// Rute untuk mendapatkan film berdasarkan ID
router.get('/api/movies/:id', verifyToken, (req, res) => movieController.getMovieById(req, res));

// Rute untuk membuat film baru
router.post('/api/movies', verifyToken, (req, res) => movieController.createNewMovie(req, res));

// Rute untuk mengupdate film berdasarkan ID
router.put('/api/movies/:id', verifyToken, (req, res) => movieController.updateMovieById(req, res));

// Rute untuk menghapus film berdasarkan ID
router.delete('/api/movies/:id', verifyToken, (req, res) => movieController.deleteMovieById(req, res));

// Rute untuk mengupload foto film berdasarkan ID
router.put('/api/movies/upload/:id', verifyToken, upload.single('photo'), (req, res) => movieController.uploadMovieById(req, res));

module.exports = router;
