var recipes = {}

function updateObjectWithKeyAndValue (obj, key, value) {
    obj[key] = value
  return obj
  
}

function updateObjectWithKeyAndValue (obj, key, value) {
    var newObj = Object.assign(obj, {key: value})
  return newObj
  
}

