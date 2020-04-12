const Sequelize = require('sequelize');
const {log} = require('../utils/helpers/logger');

exports.connect = () => {
    const sequelize = new Sequelize(`${process.env.SEQUELIZE_URI}`);
    sequelize
        .authenticate()
        .then(() => {
            log.info('Connection has been established successfully.');
        })
        .catch((err) => {
            log.info('Unable to connect to the database:', err);
        });
    module.exports = sequelize;
};
