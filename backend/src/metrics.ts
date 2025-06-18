import { Router } from 'express';
import client from 'prom-client';

const router = Router();

// Recolectar métricas por defecto
client.collectDefaultMetrics();

// Contador de requests
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total de requests HTTP',
    labelNames: ['method', 'route', 'status_code'],
});

// Middleware para contar cada request
router.use((req, res, next) => {
    res.on('finish', () => {
        httpRequestCounter.inc({
            method: req.method,
            route: req.route?.path || req.path,
            status_code: res.statusCode,
        });
    });
    next();
});

// Endpoint /metrics
router.get('/metrics', async (_req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

export default router;
