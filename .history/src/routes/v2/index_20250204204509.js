const express = require('express');

const router = express.Router();

router.get('/info',(req,res) => {
    res.send('Welcome to the v2 API');
})