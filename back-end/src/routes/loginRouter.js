const express = require('express');
const loginController = require('../controllers/loginController');
const { validateLogin } = require('../middlewares/validateLogin');
const verifyToken = require('../middlewares/verifyToken');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, (req, res) => loginController.login(req, res));

loginRouter.get('/', verifyToken, (req, res) => loginController.getUser(req, res));

module.exports = loginRouter;
