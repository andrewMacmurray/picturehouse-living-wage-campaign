# Picturehouse Living Wage Campaign
A front page for the Picturehouse living wage campaign

Built using [`Jekyll`](https://jekyllrb.com/) and [`Tachyons`](http://tachyons.io/) with [`postCSS`](http://postcss.org/)

To get running locally:

+ make sure you have `ruby` and `node` installed
+ make sure you have `bundler` installed
+ install the `ruby` gems with `bundler install`
+ install the `node` dependencies with `npm install`
+ run `npm run watch` to compile the css, js and watch for changes
+ run `jekyll serve` to start the dev server
+ visit `localhost:4000` to see the site running

deploying:

+ run `jekyll build` to compile the html
+ run `npm run bundle` to compile the minified css and js
+ commit and push to the `gh-pages` branch
