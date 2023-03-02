const express = require('express');

const { authenticateToken } = require('../auth/jwtFunctions');
const saleController = require('../controllers/customerController');

const route = express.Router();

route.get('/:id', saleController.getSaleById);
route.use(authenticateToken);

module.exports = route;
