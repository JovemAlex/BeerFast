const sellerOrdersService = require('../services/sellerOrdersService');

const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await sellerOrdersService.getOrderById(id);
    return res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const updateStatusPendente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await sellerOrdersService.updateStatus(id, 'pendente');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const updateStatusPreparando = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await sellerOrdersService.updateStatus(id, 'preparando');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const updateStatusEmTransito = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await sellerOrdersService.updateStatus(id, 'em_transito');
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

module.exports = { getOrderById, updateStatusPendente, updateStatusPreparando, updateStatusEmTransito };
