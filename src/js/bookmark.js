export default class Bookmark {

    constructor(parent, data) {
        this.createBookmark(data, parent)
    }

    createBookmark(content, parentNode) {
        //different content names depending on file source eg uri for JSONLZ4 file and url for html file / json
        const { url, uri, name, title } = content

        const bookmarkItem = document.createElement('li')
        bookmarkItem.className= 'bookmark-item'
        bookmarkItem.innerText = name || title

        const link = document.createElement('a')
        link.href = url || uri
        link.target = '_blank'
        link.className = 'bookmark-link'

        bookmarkItem.appendChild(link)
        parentNode.appendChild(bookmarkItem)
    }
}