const { Users, Movies } = require('../models');

class PageRepository {
  async getUsersPagination(page, limit) {
    const startIndex = (page - 1) * limit;

    try {
      const { count, rows } = await Users.findAndCountAll({
        limit,
        offset: startIndex
      });

      const results = {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      };

      if (startIndex > 0) {
        results.previousPage = page - 1;
      }

      if (startIndex + limit < count) {
        results.nextPage = page + 1;
      }

      results.results = rows;

      return results;
    } catch (error) {
      throw error;
    }
  }

  async getMoviesPagination(page, limit) {
    const startIndex = (page - 1) * limit;

    try {
      const { count, rows } = await Movies.findAndCountAll({
        limit,
        offset: startIndex
      });

      const results = {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      };

      if (startIndex > 0) {
        results.previousPage = page - 1;
      }

      if (startIndex + limit < count) {
        results.nextPage = page + 1;
      }

      results.results = rows;

      return results;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PageRepository;
