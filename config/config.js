// If you want to load your private variables from .env file you can use this commented out this  code

// require('dotenv').load();
//
// const env = process.env.NODE_ENV || 'development';
//
// const config = {};
//
// config.mongoUrl = env === 'production' ? process.env.MONGO_PROD_URL : process.env.MONGO_DEV_URL;
//
// module.exports = config;

var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test'){
    const config = require('../config.json');
    let envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key]
    })
}
