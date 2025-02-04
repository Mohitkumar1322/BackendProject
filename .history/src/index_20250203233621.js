const express = require('express');
const {PORT} = require('./config');

const app = express();

app.use('/api',api)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});