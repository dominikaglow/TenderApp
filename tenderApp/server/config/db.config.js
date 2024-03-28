module.exports = {
    host: "localhost",
    user: "password",
    password: process.env.PASSWORD,
    db: "tenderdb",
    dialect: "mysql",
    pool: {
        max: 5, // max num of connections in pool
        min: 0, // min num of connections in pool
        acquire: 30000, // max time for trying to get connection
        idle: 10000 // max time for the connection to be idle
    }
};