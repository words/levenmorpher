#!/usr/bin/env node

var distance = require('levenshtein-edit-distance')
var words = require('similar-english-words')

module.exports = morph

function morph(start, target) {
  var seen = []
  var trail = []

  return step(start, target)

  function step(start, target) {
    var candidates

    trail.push(start)
    seen.push(start)

    // Done?
    if (distance(start, target) === 1) {
      trail.push(target)
      return trail
    }

    candidates = (words[start] || []).filter(x => !seen.includes(x))

    if (candidates.length === 0) return null

    // Find words that are one mutation away from the start word
    // and sort them by their distance from the target word
    return step(candidates.sort(sort)[0], target)

    function sort(a, b) {
      return distance(a, target) - distance(b, target)
    }
  }
}
