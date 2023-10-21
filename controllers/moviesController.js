class MovieController {
  constructor(movieService) {
    this.movieService = movieService
  }

  async getAllMovies(req, res) {
    try {
      const movies = await this.movieService.getAllMovies();
      return res.json({ data: movies });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getMovieById(req, res) {
    const id = req.params.id;
    try {
      const movie = await this.movieService.getMovieById(id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie Not found' });
      }
      return res.json({ data: movie });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async createNewMovie(req, res) {
    const movieData = req.body;
    try {
      await this.movieService.createMovie(movieData);
      return res.status(201).json({ message: 'Movie Created Successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateMovieById(req, res) {
    const id = req.params.id;
    const movieData = req.body;
    try {
      const movie = await this.movieService.updateMovie(id, movieData);
      if (!movie) {
        return res.status(404).json({ message: 'Movie Not Found' });
      }
      return res.status(200).json({ message: `Movie Updated Successfully at ID: ${id}` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteMovieById(req, res) {
    const id = req.params.id;
    try {
      const movie = await this.movieService.deleteMovie(id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie Not Found' });
      }
      return res.status(200).json({ message: `Movie Deleted Successfully at ID: ${id}` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async uploadMovieById(req, res) {
    const id = req.params.id;
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
      const movie = await this.movieService.uploadMoviePhoto(id, req.file.path);
      if (!movie) {
        return res.status(404).json({ message: 'Movie Not Found' });
      }
      return res.status(200).json({ message: `Photo Movies uploaded Successfully at ID: ${id}` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
}

module.exports = MovieController;
