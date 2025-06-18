import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import path from 'path';

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
        url: process.env.SWAGGER_API_URL || 'http://localhost:5000/api',
      },
    ],
    tags: [
      {
        name: 'Autenticación',
        description: 'Endpoints para login y registro',
      },
      {
        name: 'Usuarios',
        description: 'Gestión de usuarios del sistema',
      },
      {
        name: 'Medicamentos',
        description: 'Gestión de medicamentos',
      },
      {
        name: 'Proveedores',
        description: 'Gestión de proveedores',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.resolve(__dirname, './routes/**/*.js')], // CORRECTO PARA PRODUCCIÓN
  //apis: ['./src/routes/**/*.ts'], // CORRECTO PARA DEVELOP
};

console.log('Swagger files scanned:', options.apis);

const specs = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  console.log('Swagger disponible en: http://localhost:5000/api-docs');
};
