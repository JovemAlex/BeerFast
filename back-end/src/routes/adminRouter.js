const express = require('express');
const adminController = require('../controllers/adminController');
const { 
  verifyRegisterUserByAdmin, 
  verifyAdminRegisterData, 
} = require('../middlewares/verifyFields');
const { verifyAdminToken } = require('../middlewares/verifyToken');

const adminRouter = express.Router();

adminRouter.post(
  '/', 
  verifyAdminToken, 
  verifyRegisterUserByAdmin, 
  verifyAdminRegisterData, 
  adminController.register,
);

module.exports = adminRouter;
