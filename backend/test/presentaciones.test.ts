import request from 'supertest';
import app from '../src/app';

describe('GET /medicamentos/presentaciones', () => {
    it('debería devolver todas las presentaciones con status 200', async () => {
        const response = await request(app).get('/api/medicamentos/presentaciones');

        expect(response.status).toBe(200);

        // Verificamos que contenga las presentaciones correctas
        expect(response.body).toEqual(expect.arrayContaining([
            'caja5',
            'caja10',
            'solucion50',
            'solucion80',
        ]));

        // Y que no esté vacío
        expect(response.body.length).toBeGreaterThan(0);
    });
});
