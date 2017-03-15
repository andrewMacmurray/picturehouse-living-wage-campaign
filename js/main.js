var sites = require('./shuffle.js')
var images = require('./images.js')
var menu = require('./menu.js')
var info = require('./info.js')

sites.shuffleSites()
images.handleImagesLoad()
menu.addListeners()
info.addListeners()
