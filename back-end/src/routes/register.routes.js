const { Router } = require('express');
const registerController = require('../controllers/registerController');
const verifyFields = require('../middlewares/verifyFields');

const register = Router();

register.post('/', (req, res) => registerController.register(req, res));
// verifyFields, registerController.register);

module.exports = register;
