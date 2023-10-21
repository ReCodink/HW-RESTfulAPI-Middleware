const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authJWT');

const PageService = require('../services/pageService'); // Gantilah dengan path yang sesuai dengan struktur folder Anda
const PaginationController = require('../controllers/paginationController'); // Gantilah dengan path yang sesuai dengan struktur folder Anda

const pageService = new PageService();
const paginationController = new PaginationController(pageService);

// Rute untuk mendapatkan data pengguna dengan paginasi
router.get('/api/pagination/users/paginate', (req, res) => paginationController.getUsersPagination(req, res));

// Rute untuk mendapatkan data film dengan paginasi
router.get('/api/pagination/movies/paginate', (req, res) => paginationController.getMoviesPagination(req, res));

module.exports = router;
