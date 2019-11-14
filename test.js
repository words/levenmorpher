var test = require('tape')
var morph = require('.')

test('levenmorpher', function(t) {
  t.deepEqual(
    morph('order', 'chaos'),
    ['order', 'corder', 'coder', 'codes', 'cades', 'cads', 'chads', 'chaos'],
    'returns an array of words from a to b'
  )

  t.equal(
    morph('osldjfds', 'askdjfdsfds'),
    null,
    'returns null when it cannot complete'
  )

  t.end()
})
