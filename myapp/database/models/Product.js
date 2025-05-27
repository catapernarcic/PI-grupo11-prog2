 module.exports = function (sequelize, dataTypes) {
     let alias = "Product";

     let cols = {
         id: {
             autoIncrement: true,
             primaryKey: true,
             type: dataTypes.INTEGER.UNSIGNED
         },
         usuarioId: {
             type: dataTypes.INTEGER.UNSIGNED,
             allowNull: false
         },
         imagen: {
             type: dataTypes.STRING(500)
         },
         nombre: {
             type: dataTypes.STRING(500)
         },
         descripcion: {
             type: dataTypes.TEXT
         },
         createdAt: {
             type: dataTypes.DATE
         },
         updatedAt: {
             type: dataTypes.DATE
         },
         deletedAt: {
             type: dataTypes.DATE
         }
     };
     let config = {
         tableName: "productos",
         timestamps: true,
         underscored: false
     };

     const Product = sequelize.define(alias, cols, config);

     Product.associate = function (models) {
        Product.belongsTo(models.User, {
            foreignKey: 'usuarioId',
            as: 'user'
        })
        
     }
        return Product;
 }