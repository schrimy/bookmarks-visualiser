import ListBuilder from './listBuilder'
export default class Folder {

    constructor(parentNode, folderObj) {
        console.log('folder obj:', folderObj)
        this.buildFolder(parentNode, folderObj.children)
    }

    buildFolder(parent, childObjs) {
        const listItem = document.createElement('li')
        listItem.className = 'bookmark-item'
        const folderBtn = document.createElement('button')
        folderBtn.innerText = 'Folder ->'

        listItem.appendChild(folderBtn)
        parent.appendChild(listItem)

        listItem.addEventListener('click', () => this.folderClick(childObjs))
    }

    //TODO: later when nav is available, if click on folder that has already created a new list don't create a new one (otherwise duplicates)
    folderClick(childObjs) {
        console.log('build new list please!')
        new ListBuilder(childObjs)
    }
}