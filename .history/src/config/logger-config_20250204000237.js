//setup winston for project to get the logs 
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
    //this will return the timestamp, label, level and message of the log and is used when the log is printed

});
const logger = createLogger({
    format: combine(
        label({ label: 'API' }),
        timestamp({forma}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs.log' })
    ]
})