'use strict';

/*!
 * imports.
 */

var test = require('tape');
var assertEnv = require('./');
var assert = require('chai').assert;

/*!
 * helpers.
 */

function simulate(keys) {
  return function () {
    assertEnv(keys);
  };
}

/*!
 * cases.
 */

test('throws when missing keys', function (t) {
  process.env.HTTP_LISTEN_PORT = 4242;

  var fn = simulate([
    'HTTP_LISTEN_PORT',
    'HTTP_LISTEN_HOST'
  ]);

  assert.throw(fn, ReferenceError, /HTTP_LISTEN_HOST/);

  t.end();
});

test('does not throw when all keys exist', function (t) {
  process.env.HTTP_LISTEN_PORT = 4242;
  process.env.HTTP_LISTEN_HOST = '0.0.0.0';

  var fn = simulate([
    'HTTP_LISTEN_PORT',
    'HTTP_LISTEN_HOST'
  ]);

  assert.doesNotThrow(fn, ReferenceError);

  t.end();
});

