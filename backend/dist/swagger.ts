import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Ipharma',
      version: '1.0.0',
      description: 'Documentación de la API del backend de Ipharma',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
  },
  // SOLO USAMOS LOS ARCHIVOS JS COMPILADOS EN DIST
  apis: [path.resolve(__dirname, './routes/**/*.js')],
};

const specs = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  console.log('Swagger disponible en: http://localhost:5000/api-docs');
};
