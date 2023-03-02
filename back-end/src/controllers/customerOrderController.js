const customerOrderService = require('../services/customerOrderService');

const getSaleById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const sale = await customerOrderService.getById(id);
        return res.status(200).json(sale);
    } catch (err) {
        return next(err);
    }
};

module.exports = { 
    getSaleById,
};
