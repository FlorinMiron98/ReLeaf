const commentToastAddEl = document.getElementById("comment-toast-add");
const commentToastAdd = new bootstrap.Toast(commentToastAddEl);
const newMessage = document.querySelector(".new-message");

const displayToastAdd = function () {
  if (newMessage) {
    commentToastAdd.show();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  displayToastAdd();
});
