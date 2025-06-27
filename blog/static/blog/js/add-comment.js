const commentsContainer = document.querySelector(".comments-container");

const commentToastAddEl = document.getElementById("comment-toast-add");
const commentToastAdd = new bootstrap.Toast(commentToastAddEl);
const newMessage = document.querySelector(".new-message");

const displayToastAdd = function () {
  if (newMessage) {
    commentsContainer.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    commentToastAdd.show();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  displayToastAdd();
});
