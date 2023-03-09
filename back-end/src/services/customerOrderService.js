const { Sale, SaleProduct, Product, User, sequelize } = require('../database/models');

const getById = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      {
        model: SaleProduct,
        as: 'sale',
        attributes: ['quantity'],
        include: [{
        model: Product,
        as: 'product',
        attributes: { exclude: ['urlImage'] },
        }],
      },
    ],
  });
    
    return sale;
// const { Sale, SaleProduct, User, sequelize } = require('../database/models');

// const getById = async (id) => {
  // const sale = await Sale.findByPk(id);
  // return sale;
};

const updateStatus = async (id, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id } },
  );
  return getById(id);
};

const findUser = async (email) => {
  const [result] = await User.findAll({
    where: { email },
  });
  return result.dataValues;  
};

const getAllOrdersBySeller = async (email) => {
  const { id } = await findUser(email);
  const allOrders = await Sale.findAll({
    where: { userId: id },
  });
  const orderDataValues = allOrders.map((order) => order.dataValues);
  return orderDataValues;
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
  getById,
  updateStatus,
  getAllOrdersBySeller,
  create,
  getSellers, 
};
