'use strict';

/*!
 * exports.
 */

module.exports = assertion;

/*!
 * imports.
 */

var format = require('util').format;

/*!
 * strings.
 */

var message = 'One or more required environment variable(s) are missing: %s!';

/**
 * Assert that the given keys are found within `process.env`.
 * @throws ReferenceError
 *
 * @param {Array} keys
 * keys that are to be found within `process.env`.
 */

function assertion(keys) {
  var missing = keys.filter(isMissing);

  if (missing.length) {
    throw new ReferenceError(format(message, missing.join(', ')));
  }
}

/**
 * Whether key is found within `process.env`.
 *
 * @param {Array} key
 * key that is to be found within `process.env`.
 *
 * @return {Boolean}
 * Whether key is found within `process.env`.
 */

function isMissing(key) {
  return !(key in process.env);
}
