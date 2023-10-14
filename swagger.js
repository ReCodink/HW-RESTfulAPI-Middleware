const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'User dan Movies API',
            version: '1.0.0',
            description: 'Dokumentasi API untuk User dan Movies API',
        },
        server: [
            {
                url: 'http://localhost:8081',
                description: 'Local Server',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;