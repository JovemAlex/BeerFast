module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  }
  );

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, { 
      foreignKey: 'saleId',
      as: 'sale',
      through: SaleProduct,
      // otherKey: 'productId', 
    }),
    models.Sale.belongsToMany(models.Product, { 
      foreignKey: 'productId',
      as: 'product',
      through: SaleProduct,
      // otherKey: 'saleId',
    })
    models.SaleProduct.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product'
    })
  };

  return SaleProduct;
}
