const express = require('express');

const { authenticateToken } = require('../auth/jwtFunctions');
const customerOrderController = require('../controllers/customerOrderController');

const route = express.Router();

route.get('/:id', customerOrderController.getSaleById);
route.use(authenticateToken);

module.exports = route;
