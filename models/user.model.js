// All the functions related to db goes here
const model = require('../schemas');

const deviceDb = {};

deviceDb.insertUser = async params => model.user.create(params);

deviceDb.findAllUsers = async () => model.user.find({});

deviceDb.findUser = async params => model.user.findOne(params);


module.exports = deviceDb;