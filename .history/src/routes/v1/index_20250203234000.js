const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({
        message: 'This is the API for the application'
    });


})