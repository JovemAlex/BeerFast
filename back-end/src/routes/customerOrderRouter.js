const express = require('express');

const verifyToken = require('../middlewares/verifyToken');
const { authenticateToken } = require('../auth/jwtFunctions');
const customerOrderController = require('../controllers/customerOrderController');

const route = express.Router();

route.post('/', verifyToken, customerOrderController.createSale);
// route.get('/:id', verifyToken, customerOrderController.getSaleById);
route.get('/sellers', customerOrderController.getSellers);
// route.put('/:id/status/entregue', verifyToken, customerOrderController.updateStatusEntregue);

route.use(authenticateToken);

module.exports = route;
