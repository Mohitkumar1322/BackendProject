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
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        //this will log the message to the console when using 
        new transports.File({ filename: 'logs.log' })
    ]
})