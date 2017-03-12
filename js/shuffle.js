var picturehouseSites = (function () {

  function getPicturehouseSites () {
    return helpers.toArray(document.querySelectorAll('[picturehouse-site]'))
  }

  function getPicturehouseContainer () {
    return document.querySelector('[container]')
  }

  function clearContents (element) {
    element.innerHTML = ''
  }

  function appendItems (container, elements) {
    elements.map(function (el) {
      return container.appendChild(el)
    })
  }

  function shuffleSites () {
    var container = getPicturehouseContainer()
    var sites = getPicturehouseSites()

    clearContents(container)
    appendItems(container, helpers.shuffle(sites))
  }

  return {
    shuffleSites: shuffleSites
  }

}())
