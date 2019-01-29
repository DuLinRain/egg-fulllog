'use strict';

module.exports = app => {
  // put before other core middlewares
  app.config.coreMiddlewares.unshift('fulllog');
};