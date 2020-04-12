const Sequelize = require('sequelize');
const {log} = require('../utils/helpers/logger');
const fs = require('fs');

const db = {};
const sequelize = new Sequelize(`${process.env.SEQUELIZE_URI}`);
const schemas = fs.readdirSync('schemas');

schemas
    .filter(file => file.includes('schema'))
    .forEach((file) =>{
        const model = sequelize.import(__dirname + `/${file}`)
        db[model.name] = model
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;


log.info('Syncing DB');
sequelize.sync({
    force: true,
});

module.exports = db;