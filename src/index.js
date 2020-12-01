/**
 * js
 */
import { init } from './js/app'
import { checkFile } from './server/helpers'

/**
 * styles
 */
import './styles/main.scss'

//when loaded call app init method
window.addEventListener('DOMContentLoaded', init)

export {
    checkFile
}