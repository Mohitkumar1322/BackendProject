const express = require('express');
const {PORT} = require('./config');

const app = express();

app.get('/api/v1/vlogs',(req,res)=>)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});