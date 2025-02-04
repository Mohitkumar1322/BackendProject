const express = require('express');
const router = express.Router();
const v1Routes = require('./v1');

router.use('/v1',v1Routes);
//this is the same as app.use('/api/v1',v1Routes); and
//we are using express router to create a subroute for v1Routes in the /api route
