import ListBuilder from './listBuilder'
export default class Folder {

    constructor(parentNode, folderObj) {
        this.buildFolder(parentNode, folderObj)
    }

    buildFolder(parent, folder) {
        const listItem = document.createElement('li')
        listItem.className = 'bookmark-item'
        listItem.innerHTML = folder.name

        const folderBtn = document.createElement('button')
        folderBtn.innerText = 'Folder ->'

        listItem.appendChild(folderBtn)
        parent.appendChild(listItem)

        listItem.addEventListener('click', () => this.folderClick(folder.children))
    }

    //TODO: later when nav is available, if click on folder that has already created a new list don't create a new one (otherwise duplicates)
    folderClick(childObjs) {
        new ListBuilder(childObjs)
    }
}