#!/usr/bin/env node
'use strict'

var pack = require('./package.json')
var levenmorpher = require('.')

var argv = process.argv.slice(2)

if (argv.includes('--help') || argv.includes('-h')) {
  console.log(help())
} else if (argv.includes('--version') || argv.includes('-v')) {
  console.log(pack.version)
} else if (argv.length === 2) {
  console.log(levenmorpher.apply(null, argv).join('\n'))
} else {
  process.stderr.write(help())
  process.exit(1)
}

function help() {
  return [
    '',
    '  Usage: ' + pack.name + ' [options] <word> <word>',
    '',
    '  ' + pack.description,
    '',
    '  Options:',
    '',
    '    -h, --help           output usage information',
    '    -v, --version        output version number',
    '',
    '  Usage:',
    '',
    '  # output distance',
    '  $ ' + pack.name + ' ruby node',
    '  ' + levenmorpher('ruby', 'node').join('\n  '),
    ''
  ].join('\n')
}
