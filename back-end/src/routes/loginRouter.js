const express = require('express');
const loginController = require('../controllers/loginController');
const { validateLogin } = require('../middleware/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, (req, res) => loginController.login(req, res));

module.exports = loginRouter;
