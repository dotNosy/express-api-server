const express = require('express');
const requestId = require('express-request-id');
const bodyParser = require('body-parser');

const logger = require('./config/logger');
const api = require('./api/v0');

const app = express();

// Middlewares
app.use(requestId());
app.use(logger.requests);
app.use(bodyParser.urlencoded({ extended: false })); // Parser type: application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parser typee: application/json

// Mount routes
app.use('/api', api);
app.use('/api/v0', api);

//* No route found handler
app.use((req, res, next) => {
  next({
    message: 'ROUTE NOT FOUND',
    statuscode: 404,
    level: 'warn',
  });
});

//! Error Handler
app.use((err, req, res, next) => {
  const { message, statuscode = 500, level = 'error' } = err;

  const log = `${logger.header(req)} ${statuscode} ${message}`;

  logger[level](log);

  res.status(statuscode);
  res.json({
    message,
  });
});

module.exports = app;
