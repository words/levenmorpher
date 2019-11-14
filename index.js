#!/usr/bin/env node

var distance = require('levenshtein-edit-distance')
var words = require('similar-english-words')
var args = process.argv.slice(2)

module.exports = morph

// CLI
if (args.length !== 0) {
  if (args.length < 2 || args.length > 3) {
    console.log(
      'Usage:\n\nmorph good into evil\nmorph black to white\nmorph ruby node'
    )
  } else {
    console.log(morph(args[0], args[args.length - 1]))
  }
}

function morph(start, target) {
  var trail = []

  return step(start, target)

  function step(start, target) {
    trail.push(start)

    // Done?
    if (distance(start, target) === 1) {
      trail.push(target)
      return trail
    }

    // Find words that are one mutation away from the start word
    // and sort them by their distance from the target word
    var candidates = (words[start] || []).sort(function(a, b) {
      return distance(a, target) - distance(b, target)
    })

    if (candidates.length === 0) return null

    return step(candidates[0], target)
  }
}
