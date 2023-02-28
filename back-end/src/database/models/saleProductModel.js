module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: false,
    tableName: 'sales_poducts',
  }
  );

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, { 
      foreignKey: 'sale_id', 
      as: 'saleId',
      through: SaleProduct
    }),
    models.Sale.belongsToMany(models.Product, { 
      foreignKey: 'product_id', 
      as: 'productId',
      through: SaleProduct
    })
  };

  return SaleProduct;
}
