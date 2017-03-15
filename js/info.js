var helpers = require('./helpers.js')

function isOpen () {
  var $info = helpers.$get('[info]')
  return $info.getAttribute('open') === 'true'
}

function show () {
  document.body.classList.add('overflow-y-hidden')
  var $info = helpers.$get('[info]')
  $info.setAttribute('open', 'true')
  $info.classList.remove('o-0')
  $info.classList.add('z-4')
}

function hide () {
  var $info = helpers.$get('[info]')
  $info.setAttribute('open', 'false')
  $info.classList.add('o-0', 'overflow-y-hidden')
  setTimeout(function () {
    document.body.classList.remove('overflow-y-hidden')
    $info.classList.remove('z-4')
  }, 300)
}

function toggle () {
  isOpen()
    ? hide()
    : show()
}

function addListeners () {
  var $infoButton = helpers.$get('[info-button]')
  var $info = helpers.$get('[info]')
  $info.addEventListener('click', hide)
  $infoButton.addEventListener('click', toggle)
}

module.exports = {
  addListeners: addListeners
}
