var picturehouseSites = (function () {

  function clearContents (element) {
    element.innerHTML = ''
  }

  function appendItems (container, elements) {
    elements.map(function (el) {
      return container.appendChild(el)
    })
  }

  function shuffleSites () {
    var container = helpers.$get('[container]')
    var sites = helpers.$getAll('[picturehouse-site]')
    var last = helpers.$get('[picturehouse-site-odd]')

    clearContents(container)
    appendItems(container, helpers.shuffle(sites))

    if (last) {
      container.appendChild(last)
    }
  }

  return {
    shuffleSites: shuffleSites
  }

}())
