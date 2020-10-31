import Bookmark from './bookmark'
import Folder from './folder'

export default class ListBuilder{
    
    constructor(data) {
        this.buildList(data)
    }

    buildList(list) {
        const container = document.querySelector('#lists-container')
        const bookmarksList = document.createElement('ul')
        bookmarksList.className = 'bookmark-list'

        container.appendChild(bookmarksList)

        for (const item of list) {
            switch(item.type) {
                case 'folder':
                    new Folder(bookmarksList, item)
                    break
                case 'bookmark':
                    new Bookmark(bookmarksList, item)
                    break
                default:
                    break
            }
        }
    }
}