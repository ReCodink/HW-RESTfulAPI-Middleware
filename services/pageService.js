const PageRepository = require('../repositories/pageRepository');

class PageService {
  constructor() {
    this.pageRepository = new PageRepository();
  }

  async getUsersPagination(page, limit) {
    return this.pageRepository.getUsersPagination(page, limit);
  }

  async getMoviesPagination(page, limit) {
    return this.pageRepository.getMoviesPagination(page, limit);
  }
}

module.exports = PageService;
