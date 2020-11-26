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

        bookmarksList.appendChild(document.createElement('h2')).innerText = list.name || list.title
        bookmarksList.className = 'bookmark-list'
        bookmarksList.id = list.id

        container.appendChild(bookmarksList)

        //if there are children to the folder then build out the child objects
        if(list.children !== undefined) {
            for (const item of list.children) {
                switch(item.type) {
                    case 'folder':
                    case 'text/x-moz-place-container':
                        new Folder(bookmarksList, item)
                        break
                    case 'bookmark':
                    case 'url':
                    case 'text/x-moz-place':
                        new Bookmark(bookmarksList, item)
                        break
                    default:
                        break
                }
            }
        }
    }
}