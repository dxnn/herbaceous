var HB = {}

HB.test = function(pattern, obj) {
  if(obj === undefined) return wrap
  return wrap(obj)

  function wrap(obj) {
    return test(pattern, obj)
  }

  function test(pattern, obj) {
    if(typeof obj === 'undefined')
      return false

    if(pattern === '*')
      return true

    if(Array.isArray(pattern))
      return HB.all(pattern)(obj)

    if(typeof pattern === 'object')
      return Object.keys(pattern).every(function(key) {return test(pattern[key], obj[key])})

    if(typeof pattern === 'function')
      return pattern(obj)

    return pattern === obj
  }
}

HB.all = function(pattern) {
  return function(obj) {
    if(Array.isArray(pattern))
      return Array.isArray(obj) && pattern.every(function(val) {return ~obj.indexOf(val)})
    return Object.keys(pattern).every(function(val) { return typeof obj[val] != 'undefined'})
  }
}
