import request from 'supertest';
import app from '../src/app';

describe('Medicamentos API', () => {
    it('debería devolver todas las presentaciones con status 200', async () => {
        const response = await request(app).get('/api/medicamentos/presentaciones');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining(['caja5', 'caja10', 'solucion50', 'solucion80']));
    });
});
