module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.NUMBER,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: false,
    tableName: 'sales',
  }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'userId' }),
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'sellerId' })

    Sale.hasMany(models.SaleProduct, { foreignKey: 'sale_id', as: 'saleId' })
  };

  return Sale;
}
