var helpers = (function () {

  function shuffle (arr) {
    var i = arr.length, temp, j

    while (0 !== i) {
      j = Math.floor(Math.random() * i)
      i -= 1
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }

    return arr
  }

  function toArray (nodeList) {
    return [].slice.call(nodeList)
  }

  function $get (selector) {
    return document.querySelector(selector)
  }

  function $getAll (selector) {
    return toArray(document.querySelectorAll(selector))
  }

  return {
    shuffle: shuffle,
    toArray: toArray,
    $get: $get,
    $getAll: $getAll
  }

}())
