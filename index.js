#!/usr/bin/env node

var distance = require("leven")
var words = require("similar-english-words")
var args = process.argv.slice(2)

var morph = module.exports = function(start, target) {

  var trail = []

  var step = function(start, target) {
    trail.push(start)

    // Done?
    if (distance(start, target) === 1) {
      trail.push(target)
      return trail
    }

    // Find words that are one mutation away from the start word
    // and sort them by their distance from the target word
    var candidates = (words[start] || [])
      .sort(function(a, b) {
        return distance(a, target) - distance(b, target)
      })

    if (!candidates.length)
      return null

    return step(candidates[0], target)
  }

  return step(start, target)

}

// CLI
if (args.length) {

  if (args.length < 2 || args.length > 3)
    return console.log("Usage:\n\nmorph good into evil\nmorph black to white\nmorph ruby node")

  var t = morph(args[0], args[args.length - 1])
  console.log(t)

}
