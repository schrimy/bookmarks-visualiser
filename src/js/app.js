import Bookmark from './bookmark'

const init = () => {
    Client.readFile()
    .then((data) => {
        displayBookMarks(data)
    })
}

//TODO: create folder output
const displayBookMarks = (bMarks) => {
    //TODO: change for switch
    for (const item of bMarks) {
        item.type === 'folder'
            ? console.log('folder')
            : new Bookmark(item)
    }
}

export {
    init
}