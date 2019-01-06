const express = require('express');
const serverResponses = require('../utils/helpers/server.responses');
const messages = require('../config/messages');

const routes = (app) => {
    const router = express.Router();

    router.get('/', (req,res) => {
        return serverResponses.sendSuccess(res,messages.SUCCESSFUL);
    });

    //it's a prefix before api it is useful when you have many modules and you want to
    //differentiate b/w each module you can use this technique
    app.use('/api', router);
};
module.exports = routes;