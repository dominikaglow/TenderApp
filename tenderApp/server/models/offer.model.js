const {Sequelize, DataType, DataTypes} = require("sequelize");
const conn = require('./db');
const Tender = require('./tender.model');

const Offer = conn.define('offer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tender,
            key: 'id'
        }
    },
    bidder: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sum: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Offer;