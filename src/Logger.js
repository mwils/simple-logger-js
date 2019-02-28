"use strict";

/**
 * 
 * @param {boolean} shouldAlert If true, the returned functions will alert on error, Default - false
 */
function Logger(logLevel, logWriter) {
  this.logLevel = logLevel || 2;
  this.logWriter = logWriter || console.log;
}

Logger.prototype.setLogLevel = function (level) {
  this.logLevel = level;
}

Logger.prototype.trace = function (message) {
  if (this.logLevel < 5) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Trace: ${message}`);
}

Logger.prototype.debug = function (message) {
  if (this.logLevel < 4) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Debug: ${message}`);
}

Logger.prototype.info = function (message) {
  if (this.logLevel < 3) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Info: ${message}`);
}

Logger.prototype.warn = function (message) {
  if (this.logLevel < 2) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  this.logWriter(`Warning: ${message}`);
}

Logger.prototype.error = function (message) {
  if (this.logLevel < 1) {
    return;
  }
  if (typeof message === 'object') {
    message = JSON.stringify(message);
  }

  alert(message); // todo broadcast error
  this.logWriter(`Error: ${message}`);
}

module.exports = Logger;