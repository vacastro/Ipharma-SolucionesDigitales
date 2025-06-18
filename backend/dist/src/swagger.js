"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const options = {
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
    apis: [
        process.env.SWAGGER_APIS_PATH
            ? path_1.default.resolve(__dirname, process.env.SWAGGER_APIS_PATH)
            : './src/routes/**/*.ts',
    ],
};
console.log('Swagger files scanned:', options.apis);
const specs = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    console.log('Swagger disponible en: http://localhost:5000/api-docs');
};
exports.setupSwagger = setupSwagger;
