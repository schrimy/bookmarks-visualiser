const express = require('express')
//https://www.npmjs.com/package/bookmark-parser (29/10/2020)
const BMParser = require('bookmark-parser')
//https://www.npmjs.com/package/circular-json (29/10/2020)
const Circular = require('circular-json')

const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

app.listen(3030, () => {
    console.log('server running on port 3030')
})

app.get('/read', (req, res) => {
    BMParser.readFromHTMLFile('../bookmarks/src/assets/bookmarks.html')
    .then((data) => {
        res.send(Circular.stringify(data.Bookmarks.children))
    })
    .catch(err => {
        console.log('error in parser:', err)
    })
})