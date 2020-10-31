export default class Bookmark {

    constructor(parent, data) {
        this.createBookmark(data, parent)
    }

    createBookmark(content, parentNode) {
        const { url, name } = content

        const bookmarkItem = document.createElement('li')
        bookmarkItem.className= 'bookmark-item'
        bookmarkItem.innerHTML = name

        const link = document.createElement('a')
        link.href = url
        link.innerText = 'Bookmark link'
        link.target = '_blank'
        link.className = 'bookmark-link'

        bookmarkItem.appendChild(link)
        parentNode.appendChild(bookmarkItem)
    }
}