const getUsersPagination = (model) => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;

        try {
            const { count, rows } = await model.findAndCountAll({
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
            res.json(results);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    };
};

const getMoviesPagination = (model) => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;

        try {
            const { count, rows } = await model.findAndCountAll({
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
            res.json(results);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    };
};

module.exports = {
    getUsersPagination,
    getMoviesPagination
};
