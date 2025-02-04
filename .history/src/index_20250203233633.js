const express = require('express');
const {PORT} = require('./config');

const app = express();
const apiRoutes = require('./routes/api');

app.use('/api',apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});