export default class Bookmark {

    constructor(data) {
        this.createBookmark(data)
    }

    createBookmark(content) {
        const { url, name } = content
        const bMarks = document.querySelector('.bookmarks-list')

        const bookmarkItem = document.createElement('li')
        bookmarkItem.className= 'bookmark-item'
        bookmarkItem.innerHTML = name

        const link = document.createElement('a')
        link.href = url
        link.innerText = 'Bookmark link'
        link.target = '_blank'
        link.className = 'bookmark-link'

        bookmarkItem.appendChild(link)
        bMarks.appendChild(bookmarkItem)
    }
}