const express = require('express');
const sellerOrdersController = require('../controllers/sellerOrdersController');

const sellerOrdersRouter = express.Router();

sellerOrdersRouter.get('/:id', sellerOrdersController.getOrderById);

module.exports = sellerOrdersRouter;
