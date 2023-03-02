const { Sale } = require('../database/models');

const getById = async (id) => {
    const sale = await Sale.findByPk( // ou todos pelo userId ????
        {
            where: { id },
        },
    );
    return sale;
};

module.exports = { 
    getById,
};