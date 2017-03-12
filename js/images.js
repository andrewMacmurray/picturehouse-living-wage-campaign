var images = (function () {

  function handleImagesLoad () {
    onLogoLoad(function () {
      onSitesLoad(function () {
        animateSites()
        setTimeout(animateLogo, 500)
        setTimeout(hideSiteText, 1500)
        setTimeout(removeDelay, 2500)
      })
    })
  }

  function onLogoLoad (cb) {
    imagesLoaded('[logo]', { background: true }, function () {
      showLogo()
      cb()
    })
  }

  function onSitesLoad (cb) {
    imagesLoaded('[container]', { background: '[site-img]' }, cb)
  }

  function showLogo () {
    var $logo = helpers.$get('[logo]')
    $logo.classList.remove('o-0')
  }

  function animateLogo () {
    var $logoContainer = helpers.$get('[logo-container]')
    $logoContainer.classList.add('delay-fade')
  }

  function forEachSiteText (cb) {
    var $imgContainers = helpers.$getAll('[site-img-container]')
    $imgContainers.forEach(cb)
  }

  function hideSiteText () {
    forEachSiteText(function (container) {
      container.classList.add('hide-child')
      container.firstElementChild.classList.add('t-10')
    })
  }

  function removeDelay () {
    forEachSiteText(function (container) {
      container.firstElementChild.classList.remove('t-10')
    })
  }

  function animateSites () {
    var $sites = helpers.$getAll('[site-img]')
    $sites.forEach(function (site, i) {
      setTimeout(function () {
        site.classList.remove('o-0')
        site.classList.add('dim')
      }, i * 250)
    })
  }

  return {
    handleImagesLoad: handleImagesLoad
  }

}())
