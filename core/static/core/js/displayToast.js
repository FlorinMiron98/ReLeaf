const formToast = document.getElementById("form-toast");
const toast = new bootstrap.Toast(formToast);
const newMessage = document.querySelector(".new-message");

const displayToast = function () {
  if (newMessage) {
    toast.show();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  displayToast();
});
