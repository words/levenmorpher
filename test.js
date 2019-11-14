var test = require('tape')
var morph = require('.')

test('levenmorpher', function(t) {
  t.deepEqual(
    morph('order', 'chaos'),
    ['order', 'corder', 'coder', 'codes', 'cades', 'cads', 'chads', 'chaos'],
    'returns an array of words from a to b'
  )

  t.deepEqual(morph('same', 'same'), ['same'], 'should support same two words')

  t.deepEqual(
    morph('funny', 'phoney'),
    ['funny', 'punny', 'penny', 'peony', 'phony', 'phoney'],
    '(#2)'
  )

  t.deepEqual(
    morph('black', 'white'),
    [
      'black',
      'alack',
      'aback',
      'abac',
      'aba',
      'aha',
      'ahi',
      'ahis',
      'chis',
      'chit',
      'whit',
      'white'
    ],
    '(#3)'
  )

  t.deepEqual(
    morph('ruby', 'node'),
    ['ruby', 'rube', 'robe', 'rode', 'node'],
    '(#4)'
  )

  t.equal(
    morph('osldjfds', 'askdjfdsfds'),
    null,
    'returns null when it cannot complete'
  )

  t.end()
})
