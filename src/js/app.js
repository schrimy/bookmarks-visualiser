import ListBuilder from './listBuilder'
import Loader from './loader'

const init = () => {
    window.removeEventListener('DOMContentLoaded', init)

    const fileSelector = document.querySelector('.file-selector')
    fileSelector.addEventListener('submit', readOrigin)
}

const readOrigin = (evt) => {
    evt.preventDefault()

    //clear current lists and show loading
    const listContainer = document.querySelector('#lists-container')
    listContainer.innerHTML = ''
    const loader = new Loader(listContainer)

    const filePath = document.querySelector('#file-path')
    console.log('file element files:', filePath.files[0])
    
    Client.checkFile(filePath.files[0])
    .then((data) => {
        console.log('readOrigin returns:', data)

        loader.stopTimer()
        listContainer.innerHTML = ''
        displayBookMarks(data)
    })
    .catch(err => {
        alert('Incompatible file, please check file is a bookmarks html and try again')
        console.log('error reading file:', err)
    })
}

const displayBookMarks = (bMarks) => {
    new ListBuilder(bMarks)
}

export {
    init
}