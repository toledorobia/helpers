import Swal from 'sweetalert2/dist/sweetalert2.js';

const show = (type, message) => {
  Swal.fire({
    position: "top-end",
    toast: true,
    timer: 5000,
    showConfirmButton: false,
    padding: 0,
    background: "transparent",
    customClass: {
      htmlContainer: "toh-container-swal",
      popup: "toh-popup-swal",
    },
    html: '<div class="alert alert-' + type + ' mb-0" role="alert">' + message + '</div>'
  });
}

export const toastSuccess = (message) => {
  show("success", message);
}

export const toastError = (message) => {
  show("danger", message);
}

export const toastWarning = (message) => {
  show("warning", message);
}

export const toastInfo = (message) => {
  show("info", message);
}
