module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: false,
    tableName: 'products',
  }
  );

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, { foreignKey: 'product_id', as: 'productId' });
  };

  return Product;
}
