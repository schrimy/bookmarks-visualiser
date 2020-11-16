import ListBuilder from './listBuilder'

const init = () => {
    const fileSelector = document.querySelector('.file-selector')
    fileSelector.addEventListener('submit', readOrigin)

    //fire off initial event to populate page with default file selector form option
    const initEvent = new Event('submit')
    fileSelector.dispatchEvent(initEvent)
}

const readOrigin = (evt) => {
    evt.preventDefault()
    const origin = evt.target.origin.value

    //clear current lists and show loading
    const listContainer = document.querySelector('#lists-container')
    listContainer.innerHTML = 'LOADING..'

    //dependent on selected origin return helper method to run
    const helperToRun = origin === 'file'
        ? () => {
            const filePath = document.querySelector('#file-path')
            console.log('file element files:', filePath.files[0])
            const truePath = window.URL.createObjectURL(filePath.files[0])
            return Client.readBlob(truePath)
        }
        : Client.readStream

    helperToRun()
    .then((data) => {
        console.log('readOrigin returns:', data)

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