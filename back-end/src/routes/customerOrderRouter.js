const express = require('express');

const verifyToken = require('../middlewares/verifyToken');
const { authenticateToken } = require('../auth/jwtFunctions');
const customerOrderController = require('../controllers/customerOrderController');

const route = express.Router();

route.get('/:id', verifyToken, customerOrderController.getSaleById);
route.put('/:id/status/entregue', verifyToken, customerOrderController.updateStatusEntregue);
route.get('/', verifyToken, customerOrderController.getOrdersByUser);

route.use(authenticateToken);

module.exports = route;
