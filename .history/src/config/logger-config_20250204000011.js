//setup winston for project to get the logs 
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

