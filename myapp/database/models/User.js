module.exports = function(sequelize, dataTypes) {
    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING(500)
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}
