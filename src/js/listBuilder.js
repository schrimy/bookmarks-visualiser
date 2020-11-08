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
                case 'url':
                    new Bookmark(bookmarksList, item)
                    break
                default:
                    break
            }
        }
        //animate in the newly created list
        bookmarksList.animate([
            { transform: 'translateX(-100px)'},
            { transform: 'translateX(0px)'}
        ], {
            duration: 100,
            easing: 'ease-out'
        })
    }
}