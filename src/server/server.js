const express = require('express')
//https://www.npmjs.com/package/bookmark-parser (29/10/2020)
const BMParser = require('bookmarks-parser')
const MozParser = require('bookmark-parser')
const fs = require('fs')

const app = express()

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

app.listen(3030, () => {
    console.log('server running on port 3030')
})

//TODO: may also need to use 'path' package to form correct file paths and encrypt?
app.post('/read', (req, res) => {
    console.log('server read file body:', req.body)

    BMParser(req.body.page, (err, response) => {
        if(err) {
            console.log('error parsing file text', err)
            res.send(err)
        }

        console.log(response.bookmarks)
        res.send(response.bookmarks)
    })
})

app.get('/readMoz', (req, res) => {
    MozParser.readFromJSONLZ4File('../../../AppData/Roaming/Mozilla/Firefox/Profiles/2shkn9tx.default/bookmarkbackups/bookmarks-2020-05-17_160_2s2GCdPeIuDlzX+ngp3gsA==.jsonlz4')
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        console.log('error parsing stream:', err)
    })
})

app.get('/readStream', (req, res) => {
    console.log('server read stream')
    fs.promises.readFile('../../../AppData/Local/Google/Chrome/User Data/Default/Bookmarks')
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        console.log('error parsing stream:', err)
    })
})