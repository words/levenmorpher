# levenmorpher

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

A JavaScript function and command-line tool that morphs one word into another,
one letter-change at a time.

It uses [a very liberal English word list][list].
It might be nice to use something less permissive to avoid really obscure words
that basically no one’s ever heard of.

## Install

[npm][]:

```bash
npm install levenmorpher
```

## API

```js
var levenmorpher = require('levenmorpher')

console.log(levenmorpher('ruby', 'node'))
```

Yields:

```js
[ 'ruby', 'rube', 'robe', 'rode', 'node' ]
```

## CLI

```txt
Usage: levenmorpher [options] <word> <word>

Morph one word into another, one letter at a time

Options:

  -h, --help           output usage information
  -v, --version        output version number

Usage:

# output distance
$ levenmorpher ruby node
ruby
rube
robe
rode
node
```

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/levenmorpher.svg

[build]: https://travis-ci.org/words/levenmorpher

[coverage-badge]: https://img.shields.io/codecov/c/github/words/levenmorpher.svg

[coverage]: https://codecov.io/github/words/levenmorpher

[downloads-badge]: https://img.shields.io/npm/dm/levenmorpher.svg

[downloads]: https://www.npmjs.com/package/levenmorpher

[size-badge]: https://img.shields.io/bundlephobia/minzip/levenmorpher.svg

[size]: https://bundlephobia.com/result?p=levenmorpher

[license]: license

[author]: http://zeke.sikelianos.com

[npm]: https://www.npmjs.com

[list]: https://www.npmjs.org/package/an-array-of-english-words
