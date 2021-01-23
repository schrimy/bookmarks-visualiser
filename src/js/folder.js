import ListBuilder from './listBuilder'
export default class Folder {

    constructor(parentNode, folderObj) {
        this.buildFolder(parentNode, folderObj)

        this.folderBtn
    }

    buildFolder(parent, folder) {
        const listItem = document.createElement('li')
        listItem.className = 'bookmark-item'
        listItem.innerHTML = folder.name || folder.title

        this.folderBtn = document.createElement('button')
        this.folderBtn.className = 'folder-btn'

        listItem.appendChild(this.folderBtn)
        parent.appendChild(listItem)

        listItem.addEventListener('click', () => this.folderClick(folder, parent))
    }

    //when folder button is clicked run while loop to remove all previous sibling lists and then add new one
    folderClick(folderObj, parentObj) {
        //remove inline style of filled folder image if another sibling folder has been clicked
        parentObj.childNodes.forEach(item => {
            if(item.childNodes[1] !== undefined) {
                item.childNodes[1].classList.remove('clicked-folder')
            }
        })

        //add filled in icon to clicked folder object
        this.folderBtn.classList.add('clicked-folder')
        
        //remove any sibling folder lists to the current parent list
        while(parentObj.nextElementSibling !== null) {
            parentObj.nextElementSibling.remove()
        }

        new ListBuilder(folderObj)
    }
}