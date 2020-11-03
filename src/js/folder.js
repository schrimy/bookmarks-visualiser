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

        listItem.addEventListener('click', () => this.folderClick(folder, parent))
    }

    //TODO: remove sibling lists when a folder button is clicked on (loop through siblings first)
    folderClick(folderObj, parentObj) {
        console.log('parent node to folder:', parentObj.nextElementSibling)
        
        if(parentObj.nextElementSibling !== null) {
            parentObj.nextElementSibling.remove()
        }

        new ListBuilder(folderObj)
    }
}