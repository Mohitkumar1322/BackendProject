const express = require('express');
const router = express.Router();

const { InfoController } = require('../../controllers');

router.get('/', InfoController.info);
//this is the same as app.get('/api/v1',InfoController.info); and coming from the InfoController module
module.exports = router;
