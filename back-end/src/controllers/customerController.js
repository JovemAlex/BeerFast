const saleService = require('../services/customerService');

const getSaleById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const sale = await saleService.getById(id);
        return res.status(200).json(sale);
    } catch (err) {
        return next(err);
    }
};

module.exports = { 
    getSaleById,
};
