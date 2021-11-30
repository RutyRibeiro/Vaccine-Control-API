const { DataTypes } = require("sequelize");
const database = require("../db");

const Vaccines = database.define('Vaccines', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true, 
    },
    name:{
        type: DataTypes.STRING,
    },
    expected_date:{
        type: DataTypes.STRING,
    },
    vaccinated:{
        type: DataTypes.BOOLEAN,
    },
});

Vaccines.sync();

module.exports = Vaccines; 