var menu = (function () {

  function isOpen () {
    var $hamburger = helpers.$get('[hamburger]')
    return helpers.toArray($hamburger.classList).indexOf('open') > -1
  }

  function toggle () {
    var $hamburger = helpers.$get('[hamburger]')
    isOpen()
      ? close()
      : open()
  }

  function open () {
    var $hamburger = helpers.$get('[hamburger]')
    var $menu = helpers.$get('[menu]')

    $hamburger.classList.add('open')
    $hamburger.classList.remove('closed')

    $menu.classList.add('o-100', 'z-4')
    $menu.classList.remove('o-0')
  }

  function close () {
    var $hamburger = helpers.$get('[hamburger]')
    var $menu = helpers.$get('[menu]')

    $hamburger.classList.add('closed')
    $hamburger.classList.remove('open')

    $menu.classList.add('o-0')
    $menu.classList.remove('o-100')

    setTimeout(function () {
      $menu.classList.remove('z-4')
    }, 300)
  }

  function hamburgerListener () {
    var $hamburger = helpers.$get('[hamburger]')
    $hamburger.addEventListener('click', toggle)
  }

  function menuCloseListener () {
    var $menu = helpers.$get('[menu]')
    $menu.addEventListener('click', close)
  }

  function addListeners () {
    hamburgerListener()
    menuCloseListener()
  }

  return {
    addListeners: addListeners
  }

}())
