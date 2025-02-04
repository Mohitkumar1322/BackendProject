const express = require('express');
const {PORT} = require('./config');

const app = express();
const apiRoutes = require('./routes');
const serverConfig = require('./config/server-config');

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
});