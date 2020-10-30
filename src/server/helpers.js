//has to call a function on the server as the fs package only runs away from a client side file
const readFile = async () => {
    const res = await fetch('http://localhost:3030/read')

    try {
        const data = await res.json()
        return data[0].children[0].children[2].children
    } catch (err) {
        console.log('error reading file', err)
    }
}

export {
    readFile
}