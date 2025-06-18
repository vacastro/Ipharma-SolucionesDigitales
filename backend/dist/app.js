"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const metrics_1 = __importDefault(require("./metrics"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
(0, swagger_1.setupSwagger)(app);
app.use(metrics_1.default);
app.get('/api/ping', (_req, res) => {
    res.json({ message: 'pong' });
});
exports.default = app;
