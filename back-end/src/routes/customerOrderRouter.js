const express = require('express');

const { verifyToken } = require('../middlewares/verifyToken');
const { authenticateToken } = require('../auth/jwtFunctions');
const customerOrderController = require('../controllers/customerOrderController');

const route = express.Router();

route.get('/sellers', verifyToken, customerOrderController.getSellers);
route.get('/:id', verifyToken, customerOrderController.getOrdersById);
route.get('/', verifyToken, customerOrderController.getOrdersByUser);
route.post('/', verifyToken, customerOrderController.createSale);
// route.put('/:id/status/entregue', verifyToken, customerOrderController.updateStatusEntregue);

route.use(authenticateToken);

module.exports = route;
