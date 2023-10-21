class PaginationController {
  constructor(pageService) {
    this.pageService = pageService;
  }

  async getUsersPagination(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
      const results = await this.pageService.getUsersPagination(page, limit);
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getMoviesPagination(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
      const results = await this.pageService.getMoviesPagination(page, limit);
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = PaginationController;
