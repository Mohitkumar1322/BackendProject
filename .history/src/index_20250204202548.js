const express = require('express');
const {ServerConfig } = require('./config');

const app = express();
const apiRoutes = require('./routes');


app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    //herre log is a function which is defined in logger-config.js and all log is is    
    Logger.info(`Server is running on port ${ServerConfig.PORT}`);
});