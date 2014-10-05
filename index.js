#!/usr/bin/env node

var distance = require("leven")
var words = require("an-array-of-english-words")
var sample = require("lodash").sample
var args = process.argv.slice(2)

var trail = []

var findTrail = function(start, target) {

  trail.push(start)

  // What words are one step away? (and haven't already been used)
  var candidates = words.filter(function(word) {
    return distance(start, word) === 1 && trail.indexOf(word) === -1
  })

  // Do any of those candidates complete the morph?
  for (i in candidates) {
    var candidate = candidates[i]
    if (distance(candidate, target) === 1) {
      trail.push(candidate)
      trail.push(target)
      return trail
    }
  }

  // Is one of the candidates any closer to the target?
  for (i in candidates) {
    var candidate = candidates[i]
    if (distance(candidate, target) < distance(start, target)) {
      return findTrail(candidate, target)
    }
  }

  // Can I at least pick a random candidate for the next round?
  if (candidates.length) {
    return findTrail(sample(candidates), target)
  }

  return trail
}


if (args.length < 2 || args.length > 3)
  return console.log("Usage:\n\nmorph good into evil\nmorph black to white\nmorph ruby node")

var t = findTrail(args[0], args[args.length-1])
console.log(t.join("\n"))
