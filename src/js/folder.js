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

    //when folder button is clicked run while loop to remove all previous sibling lists and then add new one
    folderClick(folderObj, parentObj) {
        
        while(parentObj.nextElementSibling !== null) {
            parentObj.nextElementSibling.remove()
        }

        new ListBuilder(folderObj)
    }
}