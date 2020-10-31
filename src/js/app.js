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

    for (const item of bMarks) {
        switch(item.type) {
            case 'folder':
                console.log('folder')
                break
            case 'bookmark':
                new Bookmark(bookmarksList, item)
                break
            default:
                break
        }
    }
}

export {
    init
}