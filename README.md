# Bookmarks Visualiser

## Contents
* [Overview](#overview)
* [Resources](#resources)
* [ToDo](#todo)

## Overview

An attempt at building a bookmaks visualiser to make it a bit easier for me to reference things when developing. Currently using:
vanilla JS, SASS, HTML, webpack, node.js, express server, multer.

Currently the user can choose the exported html file or local appData file to upload (jsonlz4 or plain json). It animates in each folder contents as per click
and closes the relevant folder contents when a folder further back in the list is clicked. Displays loading whilst a file text is being
parsed and read.

There are several updates I would like to implement further to improve the look and feel of the app but for now it is functioning enough
to prove the concept.

It now uses bootstrap icons in place of non-distributable icons used previously.

## Resources

[bookmarks-parser, calibr](https://www.npmjs.com/package/bookmarks-parser) - npm package to parse bookmarks via file text. (Used: 10/11/2020)

[bookmark-parser, CCharlieLi](https://github.com/CCharlieLi/bookmark-parser#readme) - node package to read / parse a JSONLZ4 file (23/11/2020)

[iconmonstr](https://iconmonstr.com/) - free icons svg's. (14/11/2020)

[codepen, Barrett Sonntag](https://codepen.io/sosuke/pen/Pjoqqp) - use filters in css to change background image colour. (17/11/2020)

[multer, npm](https://www.npmjs.com/package/multer) - node package to receive files as multipart/form data in the server and store it for use. Here the file is then parsed server side and the data returned to the client. (1/12/2020)

## ToDo

* general styling updates