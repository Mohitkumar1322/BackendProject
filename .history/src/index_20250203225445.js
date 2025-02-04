const express = require('express');
const {PORT} = require('./config');

const app = express();

app.get('/api/v1/vlogs')

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});