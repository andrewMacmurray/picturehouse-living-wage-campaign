var sites = require('./shuffle.js')
var images = require('./images.js')
var menu = require('./menu.js')
var overlay = require('./overlay.js')

sites.shuffleSites()
images.handleImagesLoad()
menu.addListeners()
overlay.addListeners('[info]', '[info-button]')
