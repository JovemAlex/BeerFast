const { Sale, SaleProduct, User, sequelize } = require('../database/models');

const getById = async (id) => {
  const sale = await Sale.findByPk(id);
  return sale;
};

const updateStatus = async (id, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return getById(id);
};

const create = async (sale, products) => {
  const result = await sequelize.transaction(async (t) => {
    const newSale = {
      ...sale,
      saleDate: new Date(),
      status: 'Pendente',
    };

    const { id: saleId } = await Sale.create(newSale, { transaction: t });

    await Promise.all(products.map(({ productId, quantity }) => SaleProduct.create(
      { saleId, productId, quantity },
      { transaction: t },
    )));
    return saleId;
  });
  return result;
};

const getSellers = async () => {
  const sellers = await User.findAll(
    {
      where: {
        role: 'seller',
      },
      attributes: {
        exclude: ['email', 'password', 'role'],
      },
    },
  );
  return sellers;
};

module.exports = {
  updateStatus,
  create,
  getSellers,
};
