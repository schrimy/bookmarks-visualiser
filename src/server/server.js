const express = require('express')
//https://www.npmjs.com/package/bookmark-parser (29/10/2020)
const BMParser = require('bookmarks-parser')
//https://www.npmjs.com/package/circular-json (29/10/2020)
const Circular = require('circular-json')
const fs = require('fs')

const app = express()

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
//TODO: see if type of data changes this?
app.use(bodyParser.raw)

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

app.listen(3030, () => {
    console.log('server running on port 3030')
})

//TODO: make sure what's sent through is not empty
//TODO: may also need to use 'path' package to form correct file paths and encrypt?
app.post('/read', (req, res) => {
    console.log('server read file body:', req.body)

    /*req.body.text()
    .then((content) => {
        console.log(content)
    })*/

    /*BMParser(req.body, (err, res) => {
        console.log(err)
        console.log(res.parser)
        console.log(res.bookmarks)
    })*/

    /*const stream = fs.createReadStream(req.body)

    BMParser.readFromHTMLReadStream(stream)
    .then((data) => {
        res.send(Circular.stringify(data.Bookmarks.children))
    })
    .catch(err => {
        console.log('error in parser:', err)
    })*/
})

app.get('/readStream', (req, res) => {
    fs.promises.readFile('../../../AppData/Local/Google/Chrome/User Data/Default/Bookmarks')
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        console.log('error parsing stream:', err)
    })
})