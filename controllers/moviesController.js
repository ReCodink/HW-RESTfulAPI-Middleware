const models = require('../models');
const Movies = models.Movies;

const getAllMovies = async (request, response) => {
    try {
        const movies = await Movies.findAll();
        return response.json({
            data: movies
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const getMovieById = async (request, response) => {
    const id = request.params.id;
    try {
        const movie = await Movies.findByPk(id);
        if (!movie) {
            return response.status(404).json({
                message: 'Movie Not found'
            });
        }
        return response.json({
            data: movie
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const createNewMovie = async (request, response) => {
    try {
        const movie = await Movies.create(request.body);
        return response.status(201).json({
            message: 'Movie Created Successfully'
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const updateMovieById = async (request, response) => {
    const id = request.params.id;
    try {
        const movie = await Movies.findByPk(id);
        if (!movie) {
            return response.status(404).json({
                message: 'Movie Not Found'
            });
        }
        await Movies.update(request.body, { where: { id: id } });
        return response.status(200).json({
            message: `Movie Updated Successfully at ID: ${id}`
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const deleteMovieById = async (request, response) => {
    const id = request.params.id;
    try {
        const movie = await Movies.findByPk(id);
        if (!movie) {
            return response.status(404).json({
                message: 'Movie Not Found'
            });
        }
        await movie.destroy();
        return response.status(200).json({
            message: `Movie Deleted Successfully at ID: ${id}`
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    createNewMovie,
    getAllMovies,
    getMovieById,
    deleteMovieById,
    updateMovieById
};
