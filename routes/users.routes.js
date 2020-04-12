const express = require('express');
const router = express.Router();
const serverResponses = require('../utils/helpers/server.responses');
const messages = require('../config/messages');
const User = require('../models/user.model');
const {log} = require('../utils/helpers/logger');



router.get('/', async (req,res,next) => {
    try{
        let users = await User.findAllUsers();
        return serverResponses.sendSuccess(res,messages.SUCCESSFUL, users);
    } catch(e) {
        return serverResponses.sendError(res,e);
    }
});

router.post('/create', async (req,res, next) => {
    try {
        const {
            name,
            gender,
            is_active,
            user_id
        } = req.body;
        let newData = await User.insertUser({
            name,
            gender,
            is_active,
            user_id
        });
        log.info(newData);
    } catch (e) {

    }
});

module.exports = router;