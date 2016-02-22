"use strict";

const cipher = require('sails-service-cipher');

module.exports = {
  jwt: cipher('jwt', {})
};
