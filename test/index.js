var assert = require("assert")
var morph = require("..")

describe("levenmorpher", function() {

  it("returns an array of words from a to b", function() {
    assert.deepEqual(morph("order", "chaos"), [
      'order',
      'corder',
      'coder',
      'codes',
      'cones',
      'cons',
      'coos',
      'cocos',
      'chocos',
      'chacos',
      'chaos'
    ])
  })

  it("returns null when it cannot complete", function() {
    assert.equal(morph("osldjfds", "askdjfdsfds"), null)
  })

})
