import Bookmark from './bookmark'

const init = () => {
    Client.readFile()
    .then((data) => {
        displayBookMarks(data)
    })
}

//TODO: create folder output
const displayBookMarks = (bMarks) => {
    const container = document.querySelector('#lists-container')
    const bookmarksList = document.createElement('ul')

    container.appendChild(bookmarksList)

    //TODO: change for switch
    for (const item of bMarks) {
        item.type === 'folder'
            ? console.log('folder')
            : new Bookmark(bookmarksList, item)
    }
}

export {
    init
}