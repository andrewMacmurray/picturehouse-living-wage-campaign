var info = (function () {

  function isOpen () {
    var $info = helpers.$get('[info]')
    return $info.getAttribute('open') === 'true'
  }

  function show () {
    var $info = helpers.$get('[info]')
    $info.setAttribute('open', 'true')
    $info.classList.remove('o-0')
    $info.classList.add('z-4')
  }

  function hide () {
    var $info = helpers.$get('[info]')
    $info.setAttribute('open', 'false')
    $info.classList.add('o-0')
    setTimeout(function () {
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

  return {
    addListeners: addListeners
  }

}())
