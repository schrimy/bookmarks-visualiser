//chaining await promises (https://www.pluralsight.com/guides/handling-nested-http-requests-using-the-fetch-api) (14/11/2020)
const readBlob = async (url = '') => {
    const res = await fetch(url)
    .then((data) => {
        return data.text()
    })
    .then((page) => {
        return readFile(page)
    })
    .then((dataObj) => {
        return dataObj
    })
    .catch(err => {
        console.log('error reading url', err)
    })

    return res
}

//has to call a function on the server as the fs package only runs away from a client side file
const readFile = async(page = {}) => {
    const res = await fetch('http://localhost:3030/read', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: page
        })
    })

    try {
        const data = await res.json()
        console.log('readFile data:', data)
        return {
            children: data[0].children,
            id: 'root',
            name: 'Root'
        }
    } catch (err) {
        console.log('error reading file', err)
    }
}

//https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser - detect currently used browser (24/11/2020)
//detects if either firefox or chrome is being used and then runs the relevenat helper method
const checkBrowser = () => {
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    const isFirefox = typeof InstallTrigger !== 'undefined'
    console.log(`check browser chrome: ${isChrome} firefox: ${isFirefox}`)

    if(isChrome) {
        return readStream()
    } else if(isFirefox) {
        return readMozFile()
    }
}

const readMozFile = async () => {
    const res = await fetch('http://localhost:3030/readMoz')

    try {
        const data = await res.json()
        console.log('moz file data:', data)

        return {
            children: data.children,
            id: 'root',
            name: 'Root'
        }
    } catch (err) {
        console.log('error reading mozilla file:', err)
    }
}

const readStream = async () => {
    const res = await fetch('http://localhost:3030/readStream')

    try {
        const data = await res.json()
        let rootFolders = []

        for (const item of Object.keys(data.roots)) {
            rootFolders.push({
                name: item,
                ...data.roots[item]
            })
        }

        return {
            children: rootFolders,
            id: 'root',
            name: 'Root'
        }
    } catch (err) {
        console.log('error getting browser bookmarks:', err)
    }
}

export {
    readFile,
    readStream,
    readMozFile,
    readBlob,
    checkBrowser
}