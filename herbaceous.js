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
      return true // lalalalalala

    if(typeof pattern === 'object')
      return Object.keys(pattern).every(function(key) {return test(pattern[key], obj[key])})

    if(typeof pattern === 'function')
      return pattern(obj)

    return pattern === obj

  }
}
