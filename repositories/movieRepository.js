const { Movies } = require('../models');

class MovieRepository {
  async getAllMovies() {
    try {
      return await Movies.findAll();
    } catch (error) {
      throw error;
    }
  }

  async getMovieById(id) {
    try {
      return await Movies.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async createMovie(movieData) {
    try {
      return await Movies.create(movieData);
    } catch (error) {
      throw error;
    }
  }

  async updateMovie(id, movieData) {
    try {
      const movie = await Movies.findByPk(id);
      if (!movie) {
        return null;
      }
      await Movies.update(movieData, { where: { id } });
      return movie;
    } catch (error) {
      throw error;
    }
  }

  async deleteMovie(id) {
    try {
      const movie = await Movies.findByPk(id);
      if (!movie) {
        return null;
      }
      await movie.destroy();
      return movie;
    } catch (error) {
      throw error;
    }
  }

  async uploadMoviePhoto(id, filePath) {
    try {
      const movie = await Movies.findByPk(id);
      if (!movie) {
        return null;
      }
      await Movies.update(
        { photo: filePath },
        { where: { id } }
      );
      return movie;
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = MovieRepository;
