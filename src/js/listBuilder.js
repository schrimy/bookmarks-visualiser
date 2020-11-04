import Bookmark from './bookmark'
import Folder from './folder'

export default class ListBuilder{
    
    constructor(data) {
        this.buildList(data)
        
        console.log('list info:', data)
    }

    buildList(list) {
        const container = document.querySelector('#lists-container')
        const bookmarksList = document.createElement('ul')

        bookmarksList.appendChild(document.createElement('h2')).innerText = list.name
        bookmarksList.className = 'bookmark-list'
        bookmarksList.id = list.id

        container.appendChild(bookmarksList)

        for (const item of list.children) {
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