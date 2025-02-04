const dotenv = require('dotenv');
dotenv.config();//it will return an obejct with all the key value pairs from .env file
module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}