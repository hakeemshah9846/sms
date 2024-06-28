const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const accessControl = require('../utils/access-control').accessControl;

function setAccessControl(access_types) {
    return (req, res, next) => {
        accessControl(access_types, req, res, next);
    }
}

router.post('/users',setAccessControl('1,2'),userController.addUser);

module.exports = router;