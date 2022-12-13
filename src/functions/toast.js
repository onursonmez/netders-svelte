import Toastify from 'toastify-js'

export function toast(message, type, gravity= "bottom", position = "left") {
    Toastify({
        text: message,
        className: type,
        gravity: gravity,
        position: position
    }).showToast()
}
