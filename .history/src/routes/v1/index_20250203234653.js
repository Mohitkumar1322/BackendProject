const express = require('express');
const router = express.Router();

const { InfoController } = require('../../controllers');

router.get('/info', (req, res) => {
    return res.json({
        message: 'This is the API for the application and testing the express router'
    });


});

module.exports = router;