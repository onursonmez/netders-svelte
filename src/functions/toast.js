import Toastify from 'toastify-js'

export function toast(message, type, gravity= "bottom") {
    Toastify({
        text: message,
        className: type,
        gravity: gravity
    }).showToast()
}
