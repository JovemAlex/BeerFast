const { Router } = require('express');
const registerController = require('../controllers/registerController');
const { verifyFields, verifyRegisterData } = require('../middlewares/verifyFields');

const register = Router();

register.post(
  '/',
  verifyFields,
  verifyRegisterData,
  (req, res) => registerController.register(req, res),
  );

module.exports = register;
