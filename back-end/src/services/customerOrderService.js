const { Sale } = require('../database/models');

const getById = async (id) => {
    const sale = await Sale.findByPk(id); // ou todos pelo userId ????
    
    return sale;
};

const updateStatus = async (id, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return getById(id);
};

module.exports = { 
    getById,
    updateStatus,
};
