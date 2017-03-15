var helpers = require('./helpers.js')

function isOpen (overlaySelector) {
  var $overlay = helpers.$get(overlaySelector)
  return $overlay.getAttribute('open') === 'true'
}

function show (overlaySelector) {
  var $overlay = helpers.$get(overlaySelector)
  document.body.classList.add('overflow-y-hidden')
  $overlay.setAttribute('open', 'true')
  $overlay.classList.remove('o-0')
  $overlay.classList.add('z-4')
}

function hide (overlaySelector) {
  var $overlay = helpers.$get(overlaySelector)
  $overlay.setAttribute('open', 'false')
  $overlay.classList.add('o-0', 'overflow-y-hidden')
  setTimeout(function () {
    document.body.classList.remove('overflow-y-hidden')
    $overlay.classList.remove('z-4')
  }, 300)
}

function toggle (overlaySelector) {
  return function () {
    isOpen(overlaySelector)
      ? hide(overlaySelector)
      : show(overlaySelector)
  }
}

function addListeners (overlaySelector, buttonSelector) {
  var $button = helpers.$get(buttonSelector)
  var $overlay = helpers.$get(overlaySelector)
  $overlay.addEventListener('click', function () { hide(overlaySelector) })
  $button.addEventListener('click', toggle(overlaySelector))
}

module.exports = {
  addListeners: addListeners
}
