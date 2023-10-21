const MovieRepository = require('../repositories/movieRepository');

class MovieService {
  constructor() {
    this.movieRepository = new MovieRepository();
  }

  async getAllMovies() {
    try {
      return await this.movieRepository.getAllMovies();
    } catch (error) {
      throw error;
    }
  }

  async getMovieById(id) {
    try {
      return await this.movieRepository.getMovieById(id);
    } catch (error) {
      throw error;
    }
  }

  async createMovie(movieData) {
    try {
      return await this.movieRepository.createMovie(movieData);
    } catch (error) {
      throw error;
    }
  }

  async updateMovie(id, movieData) {
    try {
      return await this.movieRepository.updateMovie(id, movieData);
    } catch (error) {
      throw error;
    }
  }

  async deleteMovie(id) {
    try {
      return await this.movieRepository.deleteMovie(id);
    } catch (error) {
      throw error;
    }
  }

  async uploadMoviePhoto(id, filePath) {
    try {
      return await this.movieRepository.uploadMoviePhoto(id, filePath);
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = MovieService;
