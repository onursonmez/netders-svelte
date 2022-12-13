import Toastify from "toastify-js";
function toast(message, type, gravity = "bottom", position = "left") {
  Toastify({
    text: message,
    className: type,
    gravity,
    position
  }).showToast();
}
export {
  toast as t
};
