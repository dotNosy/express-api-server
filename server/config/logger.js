const { createLogger, format, transports } = require('winston');
const morgan = require('morgan');

const logger = createLogger({
  format: format.simple(),
  transports: [new transports.Console()],
});

//* Request logger
morgan.token('id', (req) => req.id);

const requestFormat = ':remote-addr [:date[iso]] :id ":method :url" :status';

const requests = morgan(requestFormat, {
  stream: { write: (message) => logger.info(message) },
});

logger.requests = requests;

logger.header = (req) => {
  const date = new Date().toISOString();
  return `${req.ip} [${date}] ${req.id} "${req.method} ${req.originalUrl}"`;
};

module.exports = logger;
