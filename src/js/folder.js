export default class Folder {

    constructor(parentNode) {
        this.buildFolder(parentNode)
    }

    buildFolder(parent) {
        const listItem = document.createElement('li')
        const folderBtn = document.createElement('button')
        folderBtn.innerText = 'Folder ->'
        folderBtn.className = 'bookmark-item'

        listItem.appendChild(folderBtn)
        parent.appendChild(listItem)
    }
}