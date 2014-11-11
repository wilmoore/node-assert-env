# assert-env

[![Build Status](http://img.shields.io/travis/wilmoore/node-assert-env.svg)](https://travis-ci.org/wilmoore/node-assert-env) [![NPM version](http://img.shields.io/npm/v/assert-env.svg)](https://www.npmjs.org/package/assert-env) [![NPM downloads](http://img.shields.io/npm/dm/assert-env.svg)](https://www.npmjs.org/package/assert-env) [![LICENSE](http://img.shields.io/npm/l/assert-env.svg)](LICENSE)

> Assert that specific environment variables exist.

    $ npm install assert-env

## API

When one or more keys are missing, a [ReferenceError] is thrown.

    require('assert-env')([
      'HTTP_LISTEN_PORT',
      'HTTP_LISTEN_HOST'
    ]);

## Complements

- [envc]
- [dotenv]

## Alternatives

- [dotenv-assert]
- [assert-dotenv]

## License

  [MIT](LICENSE)

[dotenv-assert]: https://www.npmjs.org/package/dotenv-assert
[assert-dotenv]: https://www.npmjs.org/package/assert-dotenv
[envc]: https://github.com/vesln/envc
[dotenv]: https://www.npmjs.org/package/dotenv
[ReferenceError]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
