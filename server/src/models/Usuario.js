import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define("usuarios", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastnme: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
    });
};
