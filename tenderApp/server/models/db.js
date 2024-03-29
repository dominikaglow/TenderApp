const Sequelize = require('sequelize');

const conn = new Sequelize(
    'tenderdb',
    'root',
    process.env.PASSWORD,
    {
      host: '127.0.0.1',
      port: '3306',
      dialect: 'mysql'
    }
);

module.exports = conn;