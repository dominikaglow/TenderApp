const {Sequelize, DataType, DataTypes} = require("sequelize");
const conn = require('./db');

const Tender = conn.define('tender', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    institution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    budget: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = Tender;