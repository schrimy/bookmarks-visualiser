/**
 * js
 */
import { init } from './js/app'
import { readFile, readStream, readMozFile, readBlob, checkBrowser } from './server/helpers'

/**
 * styles
 */
import './styles/main.scss'

//when loaded call app init method
window.addEventListener('DOMContentLoaded', init)

export {
    readFile,
    readStream,
    readMozFile,
    readBlob,
    checkBrowser
}