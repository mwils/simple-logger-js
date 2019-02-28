"use strict";

/**
 * 
 */
function Logger(logLevel, logWriter) {
  this.logLevel = logLevel || 2;
  this.logWriter = logWriter || console.log;
}

Logger.prototype.setLogLevel = function (level) {
  this.logLevel = level;
}

Logger.trace = 5;
Logger.debug = 4;
Logger.info = 3;
Logger.warn = 2;
Logger.error = 1;
Logger.prototype.trace = function (message) {
  if (this.logLevel < Logger.trace) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Trace: ${message}`);
}


Logger.prototype.debug = function (message) {
  if (this.logLevel < Logger.debug) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Debug: ${message}`);
}

Logger.prototype.info = function (message) {
  if (this.logLevel < Logger.info) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Info: ${message}`);
}

Logger.prototype.warn = function (message) {
  if (this.logLevel < Logger.warn) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Warning: ${message}`);
}

Logger.prototype.error = function (message) {
  if (this.logLevel < Logger.error) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Error: ${message}`);
}

module.exports = Logger;