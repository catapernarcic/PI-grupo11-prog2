/* module.exports= function(sequelize, dataTypes) {
    let alias = Coment;

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        productoId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        texto: {
            type: dataTypes.TEXT,
            allowNull: false
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
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };

    const Coment = sequelize.define(alias, cols, config);

    return Coment;
} */