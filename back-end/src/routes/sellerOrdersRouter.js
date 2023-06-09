const express = require('express');
const sellerOrdersController = require('../controllers/sellerOrdersController');
const { verifyToken } = require('../middlewares/verifyToken');

const sellerOrdersRouter = express.Router();

sellerOrdersRouter.get(
  '/:id',
  verifyToken,
  sellerOrdersController.getOrderById,
  );

sellerOrdersRouter.get(
  '/',
  verifyToken,
  sellerOrdersController.getAllOrdersBySeller,
  );
sellerOrdersRouter.put(
  '/:id/status/pendente',
  verifyToken,
  sellerOrdersController.updateStatusPendente,
  );
sellerOrdersRouter.put(
  '/:id/status/preparando',
  verifyToken,
  sellerOrdersController.updateStatusPreparando,
  );
sellerOrdersRouter.put(
  '/:id/status/em-transito',
  verifyToken,
  sellerOrdersController.updateStatusEmTransito,
  );

module.exports = sellerOrdersRouter;
