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
    const res = await fetch('http://localhost:8000/read', {
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

const checkFile = (file = {}) => {
    console.log('passed in file:', file)
    const fileType = file.name.split('.')
    const truePath = window.URL.createObjectURL(file)

    switch(fileType[fileType.length - 1].toLowerCase()) {
        case 'html':
            return readBlob(truePath)
        case 'jsonlz4':
            return readMozFile(file)
        default:
            return readStream(file)
    }
}

const readMozFile = async (file = {}) => {
    console.log('read moz file:', file)
    let formData = new FormData()
    formData.append('file', file)

    const res = await fetch('http://localhost:8000/readMoz', {
        method: 'POST',
        credentials: 'same-origin',
        body: formData
    })

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

const readStream = async (file = {}) => {
    let formData = new FormData()
    formData.append('file', file)

    const res = await fetch('http://localhost:8000/readStream', {
        method: 'POST',
        credentials: 'same-origin',
        body: formData
    })

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

//TODO: cleanup unneeded methods
export {
    readFile,
    readStream,
    readMozFile,
    readBlob,
    checkFile
}