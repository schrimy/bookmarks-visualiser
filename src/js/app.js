import ListBuilder from './listBuilder'

const init = () => {
    Client.readStream()
    .then((data) => {
        displayBookMarks(data)
    })
}

//TODO: create folder output
const displayBookMarks = (bMarks) => {
    new ListBuilder(bMarks)
}

export {
    init
}