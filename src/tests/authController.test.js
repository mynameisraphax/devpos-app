const authController = require('../controllers/authController');
const pool = require('../config/db');
const bcrypt = require('bcryptjs');

jest.mock('../config/db');

describe('Auth Controller', () => {
  it('should register a user', async () => {
    const req = { body: { name: 'Test', login: 'test', email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    pool.query.mockResolvedValue({});
    await authController.register(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuário cadastrado com sucesso' });
  });
});