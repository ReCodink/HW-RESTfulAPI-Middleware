const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const winston = require('winston');
const PORT = process.env.APP_PORT || 3090;
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');
const path = require('path');

const router = express.Router();
const authUserRouter = require('./routes/authUserRoutes');
const movieRouter = require('./routes/movieRoutes');
const userRouter = require('./routes/userRoutes');
const paginationRouter = require('./routes/paginationRoutes');

dotenv.config();

const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

// Middleware untuk logging
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use('/upload', express.static(path.join(__dirname, './upload')));
app.use(express.json()); // untuk menangkap data json
app.use(morgan('dev'));
app.use(movieRouter);
app.use(userRouter);
app.use(authUserRouter);
app.use(paginationRouter);

// Healthcheck endpoint
app.use('/', router);
app.get('/ping', (request, response) => {
    response.json({ message: 'Ping Successfully' });
});

app.get('/movies', (req, res) => {
    movieRouter.get(mov)
})

app.listen(PORT, () => {
    console.info(`Application running at localhost: ${PORT}`);
});
