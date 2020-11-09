import ListBuilder from './listBuilder'

const init = () => {
    //TODO: create radio / select / file chooser to choose either exported html file or local appData file
    const fileSelector = document.querySelector('.file-selector')
    fileSelector.addEventListener('change', readOrigin)

    //fire off initial event to populate page with default file selector form option
    const initEvent = new Event('change')
    fileSelector.dispatchEvent(initEvent)
}

const readOrigin = (evt) => {
    evt.preventDefault()
    const origin = evt.target.value

    //clear current lists
    document.querySelector('#lists-container').innerHTML = ''

    //dependent on selected origin return helper method to run
    const helperToRun = origin === 'file'
        ? Client.readFile
        : Client.readStream

    helperToRun()
    .then((data) => {
        displayBookMarks(data)
    })
}

const displayBookMarks = (bMarks) => {
    new ListBuilder(bMarks)
}

export {
    init
}