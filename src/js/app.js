import ListBuilder from './listBuilder'

const init = () => {
    Client.readStream()
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