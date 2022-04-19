import app from '../index';
import supertest from 'supertest';

const request = supertest(app);
describe('test endpoint response', () => {
    it('gets the api endPoint', async (done) => {
        const response  =await request.get('/api');
        expect(response.status).toBe(200);
        done();
    });
});
