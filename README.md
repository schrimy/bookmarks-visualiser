# Bookmarks Visualiser

## Contents
* [Overview](#overview)
* [Resources](#resources)
* [ToDo](#todo)

## Overview

An attempt at building a bookmaks visualiser to make it a bit easier for me to reference things when developing. Currently using:
vanilla JS, SASS, HTML, webpack.

Currently have the option to read from local app data or to choose an html file to read. It animates in each folder contents as per click
and closes the relevant folder contents when a folder further back in the list is clicked. Displays loading whilst a file text is being
parsed and read.

There are several updates I would like to implement further to improve the look and feel of the app but for now it is functioning enough
to prove the concept.

## Resources

[bookmarks-parser, calibr](https://www.npmjs.com/package/bookmarks-parser) - npm package to parse bookmarks via file text. (Used: 10/11/2020)

[bookmark-parser, CCharlieLi](https://github.com/CCharlieLi/bookmark-parser#readme) - node package to read / parse a JSONLZ4 file (23/11/2020)

[iconmonstr](https://iconmonstr.com/) - free icons svg's. (14/11/2020)

[codepen, Barrett Sonntag](https://codepen.io/sosuke/pen/Pjoqqp) - use filters in css to change background image colour. (17/11/2020)

[stackoverflow](https://stackoverflow.com/questions/23167637/is-it-possible-to-change-the-color-of-selected-radio-buttons-center-circle) - custom radio button styles (17/11/2020)

[stackoverflow](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser) - how to detect which browser is being used (24/11/2020)

## ToDo

* make the reading bookmarks from appData work for firefox aswell as chrome at least
* implement a more usuable interface for smaller screens
* general styling updates