export default class Loader {
    constructor(parent) {
        this.build(parent)
        this.contentArr = ['L', 'O', 'A', 'D', 'I', 'N', 'G']
        this.timer
    }

    build(parentObj) {
        const container = document.createElement('div')
        container.className = 'loader-container'

        parentObj.appendChild(container)

        let counter = 0

        this.timer = setInterval(() => {
            console.log('loader interval')
            container.innerHTML += this.contentArr[counter]
            if(counter === this.contentArr.length) {
                counter = 0
                container.innerHTML = ''
            } else {
                counter++
            }
        }, 300)
    }

    stopTimer() {
        clearInterval(this.timer)
    }
}