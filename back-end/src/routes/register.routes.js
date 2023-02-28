const { Router } = require('express');
const registerController = require('../controllers/registerController');
const verifyFields = require('../middlewares/verifyFields');

const register = Router();

register.post('/', verifyFields, registerController.register);

module.exports = register;