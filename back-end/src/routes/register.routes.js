const { Router } = require('express');

const register = Router();

register.post('/', registerController)

module.exports = register;