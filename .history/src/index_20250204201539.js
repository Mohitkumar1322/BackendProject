const express = require('express');
const {ServerConfig , Logger} = require('./config');

const app = express();
const apiRoutes = require('./routes');
const ServerConfig = require('./config/server-config');

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
});