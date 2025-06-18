"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prom_client_1 = __importDefault(require("prom-client"));
const router = (0, express_1.Router)();
// Recolectar métricas por defecto
prom_client_1.default.collectDefaultMetrics();
// Contador de requests
const httpRequestCounter = new prom_client_1.default.Counter({
    name: 'http_requests_total',
    help: 'Total de requests HTTP',
    labelNames: ['method', 'route', 'status_code'],
});
// Middleware para contar cada request
router.use((req, res, next) => {
    res.on('finish', () => {
        var _a;
        httpRequestCounter.inc({
            method: req.method,
            route: ((_a = req.route) === null || _a === void 0 ? void 0 : _a.path) || req.path,
            status_code: res.statusCode,
        });
    });
    next();
});
// Endpoint /metrics
router.get('/metrics', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.set('Content-Type', prom_client_1.default.register.contentType);
    res.end(yield prom_client_1.default.register.metrics());
}));
exports.default = router;
