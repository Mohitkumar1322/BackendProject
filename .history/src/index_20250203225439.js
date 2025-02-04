const express = require('express');
const {PORT} = require('./config');

const app = express();

app.get('/api/')

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});