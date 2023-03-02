const express = require('express');
const sellerOrdersController = require('../controllers/sellerOrdersController');

const sellerOrdersRouter = express.Router();

sellerOrdersRouter.get('/:id', sellerOrdersController.getOrderById);

sellerOrdersRouter.get('/', sellerOrdersController.getAllOrdersBySeller);

module.exports = sellerOrdersRouter;
