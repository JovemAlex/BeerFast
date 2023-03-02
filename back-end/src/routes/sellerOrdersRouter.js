const express = require('express');
const sellerOrdersController = require('../controllers/sellerOrdersController');

const sellerOrdersRouter = express.Router();

sellerOrdersRouter.get('/:id', sellerOrdersController.getOrderById);
sellerOrdersRouter.put('/:id/status/pendente', sellerOrdersController.updateStatusPendente);
sellerOrdersRouter.put('/:id/status/preparando', sellerOrdersController.updateStatusPreparando);
sellerOrdersRouter.put('/:id/status/em-transito', sellerOrdersController.updateStatusEmTransito);

sellerOrdersRouter.get('/', sellerOrdersController.getAllOrdersBySeller);

module.exports = sellerOrdersRouter;
