const { Router } = require('express');
const registerController = require('../controllers/registerController');
const { verifyFields } = require('../middlewares/verifyFields');
const { verifyName, verifyPassword } = require('../middlewares/verifyLength');

const register = Router();

register.post(
  '/',
  verifyFields,
  verifyName, 
  verifyPassword, 
  (req, res) => registerController.register(req, res),
  );

module.exports = register;
